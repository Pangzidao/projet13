import { useSelector } from "react-redux"
import { getProfile } from "../data"
import { useState } from "react"
import EditName from "../components/EditName"
import { useDispatch } from "react-redux";

function Profile(){

  const dispatch = useDispatch()

  const token = useSelector(state => state.token)
  const firstName = useSelector(state => state.firstName)
  const lastName = useSelector(state => state.lastName)
  const editingName = useSelector(state => state.editingName)
  console.log(editingName)

  getProfile(token).then(data => {
    dispatch({type: "setFirstName", firstName: data.body.firstName})
    dispatch({type: "setLastName", lastName: data.body.lastName})
    }
  )

  return(
        <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br /></h1>
        {editingName? <EditName /> 
           :<div>
              <p className="profile-name">{firstName} {lastName}</p>
              <button className="edit-button" onClick={() => dispatch({type:"editingName"})}>Edit Name</button>
           </div> 
          }
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    )
}

export default Profile