import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function LayoutWrapper(props) {
  return (
    <div>
      <Header />
      <div style={{ marginTop: 105 }}>{props.children}</div>
      <Footer />
    </div>
  );
}
