function List() {
    const toDoItems = ['Learn React', 'Learn Vite', 'Learn Javascript Code'];

    const listItems = toDoItems.map(toDo => 
        <li key ={toDo}>
            {toDo}
        </li>
        );

    return (
    <ul>
        {listItems}
    </ul>);
}

export default List