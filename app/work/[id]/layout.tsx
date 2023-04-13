import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='bg-mobile h-screen'>
      <div>
        {/* @ts-ignore */}
      </div>
      <div className=''>{children}</div>
    </main>
  );
}