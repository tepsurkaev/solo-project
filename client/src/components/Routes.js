import { Switch, Route, Redirect } from "react-router-dom";
import AllProductsPage from "./pages/AllProductsPage";
import AboutPage from "./pages/AboutPage";
import AdminDeleteProducts from "./pages/AdminDeleteProducts";
import AdminEditProducts from "./pages/AdminEditProducts";
import AdminAddingProducts from "./pages/AdminAddingProducts";
import Cart from "./cart/Cart";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <AllProductsPage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/admin/deleting" exact>
        <AdminDeleteProducts />
      </Route>
      <Route path="/admin/editing" exact>
        <AdminEditProducts />
      </Route>
      <Route path="/admin/adding" exact>
        <AdminAddingProducts />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
