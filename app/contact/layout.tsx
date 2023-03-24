import React from "react";
import Header from "../Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='bg-contact h-screen'>
      <div>{/* @ts-ignore */}</div>
      <Header bgColor="bg-transparent" textColor="text-white"/>
      <div className=''>{children}</div>
    </main>
  );
}
