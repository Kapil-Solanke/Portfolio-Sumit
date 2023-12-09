import "./App.css";
import {Home} from "./pages/Home";
import { Route,Routes } from "react-router-dom";
function App() {
  return <div className="w-full m-auto">
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
    </Routes>
  </div>
}

export default App;
