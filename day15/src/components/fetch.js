const data=fetch("https://dummyjson.com/users")
data.then((response)=>response.json())
.then((actualdata)=>{console.log(actualdata);
})


