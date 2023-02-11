import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./pages/AuthRoutes/AuthRoutes";
import LayoutRoutes from "./pages/LayoutRoutes/LayoutRoutes";
import useAuth from "./apps/Auth/helpers/hooks/useAuth";

import "./App.scss";


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />}/>;
        <Route path="/*" element={<LayoutRoutes />}/>
      </Routes>
    </div>
  );
}

export default App;
