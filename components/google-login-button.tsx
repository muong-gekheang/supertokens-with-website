"use client";

import { useEffect } from "react";
import ThirdParty from "supertokens-web-js/recipe/thirdparty";
import { initSuperTokens } from "@/lib/supertokens";

export default function GoogleLoginButton() {
  useEffect(() => {
    initSuperTokens();
  }, []);

  async function loginWithGoogleClicked() {
    try {
      console.log("Getting Google auth URL...");
      let googleAuthURL =
        await ThirdParty.getAuthorisationURLWithQueryParamsAndSetState({
          frontendRedirectURI: "http://localhost:3000/auth/callback/google",
          thirdPartyId: "google",
        });

      console.log("Got URL:", googleAuthURL);
      window.location.href = googleAuthURL;
    } catch (e: any) {
      if (e instanceof Response) {
        const body = await e.json();
        console.error("SuperTokens backend error:", body);
      } else {
        console.error("Error:", e);
      }
    }
  }

  return (
    <button
      onClick={loginWithGoogleClicked}
      className="px-4 py-2 bg-white border rounded"
    >
      Continue with Google
    </button>
  );
}
