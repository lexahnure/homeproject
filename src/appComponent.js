import { withRouter } from 'react-router-dom';
import Header from './components/header/index';
import Main from './components/main/index';
import { checkUser, getTasks, updTask, deleteTask, postTask } from './services';
import { Pages } from './pages/Pages';


class AppComp extends Component {
  state = {
    user: null,
    days: null,
    loading: true,
    dayWeek: 0,
  }

  componentDidMount() {
    const day = new Date().getDay();
    this.setState({ dayWeek: day });
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.user && this.state.user) {
      getTasks()
        .then(days => this.setState({ days }));
    }
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  onLogout = () => {
    this.setState({ user: null });
  }

  markDone = (data) => {
    data.done = true;
    updTask(data.id, data)
      .then(res => getTasks().then(days => this.setState({ days })));
  }

  delTask = (id) => {
    deleteTask(id)
      .then(res => getTasks().then(days => this.setState({ days })));
  }

  render() {
    const { user, days, loading, dayWeek } = this.state;

    const ConnectedHeader = withRouter(({ history }) => (
      <Header
        user={user}
        onLogout={this.onLogout}
        history={history}
      />
    ));

    return (
      <>
        <ConnectedHeader />
        <Main
          loading={loading}
        >
          <Pages
            user={user}
            days={days}
            onLogin={this.onLogin}
            markDone={this.markDone}
            delTask={this.delTask}
            dayWeek={dayWeek}
          />
        </Main>
      </>
    );
  }
}

export default AppComp;
