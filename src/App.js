import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { books  } from "./data"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} /> 
        <Route path="/books" exact render={() => <Books books={books} />}  /> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
