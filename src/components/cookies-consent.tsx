import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const COOKIE_CONSENT_KEY = "cookieConsent";
const COOKIE_CONSENT_EXPIRY = 180; // days

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentData = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consentData) {
      const {
        //  accepted,
        timestamp,
      } = JSON.parse(consentData);
      const now = new Date().getTime();
      const expiryTime =
        timestamp + COOKIE_CONSENT_EXPIRY * 24 * 60 * 60 * 1000;

      if (now > expiryTime) {
        // Expired → re-show banner
        setVisible(true);
      } else {
        // Still valid → don’t show
        setVisible(false);
      }
    } else {
      // First time visit → show banner
      setVisible(true);
    }
  }, []);

  const saveConsent = (accepted: boolean) => {
    const data = {
      accepted,
      timestamp: new Date().getTime(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(data));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-white border border-gray-300 rounded-xl shadow-lg p-4 z-50">
      <p className="text-gray-800 text-sm">
        We use cookie to improve your experience on our site. By using our site
        you consent cookies.{" "}
        <a href="/privacy" className="font-semibold underline">
          Learn more
        </a>
      </p>

      <div className="mt-3 flex gap-2">
        <Button
          onClick={() => saveConsent(true)}
          className="flex-1  text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition"
        >
          Allow Cookies
        </Button>
        <Button
          variant={"outline"}
          onClick={() => saveConsent(false)}
          className="flex-1 border-2 border-gray-400 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Decline
        </Button>
      </div>
    </div>
  );
}
