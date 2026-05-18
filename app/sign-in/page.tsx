import GoogleLoginButton from "@/components/google-login-button";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <GoogleLoginButton />
      </div>
    </main>
  );
}
