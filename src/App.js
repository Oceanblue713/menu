import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Article from "./components/Articles/Article";
import Footer from "./components/Footer";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Grid>
          <Nav />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="article" element={<Article />} />
          </Routes>

          <Footer />
        </Grid>
      </div>
    </Router>
  );
}

export default App;
