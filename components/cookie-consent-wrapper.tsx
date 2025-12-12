"use client";

import { useEffect } from "react";
import { CookieConsent } from "./cookie-consent";
import { initBklit } from "@bklit/sdk";

export function CookieConsentWrapper() {
  const handleAccept = () => {
    initBklit({
      projectId: "cmj3b77lf000151h0q1e0k8jf",
      apiKey: process.env.NEXT_PUBLIC_BKLIT_API_KEY!,
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
