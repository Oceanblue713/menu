import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Article from "./components/Articles/Article";
import ArticleContainer from "./components/Articles/ArticleContainer";
import Footer from "./components/Footer";
import Grid from "@mui/material/Grid";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

function App(item) {
  return (
    <Router>
      <div className="app">
        <Grid>
          <Nav />
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/article" component={<ArticleContainer />} />
          </Routes>
          <Footer />
        </Grid>
      </div>
    </Router>
  );
}

export default App;
