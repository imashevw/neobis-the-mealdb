import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Content from "./components/Content/Content";
import Ingredient from "./components/Ingredient/Ingredients";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route path="/:id" element={<Ingredient />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
