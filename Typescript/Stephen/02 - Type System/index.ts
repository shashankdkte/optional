interface Todo
{
  id: number,
  title: string,
  completed:boolean
}


axios.get(url).then(response => {
  const todo = response.data as Todo
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id,title,completed)
})