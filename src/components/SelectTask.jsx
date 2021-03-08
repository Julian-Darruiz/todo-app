import React, { useContext } from 'react'
import Context from '../context/ContextProvider'


const SelectTask = () => {


    // const [list, setList] = useState('')
    const {tasks} = useContext(Context)
    console.log(tasks)


    return (
        <>
        </>
        // <div>
        //     {tasks.map(task => {
        //     return <li key={task}><input type="checkbox" />task</li>
        // })}
        // </div>
    )
}

export default SelectTask
