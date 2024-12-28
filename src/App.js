import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signIn/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<SignIn />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
