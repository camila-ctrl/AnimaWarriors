import NavBar from "../components/NavBar";

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
    //olis
  );
}
