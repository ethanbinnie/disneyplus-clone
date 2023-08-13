import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Watchlist from "./components/Watchlist";
import Originals from "./components/Originals";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/watchlist" element={<Watchlist />}/>
          <Route path="/originals" element={<Originals />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/series" element={<Series />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
