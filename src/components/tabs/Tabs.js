import { TabNav } from './TabNav';
import { Tab } from './Tab';
import TaskList from '../taskList';

import './tabs.scss';

export class Tabs extends Component {
  state = {
    selectIndex: 0,
  }

  componentDidMount() {
    const { dayWeek } = this.props;
    this.setState({ selectIndex: dayWeek });
  }

  selectTab = (selectIndex) => {
    this.setState({ selectIndex });
  }

  render() {
    const { days, markDone, delTask } = this.props;
    const { selectIndex } = this.state;

    return (
      <div className="tabs">
        {
          days && <TabNav tabs={days} selectIndex={selectIndex} selectTab={this.selectTab} />
        }
        <div className="tab-content">
          {
            days && (
              <TaskList content={days[selectIndex]} markDone={markDone} delTask={delTask} />
            )
          }
        </div>
      </div>
    );
  }
}
