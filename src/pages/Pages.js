import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import Hello from './hello';
import Tasks from './tasks';
import CreateUser from './createUser';
import SuccessfullRegister from './successfullRegister';
import HomeUnauthorized from './homeUnauthorized';

export const Pages = ({
  user,
  onLogin,
  days,
  markDone,
  delTask,
  dayWeek
}) => (
  <Switch>
    {
      !user ?
        [
          <Route
            path="/login"
            exact
            render={() => <Login onLogin={onLogin} />}
            key="login"
          />,
          <Route
            path="/user"
            exact
            component={CreateUser}
            key="user"
          />,
          <Route
            path="/(home)?"
            exact
            component={HomeUnauthorized}
            key="homeless"
          />,
          <Route
            path="/success"
            exact
            render={({ history }) => <SuccessfullRegister history={history} />}
            key="success"
          />,
        ]
        : [
          <Route
            path="/tasklist"
            render={() => (
              <Tasks
                days={days}
                markDone={markDone}
                delTask={delTask}
                dayWeek={dayWeek}
              />
            )}
            key="tasklist"
          />,
          <Route
            path="/(home)?"
            exact
            render={() => <Hello user={user} />}
            key="home"
          />,
          <Redirect from="/login" to="/home" key="redirectLoginHome" />
        ]
    }
    <Route
      render={props => (
        <h1>
          <mark>
            Ти заблукав? Чи шо? Це шукаеш {props.location.pathname}?
          </mark>
        </h1>
      )}
    />
  </Switch>
);
