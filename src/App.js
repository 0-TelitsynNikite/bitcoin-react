import Navbar from "./components/navbar/Navbar";
import Buy from "./pages/buy/Buy";
import Sell from "./pages/sell/Sell";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/buy" element={<Buy/>}/>
          <Route path="/sell" element={<Sell/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
