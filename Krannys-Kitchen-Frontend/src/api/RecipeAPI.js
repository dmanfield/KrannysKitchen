
const fetchRandomRecipe = async () => {
  try {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    let data = await response.json()
    return data
  }
  catch {
    return { error: " Failed to fetch!"}
  }
}


const addRecipe = async (recipeObj) => {
  console.log(recipeObj)
  try {
    let response = await fetch('https://krannys-kitchen-backend.herokuapp.com/core/recipes/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem("auth-user")}`
      },
      method: 'POST',
      body: JSON.stringify(recipeObj)
    })
    let data = await response.json()
    return data
    
  }
  catch {
    return {error: "Error Posting"}
  }
}



const getRecipes = async () => {
  try {
    let response = await fetch('https://krannys-kitchen-backend.herokuapp.com/core/recipes/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem("auth-user")}`
      },
      method: 'GET',
    })
    let data = await response.json()
    let lengths = await data.map(item => item.like.length)
    let max =  await Math.max(...lengths)
    let filtered = await data.filter(item => item.like.length !== max)
    let uniqueFiltered = await Array.from(new Set(filtered.map(item => item.title))).map(title => {return filtered.find(item => item.title === title)})
    return uniqueFiltered.sort(() => Math.random() - 0.5)
  }
  catch {
    return {error: "Error getting recipes"}
  }
}

const getRecipesByUser = async (user_id) => {
  try {
    let response = await fetch('https://krannys-kitchen-backend.herokuapp.com/core/recipes/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem("auth-user")}`
      },
      method: 'GET',
    })
    let data = await response.json()
    let filtered = await data.filter(item => item.user === user_id)
    return filtered
  }
  catch {
    return {error: "Error getting recipes"}
  }
}
const getMostLikedRecipe = async () => {
  try {
    let response = await fetch('https://krannys-kitchen-backend.herokuapp.com/core/recipes/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem("auth-user")}`
      },
      method: 'GET',
    })
    let data = await response.json()
    let lengths = await data.map(item => item.like.length)
    let max =  await Math.max(...lengths)
    let filtered = await data.filter(item => item.like.length === max)
    return filtered
  }
  catch {
    return {error: "Error getting recipes"}
  }
}

const getRecipeByPostId = async (post_id) => {
  try {
    let response = await fetch(`https://krannys-kitchen-backend.herokuapp.com/core/recipes/${post_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem("auth-user")}`
      },
      method: 'GET',
    })
    let data = await response.json()
    return data
  }
  catch {
    return {error: "Error getting recipes"}
  }
}
const editRecipe = async (postId, recipeObj) => {
  console.log(recipeObj)
  try {
    let response = await fetch(`https://krannys-kitchen-backend.herokuapp.com/core/recipes/${postId}/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem("auth-user")}`
      },
      method: 'PUT',
      body: JSON.stringify(recipeObj)
    })
    let data = await response.json()
    return data
    
  }
  catch {
    return {error: "Error Editing"}
  }
}

const deleteRecipe = async (postId) => {
  try{
    let response = await fetch(`https://krannys-kitchen-backend.herokuapp.com/core/recipes/${postId}/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem("auth-user")}`
      },
      method: 'DELETE'
    })
    let data = await response.json()
    return data
    
  }
  catch {
    return {error: "Error Deleting"}
  }
  }


  const getLikedRecipes = async (user_id) => {
    try {
      let response = await fetch('https://krannys-kitchen-backend.herokuapp.com/core/recipes/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem("auth-user")}`
        },
        method: 'GET',
      })
      let data = await response.json()
      let filtered = await data.filter(item => item.like.includes(user_id))
      return filtered
    }
    catch {
      return {error: "Error getting recipes"}
    }
  }




export  { fetchRandomRecipe, addRecipe, getRecipes, getRecipesByUser, getRecipeByPostId, editRecipe, deleteRecipe, getLikedRecipes, getMostLikedRecipe } 




