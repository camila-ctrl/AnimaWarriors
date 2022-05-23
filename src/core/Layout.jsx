import NavBar from "../components/NavBar";
import {useState} from "react"

export default function Layout({ children, ...rest }) {
  return (
    <div
      className="min-h-screen px-14 flex justify-center items-center flex-col text-white"
      {...rest}
    >
      <>
        <NavBar />
        {children}
      </>
    </div> 
  );
}
