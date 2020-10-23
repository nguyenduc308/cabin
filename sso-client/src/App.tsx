import WrapperAPI from "HOC/WrapperAPI";
import { useLocalStorage } from "hooks";
import { IAPIMethod } from "interfaces";
import { Login } from "pages/login";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import * as _ from "lodash";
interface IAppProps {
  data?: any;
}
const App: React.FC<IAppProps & RouteComponentProps & IAPIMethod> = ({
  history,
  verifyToken,
  data,
}) => {
  const [token] = useLocalStorage("access_token");
  const setAuth = _.get(data, "setAth");

  React.useEffect(() => {
    if (token) {
      verifyToken(
        token,
        () => {
          if (setAuth) {
            setAuth(token);
          }
          history.push("/");
        },
        () => {
          history.push("/login");
        }
      );
    } else {
      history.push("/login");
    }
  }, [token]);
  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/login"
          exact
          render={(props) => {
            return <Login {...props} setAuth={setAuth} />;
          }}
        />
      </Switch>
    </React.Fragment>
  );
};

export default WrapperAPI(App);
