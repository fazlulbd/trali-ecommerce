import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>  
        <Route index element={<Home/>} />
        <Route path="cart" element={<Cart/>} />
      </Route>
    )
  )
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
