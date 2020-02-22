import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
    
        return (
            <div>
                <TodoItem text="테스트1"/>
                <TodoItem text="테스트2"/>
                <TodoItem text="테스트3"/>
            </div>
        );
    }
}
export default TodoItemList;