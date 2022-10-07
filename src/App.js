import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Ingredients from "./component/Ingredients";
import AreaMeal from "./component/AreaMeal";
import Category from "./component/Category";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/area" element={<AreaMeal />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Header />
    //   <Landing />
    // </div>
  );
}

export default App;
