import word from './randomword'

export const fetchNews = async (newword) => {
  try{
    var realword=word
    if(newword!=''){
      realword=newword
    }
 
    const response = await fetch(`https://bulk-hackers-quotes.p.rapidapi.com/wp-json/bulk-hackers/get-quotes?search=${realword}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "bulk-hackers-quotes.p.rapidapi.com",
        "x-rapidapi-key": "60c6fb0d0cmshc5d06ba74debd7dp1e5517jsn7ed5ac9df4d7"
      }
    })
    
  
    const results= await response.json().then()
    return results
  }catch(err){
   throw err
  }
  }
  