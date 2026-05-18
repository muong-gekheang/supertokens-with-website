"use client";

import { useEffect } from "react";
import { initSuperTokens } from "@/lib/supertokens";

export default function SuperTokensInit() {
  useEffect(() => {
    initSuperTokens();
  }, []);

  return null; // renders nothing
}
