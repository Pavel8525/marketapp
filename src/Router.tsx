import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { getUrlParams } from "utils/getSearchParams";

const AuthRouter = React.lazy(() => import("./routes/AuthRouter"));
const QuizPage = React.lazy(() => import("./pages/QuizPage"));

const AppRouter = () => {
  const [quizId] = getUrlParams("quiz");
  return (
    <Router>
      <Suspense fallback={"Loading"}>
        <Switch>
          <Route exact path={"/:pollUrl"} component={QuizPage} />
          <Route exact path={"/poll/:id"} component={QuizPage} />
          <Route path={"/account/user"} component={AuthRouter} />
          {quizId !== null && <Redirect to={`/poll/${quizId}`} />}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
