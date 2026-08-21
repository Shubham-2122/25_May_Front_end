import React from "react";
// import Hello from "./jsx/Hello";
// import Css from "./Css/Css";
// import MainState from "./State/MainState";
// import FormData from "./FormHadling/FormData";
// import FormObj from "./FormHadling/FormObj";
// import EffectData from "./Effect/EffectData";
// import UserData from "./Effect/UserData";
// import UserAxios from "./Effect/UserAxios";
import Products from "./Effect/Products";
import MainContext from "./context/MainContext";
import Boostra from "./Boot/Boostra";
import ReactCard from "./Boot/ReactCard";
import MdBFooter from "./Boot/MdBFooter";
import Login from "./Boot/Login";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Layout/Pages/Contact";
import Navabar from "./Layout/Coman/Navabar";
import Footer from "./Layout/Coman/Footer";
import About1 from "./Layout/Pages/About1";
import About2 from "./Layout/Pages/About2";
import NotFound from "./Layout/Pages/NotFound";
import TestData from "./Hooks/TestData";
import DemoTest from "./Hooks/DemoTest";
// import MainProps from "./Props/MainProps";
// import ClassCompo from "./Compo/ClassCompo";
// import FuncCompo from "./Compo/FuncCompo";

function App() {
  return (
    <div>
      <BrowserRouter >
        {/* <h1>hello this App page</h1> */}

        {/* <ClassCompo />
      <ClassCompo />
      <FuncCompo /> */}

        {/* jsx */}
        {/* <Hello /> */}

        {/* css */}
        {/* <Css /> */}

        {/* Props */}
        {/* <MainProps /> */}

        {/* State */}
        {/* <MainState /> */}

        {/* formhadling */}
        {/* <FormData /> */}
        {/* <FormObj /> */}

        {/* effects  */}
        {/* <EffectData /> */}
        {/* <UserData /> */}
        {/* <UserAxios /> */}
        {/* <Products /> */}

        {/* <MainContext /> */}

        {/* <Boostra />
        <ReactCard />
        <Login />
        <MdBFooter /> */}


        {/* layout   */}
        {/* <Navabar /> */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} >
            <Route path="about1" element={<About1 />} />
            <Route path="about2" element={<About2 />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/red" element={<TestData />} />
          <Route path="/cus" element={<DemoTest />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}

      </BrowserRouter>
    </div>
  )
}
export default App
