import Header from './components/header/index';
import Main from './components/main/index';
import { checkUser, getTasks, updTask, deleteTask, postTask } from './services';


class AppComp extends Component {
  state = {
    user: null,
    days: null,
    loading: true
  }

  componentDidMount() {
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

  markDone = (data) => {
    updTask(data.id, data)
      .then(res => getTasks().then(days => this.setState({ days })));
  }

  delTask = (id) => {
    console.log(id);
    deleteTask(id)
      .then(res => getTasks().then(days => this.setState({ days })));
  }

  render() {
    const { user, days, loading } = this.state;

    return (
      <>
        <Header user={user} days={days} />
        <Main
          user={user}
          days={days}
          onLogin={this.onLogin}
          loading={loading}
          markDone={this.markDone}
          delTask={this.delTask}
        />
      </>
    );
  }
}

export default AppComp;
