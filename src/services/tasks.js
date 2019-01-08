import { rest } from './rest';

const getTasks = () => rest.get('tasks');
const updTask = (id, data) => rest.put(`tasks/${id}`, data);
const deleteTask = id => rest.delete(`tasks/${id}`);
const postTask = data => rest.post('tasks', data);

export { getTasks, updTask, deleteTask, postTask };
