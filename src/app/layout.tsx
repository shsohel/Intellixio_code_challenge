/** @format */

import { headers } from "next/headers";
import { UserAgentProvider } from "../components/providers/userAgentProvider";
import "./globals.css";
import { Layout } from "@/components/layout";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  // Get user agent from server headers
  const userAgent = headers().get("user-agent") || undefined;

  return (
    <html lang="en">
      <body>
        <UserAgentProvider initialUserAgent={userAgent}>
          <Layout>{children}</Layout>
        </UserAgentProvider>
      </body>
    </html>
  );
};

export default RootLayout;
