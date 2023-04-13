import React from "react";
import Header from "../Header";
import Footer from "../Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='bg-contact h-screen px-5 md:px-11 lg:'>
      <div>{/* @ts-ignore */}</div>
      {/* <Header bgColor="bg-transparent" textColor="text-white"/> */}
      <div className=''>{children}</div>
      {/* <Footer bgColor='bg-transparent' textColor='text-white'/> */}
    </main>
  );
}
