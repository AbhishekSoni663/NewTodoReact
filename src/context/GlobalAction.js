export const saveTodo = (text) => {
  const newTodo = {
    id: crypto.randomUUID(),
    text: text,
  };

  return newTodo
}

export const deleteTodo = (id) => {
  return id
}

export const editTodo = (todo) => {
  return todo
}

export const updateTodo = (id, text) => {
  const updateTodo = {
    id: id,
    text: text
  }
  return updateTodo
}

