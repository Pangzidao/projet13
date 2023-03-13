import { useState, useEffect } from "react";
import { setProfile } from '../data';
import { useSelector } from "react-redux"


function EditName(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const token = useSelector(state => state.token)

    function handleSubmit(e){
        e.preventDefault()
        setProfile(token, {"firstName":firstName,"lastName":lastName}).then(data => console.log(data))
    }

    return (

        <div id="edit-section" onSubmit={handleSubmit}>
          <form name="edit">
            <div className="profil-input-wrapper">
              <input 
                type="text" 
                placeholder="firstName" required  
                onChange={(e) => setFirstName(e.target.value)}
            />
                </div>
            <div className="profil-input-wrapper">
                <input type="text" 
                placeholder="lastName" required 
                onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="btn-form">
                <button type="submit" className="save-button">Save</button>
                <button type="button" className="cancel-button">Cancel</button>
              </div>
          </form>
              
        </div>

    )
}

export default EditName;

