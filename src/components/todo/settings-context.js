import React , {useState} from 'react';



export const SettingsContext = React.createContext();

const SettingsProvider = (props) =>{
    const [completed , setCompleted] = useState (true);
    const [sortBy , setSortBy] = useState ('difficulty');
    const [itemPerPage , setItemPerPage] = useState (3);
    const [taskSum, setTaskSum] = useState(0);
    function toggle () {
        setCompleted (finished=> !finished)
    }
    const setting = {
        itemPerPage,
        setItemPerPage,
        completed,
        setCompleted,
        toggle,

        sortBy,
        setSortBy,
        taskSum,
        setTaskSum,
    }
    return (
        <SettingsContext.Provider value={setting}>

            {props.children}
        </SettingsContext.Provider>
    )

}

export default SettingsProvider;