import "@/styles/globals.css";
import "@/styles/styles.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Jonah Choi",
  description: "Jonah Choi's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Jonah Choi</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
