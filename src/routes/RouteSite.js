import About from "../pages/site/About/About";
import Blog from "../pages/site/Blog/Blog";
import Contact from "../pages/site/Contact/Contact";
import Home from "../pages/site/Home/Home";
import AllProduct from "../pages/site/Product/AllProduct";
import CoffeeMug from "../pages/site/Product/CoffeeMug";
import Orther from "../pages/site/Product/Orther";
import Premium from "../pages/site/Product/Premium";
import TeaMug from "../pages/site/Product/TeaMug";
import ProductDetail from "../pages/site/ProductDetail/ProductDetail";

const RouteSite = [
    {path: "/", element:Home},
    {path: "/product", element:AllProduct},
    {path: "/blog", element:Blog},
    {path: "/category/all-products", element:AllProduct},
    {path: "/category/coffee-mugs", element:CoffeeMug},
    {path: "/category/orthers", element:Orther},
    {path: "/category/premium", element:Premium},
    {path: "/category/tea-mugs", element:TeaMug},
    {path: "/about", element:About},
    {path: "/contact", element:Contact},
    {path: "/product/:id", element:ProductDetail},
    {path: "/contact", element:Contact},
]
export default RouteSite