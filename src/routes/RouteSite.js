import Blog from "../pages/site/Blog/Blog";
import Home from "../pages/site/Home/Home";
import AllProduct from "../pages/site/Product/AllProduct";
import CoffeeMug from "../pages/site/Product/CoffeeMug";
import Orther from "../pages/site/Product/Orther";
import Premium from "../pages/site/Product/Premium";
import TeaMug from "../pages/site/Product/TeaMug";

const RouteSite = [
    {path: "/", element:Home},
    {path: "/product", element:AllProduct},
    {path: "/blog", element:Blog},
    {path: "/category/all-products", element:AllProduct},
    {path: "/category/coffee-mugs", element:CoffeeMug},
    {path: "/category/orthers", element:Orther},
    {path: "/category/premium", element:Premium},
    {path: "/category/tea-mugs", element:TeaMug},
]
export default RouteSite