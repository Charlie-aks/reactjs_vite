import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LayoutSite from "./layouts/LayoutSite/LayoutSite";
import RouteSite from "./routes/RouteSite";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutSite />}>
       {RouteSite.map((route,index)=>{
        const Page = route.element;
        return <Route key={index} path={route.path} element={<Page />}/>
       })}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
