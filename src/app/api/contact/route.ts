import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // 1. Send Instant Mobile Alert via Discord Webhook (if configured)
    const discordWebhook = process.env.CONTACT_WEBHOOK_URL;
    if (discordWebhook && discordWebhook.startsWith("http")) {
      try {
        const isDiscord = discordWebhook.includes("discord.com/api/webhooks");

        const payload = isDiscord
          ? {
              username: "Portfolio Notification Bot",
              avatar_url: "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/mail.png",
              embeds: [
                {
                  title: "📬 New Portfolio Client Inquiry",
                  color: 6520753, // Electric Indigo #6366f1
                  fields: [
                    { name: "👤 Sender Name", value: name, inline: true },
                    { name: "📧 Sender Email", value: `[${email}](mailto:${email})`, inline: true },
                    { name: "💼 Project Type", value: projectType || "General Inquiry", inline: false },
                    { name: "💬 Message Details", value: message, inline: false },
                  ],
                  footer: { text: "Abdurrahman Portfolio • Direct Alert" },
                  timestamp: new Date().toISOString(),
                },
              ],
            }
          : {
              text: `📬 *New Portfolio Inquiry from ${name}*\n*Email:* ${email}\n*Type:* ${projectType || "General"}\n*Message:* ${message}`,
            };

        await fetch(discordWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (webhookErr) {
        console.error("Webhook notification error:", webhookErr);
      }
    }

    // 2. Send Instant Mobile Alert via Telegram Bot (if configured)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;
    if (telegramToken && telegramChatId) {
      try {
        const tgText = `📬 *New Portfolio Inquiry*\n\n*From:* ${name}\n*Email:* ${email}\n*Type:* ${projectType || "General"}\n\n*Message:*\n${message}`;
        await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: tgText,
            parse_mode: "Markdown",
          }),
        });
      } catch (tgErr) {
        console.error("Telegram notification error:", tgErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully! Abdurrahman will get back to you soon.",
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error processing message." },
      { status: 500 }
    );
  }
}
