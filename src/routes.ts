import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
// import Landing from "./pages/Landing";

// TODO : Implementasi lazyloading

export const privateRoutes = [
  // {
  //   path: "/",
  //   element: Landing,
  // },
  {
    path: "/home",
    element: Home,
  }
];

export const publicRoutes = [
  {
    path: "/",
    element: Login,
  },{
    path: "/register",
    element: Register,
  }
];
