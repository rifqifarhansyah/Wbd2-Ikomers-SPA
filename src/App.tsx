import { Route, Routes } from 'react-router-dom';

import { publicRoutes, privateRoutes } from "./routes";

function App() {
  return (
    <Routes>
        
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element/>}/>

      ))}
        
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element/>}/>

      ))}

    </Routes>
  );
}

export default App;
