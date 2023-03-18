import { useState, useEffect } from "react";
import { setProfile } from '../data';
import { useDispatch, useSelector } from "react-redux"
import { store } from '../store';

function EditName(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const token = useSelector(state => state.token)
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        setProfile(token, {"firstName":firstName,"lastName":lastName}).then((data) => console.log(data))
        dispatch({type: "setFirstName"})
        dispatch({type:"editingName"})
        console.log(store.getState())
    }

    return (

        <div id="edit-section" onSubmit={handleSubmit}>
          <form name="edit">
            <div className="profil-input-wrapper">
              <input 
                type="text" 
                placeholder="firstName" required  
                onChange={(e) => setFirstName(e.target.value)}
                className="profil-input"
                />
                <input type="text" 
                placeholder="lastName" required 
                onChange={(e) => setLastName(e.target.value)}
                className="profil-input"
                />
                </div>
            <div className="btn-form">
                <button type="submit" className="edit-name-button">Save</button>
                <button type="button" className="edit-name-button" onClick={ () => dispatch({type:"editingName"})}>Cancel</button>
              </div>
          </form>
              
        </div>

    )
}

export default EditName;

