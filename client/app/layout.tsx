import type { Metadata } from 'next';
import { SessionProvider } from "next-auth/react";
import './globals.css';

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}












// import type { Metadata } from 'next'
// import './globals.css'
// "use client";

// import { SessionProvider } from "next-auth/react";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return <SessionProvider>{children}</SessionProvider>;
// }


// export const metadata: Metadata = {
//   title: 'v0 App',
//   description: 'Created with v0',
//   generator: 'v0.dev',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }"""
