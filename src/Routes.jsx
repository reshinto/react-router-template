import { Route, Redirect } from "react-router-dom";
import Home from "./containers/Home";
import ProtectedRoute from "./shared/components/ProtectedRoute";

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
    <ProtectedRoute
      exact
      path="/protectedpath"
      component={Home}
      redirectPath="/"
    />
    <Route render={() => <Redirect to="/" />} />
  </>
);

export default Routes;
