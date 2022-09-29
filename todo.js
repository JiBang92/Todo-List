function Todo({todo, index, remove}) {
  function handle() {
    remove(index)
  }

  return (
    <div className="todo">
      {todo.text}
      <button className="remove-btn" onClick={handle}>&#10004;</button>
      </div>
  )
}