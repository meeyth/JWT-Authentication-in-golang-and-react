import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
