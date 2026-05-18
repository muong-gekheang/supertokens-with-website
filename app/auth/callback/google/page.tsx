"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ThirdParty from "supertokens-web-js/recipe/thirdparty";
import { initSuperTokens } from "@/lib/supertokens";

export default function GoogleCallback() {
  const router = useRouter();

  useEffect(() => {
    initSuperTokens();
    consumeAuthCodeAndLoginUser();
  }, []);

  async function consumeAuthCodeAndLoginUser() {
    let result = await ThirdParty.signInAndUp();

    if (result.status === "OK") {
      if (result.createdNewRecipeUser) {
        // new user → redirect to onboarding or dashboard
        router.push("/dashboard");
      } else {
        // existing user → redirect to dashboard
        router.push("/dashboard");
      }
    } else {
      // no email associated → redirect back to login
      router.push("/auth?error=no-email");
    }
  }

  return <div>Logging you in...</div>;
}
