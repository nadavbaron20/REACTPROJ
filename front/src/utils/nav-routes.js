import BusinessManagement from "../pages/BusinessManagement.jsx";
import CreateBus from "../pages/CreateBus.jsx";
import FavCards from "../pages/FavCards.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Logout from "../pages/Logout.jsx";
import Register from "../pages/Register.jsx";

export const navRoutes = [
  {
    path: "/",
    component: Home,
    label: "דף הבית",
  },
  {
    path: "/fav-cards",
    component: FavCards,
    label: "עמוד מועדפים",
  },
  {
    path: "/register",
    component: Register,
    label: "הרשמה",
  },
  {
    path: "/login",
    component: Login,
    label: "התחברות",
  },
  {
    path: "/logout",
    component: Logout,
    label: "התנתקות",
  },
  {
    path: "/bus/new",
    component: CreateBus,
    label: "יצירת עסק חדש",
  },
  {
    path: "/bus/manager",
    component: BusinessManagement,
    label: "ניהול עסקים",
  },
];

export default navRoutes;
