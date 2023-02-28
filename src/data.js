const URL_API = "http://localhost:3001/api/v1/user/login"


async function getLogin(identifiants){

  const response = await fetch(URL_API, {
    method: 'POST',
    body: JSON.stringify(identifiants),
    headers: {"Content-Type": "application/json"}
   })
   
   const login = await response.json()
   
   return login

}

export { getLogin }
  
 



