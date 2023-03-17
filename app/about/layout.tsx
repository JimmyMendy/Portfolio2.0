import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=''>
      <div>
        {/* @ts-ignore */}
      </div>
      <div className=''>{children}</div>
    </main>
  );
}
