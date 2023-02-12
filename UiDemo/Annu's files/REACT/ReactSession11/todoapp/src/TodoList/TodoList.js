import React from 'react'
import { connect } from 'react-redux';
import { getItems } from "../Redux/action";
import TodoItem from '../TodoItem/TodoItem'

function TodoList(props) {
    React.useEffect(() => {
        props.getItems();
    }, [])

    return (
        <div className="mt-3">
            {
                props.todoList !== undefined ? props.todoList.map(todoItem => 
                <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.item} />) : <div></div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    todoList: state?.todoList
});

export default connect(mapStateToProps, { getItems })(TodoList);