import TopUp from "./pages/TopUp/TopUpPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Transfer from "./pages/Transfer/TransferPage";
// import Landing from "./pages/Landing";

// TODO : Implementasi lazyloading

export const privateRoutes = [
  // {
  //   path: "/",
  //   element: Landing,
  // },  
  {
    path: "/",
    element: Home,
  },
];

export const publicRoutes = [
  {
    path: "/login",
    element: Login,
  },{
    path: "/register",
    element: Register,
  },{
    path: "/home",
    element: Home,
  },{
    path: "/topup",
    element: TopUp,
  },{
    path: "/transfer",
    element: Transfer,
  }
];
