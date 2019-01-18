import { Tabs, Tab } from '../../components/tabs';

import './tasks.scss';

const Tasks = ({ days, markDone, delTask, dayWeek }) => (
  <Tabs markDone={markDone} delTask={delTask}>
    <Tab days={days} dayWeek={dayWeek} />
  </Tabs>

);

export default Tasks;
