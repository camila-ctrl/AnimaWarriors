import React from "react";
import Layout from "../core/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-full flex items-center justify-around">
        <img src="/logo.png" alt="Logo" className="pl-20"/>
        <h1 className="pl-20" style={{ fontSize: "100px" }}>
          ANIMA <span className="font-bold">WARRIORS</span>
        </h1>
      </div>
    </Layout>
  );
}
