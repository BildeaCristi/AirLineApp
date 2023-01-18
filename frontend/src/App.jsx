// import logo from './logo.svg';
import './App.css';
import "./pages/HomePage";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllTablesComponent from "./components/AllTablesComponent/AllTablesComponent";
import Exercitiu3aTable from "./components/Exercitiu3a/Excercitiu3a";
import Exercitiu3bTable from "./components/Exercitiu3b/Exercitiu3b";
import Exercitiu4aTable from "./components/Exercitiu4a/Exercitiu4a";
import Exercitiu4bTable from "./components/Exercitiu4b/Exercitiu4b";
import Exercitiu5aTable from "./components/Exercitiu5a/Exercitiu5a";
import Exercitiu5bTable from "./components/Exercitiu5b/Exercitiu5b";
import Exercitiu6aTable from "./components/Exercitiu6a/Exercitiu6a";
import Exercitiu6bTable from "./components/Exercitiu6b/Exercitiu6b";
import AllTables from "./pages/AllTables";
function App() {
  return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tables" element={<AllTables />} />
              <Route path="/exercitiu3a" element={<Exercitiu3aTable />} />
              <Route path="/exercitiu3b" element={<Exercitiu3bTable />} />
              <Route path="/exercitiu4a" element={<Exercitiu4aTable />} />
              <Route path="/exercitiu4b" element={<Exercitiu4bTable />} />
              <Route path="/exercitiu5a" element={<Exercitiu5aTable />} />
              <Route path="/exercitiu5b" element={<Exercitiu5bTable />} />
              <Route path="/exercitiu6a" element={<Exercitiu6aTable />} />
              <Route path="/exercitiu6b" element={<Exercitiu6bTable />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
