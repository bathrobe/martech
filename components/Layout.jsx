import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ brands, children }) {
  return (
    <div className=" justify-between flex flex-col ">
      <Header brands={brands}/>
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
