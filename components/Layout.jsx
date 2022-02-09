import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ brands, children }) {
  return (
    <div className="min-w-full justify-between flex-col ">
      <Header brands={brands}/>
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
