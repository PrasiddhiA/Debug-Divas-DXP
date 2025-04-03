"use client";

// Temporarily comment out or replace the SessionProvider
// import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  // return <SessionProvider>{children}</SessionProvider>;
  return <>{children}</>;
}