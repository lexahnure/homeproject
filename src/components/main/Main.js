import TaskBoard from '../taskBoard';
import TaskList from '../taskList';

import './main.scss';

class Main extends Component {

  render() {

    return (
      <main className="main">
        <TaskBoard />
        <TaskList />
      </main>
    )
  }
};

export default Main;
