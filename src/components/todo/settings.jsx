import React , {useContext} from 'react';
import {SettingsContext} from './settings-context';
import {Button } from 'react-bootstrap';
import {Form } from 'react-bootstrap';
const ContentSetting = (props) =>{
    const context   = useContext (SettingsContext)

    const itemPerPageHandler = e =>{
        context.setItemPerPage (parseInt (e.target.value))
    }
    const sortByHandler = e =>{
        context.setSortBy(e.target.value.toString())
    }
    return (
        <React.Fragment>
            <h2>Settings</h2>
            <form>
            
            <label name="itemPerPage"> Items per page </label>
            <input type="number" id="itemPerPage" name="itemPerPage" onChange={itemPerPageHandler}/><br/>
            <Button variant="info"  style={{'width': '100%' , 'text-align' : 'center'  , }} onClick={context.toggle} >{context.completed? 'show all Tasks': 'hide Completed Tasks'}</Button >
                <Form.Label name="Sort By"> Sort Tasks By : 
                <select name="Sort By" title="Sort By" onChange={sortByHandler}>
                 
                    <option value="assignee" >assignee</option>
                    <option value="text" >text</option>
                    <option value="difficulty" >difficulty</option>
                </select>
                </Form.Label>
            </form>
        </React.Fragment>
    )
}

export default ContentSetting;