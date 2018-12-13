import './taskboard.scss';

class TaskBoard extends Component {
  state = {
    username: 'Alex',
    overall : 10,
    done: 3,
    inprogress: 1,
    waiting: 5
  }

  render () {
    const {
      username,
      overall,
      done,
      inprogress,
      waiting
    } = this.state;

    return (
      <div className="board">
        <h2>Hello {username}</h2>
        <div className="tasks">
          {
            <>
              <p>You have overall tasks</p><strong>{overall}</strong> 
              <p>Done tasks</p><strong>{done}</strong>
              <p>In progress tasks</p><strong>{inprogress}</strong>
              <p>Waiting tasks</p><strong>{waiting}</strong>
            </>      
          }
        </div>
        <a href="/">Go to task list</a>
      </div>
    )
  }
}

export default TaskBoard;
