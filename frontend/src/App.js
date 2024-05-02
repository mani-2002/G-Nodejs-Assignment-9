import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./Component/Books";
import BookAddition from "./Component/BookAddition";
import BookUpdation from "./Component/BookUpdation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />}></Route>
          <Route path="/addBook" element={<BookAddition />}></Route>
          <Route path="/update/:id" element={<BookUpdation />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
