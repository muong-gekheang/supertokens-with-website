"use client";

import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div>
      {error === "no-email" && (
        <p className="text-red-500">
          Your Google account has no email. Please use another login method.
        </p>
      )}

      {/* your login buttons */}
    </div>
  );
}
