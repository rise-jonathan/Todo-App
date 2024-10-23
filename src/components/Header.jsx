import React from 'react'

export default function Header(props) {
    const { todos } = props
    const todosLength = todos.length

    const isTacksPlural = todos.length != 1;
    const taskOrTasks = isTacksPlural ? 'tasks' : 'task';

    return (
        <header>
            <h1 className='text-gradient'>You have {todosLength} open {taskOrTasks}</h1>
        </header>
    )
}
