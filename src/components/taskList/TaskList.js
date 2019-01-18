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
    return null;
  }

  changeHandler = (event) => {
    const { originTodos } = this.state;
    const filteredTodos = originTodos.filter((el) => {
      if (event.target.value.length > 1) {
        return el.title.toLowerCase().includes(event.target.value.toLowerCase());
      }
      return { todo: originTodos };
    });

    this.setState({
      todo: filteredTodos,
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
                <span className="elemControl delete" onClick={() => delTask(el)} />
                <span className="elemControl done" onClick={() => markDone(el)} />
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
            todo &&
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
