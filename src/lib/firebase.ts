import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD0H4lR4LK8iBsK3xQW6UTMh550r9_bxUs",
  authDomain: "portfolio-11912.firebaseapp.com",
  projectId: "portfolio-11912",
  storageBucket: "portfolio-11912.firebasestorage.app",
  messagingSenderId: "50413147668",
  appId: "1:50413147668:web:bee0bf23483a32a3633901",
  measurementId: "G-HL7DHH48FM"
};

// Prevent re-initialization during hot reloading in Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Analytics is only supported in browser environments (not on server-side rendering)
let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };

