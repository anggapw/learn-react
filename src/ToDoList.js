import React from 'react';

const ToDoList = () => {

    let toDo = ['Belajar Intro React JS', 'Belajar Component React JS', 'Belajar Route React JS']
    let list = toDo.map((items) =>  {
        return (
            <li>{items}</li>
        )
    })

    return (
        <>
        <ul>{list}</ul>
        </>
    )
}

export default ToDoList;