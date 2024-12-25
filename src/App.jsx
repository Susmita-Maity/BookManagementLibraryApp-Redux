import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster />
    </div>
  );
}

export default App;