"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center">
      {session ? (
        <>
          <p>Welcome, {session.user?.name}!</p>
          <button onClick={() => signOut()} className="btn">
            Sign Out
          </button>
        </>
      ) : (
        <button onClick={() => signIn("google")} className="btn">
          Sign in with Google
        </button>
      )}
    </div>
  );
}
