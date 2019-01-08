import TaskBoard from '../taskBoard';
import TaskList from '../taskList';
import {Tabs} from '../tabs';
import { Tab } from '../tabs';
import Login from '../../pages/login';

import './main.scss';

class Main extends Component {
  state = {
    dayWeek: 0,
  }

  componentDidMount() {
    this.setState({ dayWeek: (new Date().getDay()) });
  }

  render() {
    const {
      onLogin,
      days,
      user,
      markDone,
      delTask
    } = this.props;
    
    const {
      dayWeek
    } = this.state;

    return (
      <>
        {
          user
            ? <main className="main">
              <Tabs days={days} markDone={markDone} delTask={delTask} dayWeek={dayWeek} >
              </Tabs>
            </main>
            : <Login onLogin={onLogin} /> //<Form />
        }
      </>
    )
  }
}

export default Main;
