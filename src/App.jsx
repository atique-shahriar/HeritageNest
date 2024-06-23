import { Outlet } from "react-router-dom";
import Footer from "./Layouts/Footer/Footer";
import Navbar from "./Layouts/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
