import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos, selectedTab } = props

    // const tab = 'All'
    const filterTodoList = selectedTab === 'All' ?
        todos :
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)


    return (
        <>
            {filterTodoList.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        key={todoIndex}
                        {...props}
                        todoIndex={todos.findIndex(val => val.input == todo.input)}
                        todo={todo} />
                )
            })}
        </>
    )
}
