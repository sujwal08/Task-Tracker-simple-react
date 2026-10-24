function TaskItem( {item, deleteTask, toggleTask}) {
    return (
        <li>
            <input type="checkbox" checked={item.completed} onChange={() => toggleTask(item.id)}/>
            <span
                style={{
                    textDecoration :item.completed
                    ?"line-through"
                    :"none"
                }}
            >
                {item.text}
            </span>
            <button onClick={() => deleteTask(item.id)}>
        Delete
      </button>
    </li>
    );
}
export default TaskItem;