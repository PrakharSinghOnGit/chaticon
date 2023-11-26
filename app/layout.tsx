import "./globals.css";

export const metadata = {
  title: "Chaticon",
  description: "Chat Application with Next.js, TailwindCSS, and Socket.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
