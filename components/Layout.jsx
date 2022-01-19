import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header></Header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
