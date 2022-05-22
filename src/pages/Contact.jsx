import React from "react";
import Layout from "../core/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="w-full min-h-screen flex items-center justify-around">
        <img src="/logo.png" alt="Logo"/>
        <h1 className="text-center" style={{ fontSize: "100px" }}>
          ANIMA WARRIORS
        </h1>
      </div>
    </Layout>
  );
}
