function Profile(){

  

  return(
        <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br /> Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
        <div id="edit-section">
          <form name="edit">
            <div className="profil-input-wrapper">
              <input type="text" placeholder="firstName" required />
                </div>
            <div className="profil-input-wrapper">
                <input type="text" placeholder="lastName" required />
            </div>
          </form>
              <div className="btn-form">
                <button type="submit" className="save-button">Save</button>
                <button type="button" className="cancel-button">Cancel</button>
              </div>
            </div>
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