import './taskList.scss';

class TaskList extends React.PureComponent {
  state = {
    value: '',
    todo: [],
    originTodos: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.content !== prevState.originTodos) {
      return { originTodos: nextProps.content, todo: nextProps.content, value: '' };
    }
  }

  changeHandler = (event) => {
    const { originTodos } = this.state;
    this.setState({
      todo: originTodos.filter((el) => {
        if (event.target.value.length > 1) {
          return el.title.toLowerCase().includes(event.target.value.toLowerCase());
        }
        return { todo: originTodos };
      }),
      value: event.target.value
    });
  }

  taskControlHandler = (event) => {
    console.log(event.target.className);
  }

  render() {
    const {
      todo,
      value
    } = this.state;

    const { markDone, delTask } = this.props;

    const output = (el) => {
      return (
        <li
          key={el.id}
          className={!el.done ? 'uncompleted' : 'completed'}
          onMouseEnter={this.showControls}
        >
          <span>
            <a href="#">{el.title}</a>
            {
              !el.done
              && <>
                <span className="elemControl delete" onClick={() => delTask(el.id)} />
                <span className="elemControl done" onClick={() => { el.done = true; return markDone(el); }} />
                <span className="elemControl inprogress" onClick={this.taskControlHandler} />
              </>
            }
          </span>
        </li>
      );
    };

    return (
      <div className="taskList">
        <div className="toolbar">
          <input type="text" onChange={this.changeHandler} value={value} size="40" />
          <button type="button">New Task</button>
        </div>
        <ul>
          {
            todo.sort((el) => {
              if (el.done) return 1;
              if (!el.done) return -1;
            }).map(output)
          }
        </ul>
      </div>
    );
  }
}

export default TaskList;
