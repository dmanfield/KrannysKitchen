// const login = async (userObject) => {
//   try {
//   let response = await fetch('http://localhost:8000/token-auth/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userObject)
//   })
// let data = await response.json()
// return data
//   }
//   catch {
//     return {error: "Failed at fetching login"}
//   }
// }

// const getLoggedInUser = async (token) => {
//   try {
//   let response = await fetch('http://localhost:8000/core/current_user/', {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `JWT ${token}`
//     }
//   })
//   let data = await response.json()
//   return data
// }
// catch {
//   return {error: "Failed at fetching user"}
// }
// };

// const signupUser = async (userObject) => {
//   try {
//   let response = await fetch('http://localhost:8000/core/users/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userObject)
//   })
//   let data = await response.json()
//   console.log(data)
//   return data
// }
// catch {
//   return {error: "Failed at fetching signup"}
// }
// };


// export {login, getLoggedInUser, signupUser}




const login = (userObject) => {
  return fetch('https://krannys-kitchen-backend.herokuapp.com/token-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};

const getLoggedInUser = (token) => {
  return fetch('https://krannys-kitchen-backend.herokuapp.com/core/current_user/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res => res)
  
};

const signupUser = (userObject) => {
  return fetch('https://krannys-kitchen-backend.herokuapp.com/core/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};


export { login, getLoggedInUser, signupUser }
