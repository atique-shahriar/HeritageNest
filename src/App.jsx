import { Outlet } from "react-router-dom";
import Copyright from "./Layouts/Copyright/Copyright";
import Footer from "./Layouts/Footer/Footer";
import Navbar from "./Layouts/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
}

export default App;
