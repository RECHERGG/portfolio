"use client";

import { useEffect } from "react";
import { CookieConsent } from "./cookie-consent";
import { initBklit } from "@bklit/sdk";

export function CookieConsentWrapper() {
  const handleAccept = () => {
    initBklit({
      projectId: process.env.PROJECT_ID as string,
      apiKey: process.env.NEXT_PUBLIC_BKLIT_API_KEY as string,
      debug: process.env.NODE_ENV === "development",
    });
  };

  const handleDecline = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("bklit_session_id");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && document.cookie.includes("cookieConsent=true")) {
      handleAccept();
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md">
      <CookieConsent
        variant="default"
        onAcceptCallback={handleAccept}
        onDeclineCallback={handleDecline}
      />
    </div>
  );
}
