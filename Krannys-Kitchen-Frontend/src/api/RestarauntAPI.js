let api_key = 'njVUmV_oJZvxZwisFQPjJp6HVa71rq_6G-kgf61WOBZaowhmUtZOeVVVRonlAuOAE7J49ic4H4Yxj5WLuUM0Do6uzWrV51zCKpubmGaOhgB4ds6gEdNHZwDT6499YHYx'

const getRestaraunt = async (searchData) => {
  try {
    if(searchData.dish){
    let response = await fetch(`https://cors-kranny-proxy.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchData.dish}&location=${searchData.zipcode}&radius=10000`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`,
      },
      method: 'GET',
    })
    console.log(response)
    let data = await response.json() 
    return data
  }
    else {
  let response = await fetch(`https://cors-kranny-proxy.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${searchData.zipcode}&radius=10000`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_key}`,
    },
    method: 'GET',
  })
  console.log(response)

  let data = await response.json()
  
  return data
  
}
}
  catch {
    return {error: "Error searching for restaraunt"}
  }
}

export { getRestaraunt }