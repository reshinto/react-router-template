import { Route, useHistory } from "react-router-dom";
import Loader from "../Loader";

const ProtectedRoute = ({ component: Component, redirectPath, ...rest }) => {
  // const { loading, isAuthenticated } = useSelector(state => state.reducer);
  const isLoading = false;
  const isAuthenticated = false;
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={props => {
        if (isLoading) return <Loader />;
        else if (!isAuthenticated) return history.push(`${redirectPath}`);
        else return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
