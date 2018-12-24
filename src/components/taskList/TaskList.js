import './taskList.scss';

class TaskList extends React.PureComponent {
  state = {
    todo: [],
    originTodos: [],
  }

  componentDidMount() {
    const { todo, originTodos } = this.state;
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url)
      .then(resp => resp.json())
      .then(res => res.filter(el => el.userId === 1))
      .then((originTodos) => {
        this.setState({ originTodos });
        this.setState({ todo: originTodos });
      });
  }

  changeHandler = (event) => {
    const { todo, originTodos } = this.state;
    this.setState({ todo: originTodos.filter(el => el.title.includes(event.target.value)) });
    console.log(todo);
  }

  taskControlHandler = (event) => {
    console.log(event.target.className);
  }

  render() {
    const {
      todo,
    } = this.state;

    return (
      <div className="taskList">
        <input type="text" onChange={this.changeHandler} />
        <ul>
          {
            todo.map((el) => {
              if (!el.completed) {
                return (
                  <li
                    key={el.id}
                    className="uncompleted"
                    onMouseEnter={this.showControls}
                  >
                    {el.title}
                    {
                      !el.completed
                      && <>
                        <span className="delete" onClick={this.taskControlHandler} />
                        <span className="done" onClick={this.taskControlHandler} />
                        <span className="inprogress" onClick={this.taskControlHandler} />
                      </>
                    }
                  </li>
                );
              }
              return (
                <li
                  key={el.id}
                  className="completed"
                  onMouseEnter={this.showControls}
                >
                  {el.title}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default TaskList;
