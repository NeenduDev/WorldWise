import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path={"product"} element={<Product />} />
        <Route path={"pricing"} element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path={"app"} element={<AppLayout />}>
          <Route index element={<p>List of sex</p>} />
          <Route path="cities" element={<p>List of Cities</p>} />
          <Route path="countries" element={<p>Country</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
-Wildcard (*) catches any route that is not explicitly defined. It's a fallback mechanism for undefined or unmatched paths.
-Index is used inside a route to render a default component for a specific parent route, especially when that route is visited without navigating to any nested child route.
*/
