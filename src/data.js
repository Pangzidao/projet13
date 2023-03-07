async function getLogin(identifiants){
    let response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(identifiants)
    })
    let login = await response.json()

    return login
}

async function getProfile(token){
   
    let loginFetchResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token
        }
        
    })
    let login = await loginFetchResponse.json()
    return login
}

async function editProfile(token, data){
    let loginFetchResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token
        },
        body: JSON.stringify(data)
    })
    let login = await loginFetchResponse.json()
    return login
}

export { getLogin, getProfile, editProfile }
 



