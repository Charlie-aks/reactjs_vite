import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LayoutSite from "./layouts/LayoutSite/LayoutSite";
import RouteSite from "./routes/RouteSite";
import './index.css';
import { CartProvider, useCart } from "./context/CartContext";
import Toast from "./components/Toast";

const AppContent = () => {
  const { notification, hideNotification } = useCart();

  return (
    <>
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
      <Toast
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
        type={notification.type}
      />
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
