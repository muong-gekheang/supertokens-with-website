// src/app/sign-in/page.tsx

import GoogleLoginButton from "@/components/google-login-button";

export default function SignInPage() {
  return (
    <main
      className="
        min-h-screen
        flex items-center justify-center
        bg-gray-100
        px-4
      "
    >
      <div
        className="
          w-full max-w-md
          bg-white
          rounded-2xl
          shadow-lg
          p-8
        "
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>

          <p className="mt-2 text-gray-500">Sign in to continue</p>
        </div>

        <GoogleLoginButton />
      </div>
    </main>
  );
}
