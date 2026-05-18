import SuperTokensInit from "@/components/supertokens-init";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <SuperTokensInit /> {/* ← initializes SuperTokens on client */}
        {children}
      </body>
    </html>
  );
}
