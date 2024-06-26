import { Outlet } from "react-router-dom";
import Copyright from "./Layouts/Copyright/Copyright";
import Footer from "./Layouts/Footer/Footer";

function App() {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
}

export default App;
