"use client"

import SignIn from "./signin/page";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-200">
      <SignIn />
    </main>
  );
}