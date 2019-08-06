let fetchUrl= 'https://dog.ceo/api/breeds/image/random/4'
fetch(fetchUrl)
.then(res=> res.json())
.then(data=> {
//   console.log(data)
  data.message.forEach(d => {
   let div = document.querySelector('#dog-image-container')
   let image = document.createElement('img')
   div.append(image)
   image.src= d
  })
 })

 const breedUrl = 'https://dog.ceo/api/breeds/list/all'
 fetch(breedUrl)
  .then(res=> res.json())
  .then(data=> {
    // console.log(data)
    // To get all the breeds inside the Object(data) we Call this method(Object.keys) we get the keys for the Object and then we call
    //  data.message to get the actual Object that we want to iterete.
    const breeds= Object.keys(data.message)
    console.log(data.message)
    breeds.forEach(m=> {
    console.log(m)
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    ul.append(li)

    li.append(m)
    //Or 
  //  li.innerText = m
  // filter()
  li.addEventListener('click', function(e){
    e.target.style.color= "green"
    // console.log('was clicked')
  })
  // function filter(m, index, letter){
  //   let filterBreeds= m.filter(M=> {
  //     return M.charAt(index)===letter
  //   })
  //  return filterBreeds
  // }
    
     
       
  
  

  
  })
})

 // Call Back Function is a function that runs after another function finishes running
 
 //Example
// setInterval(function(){console.log('Hello word!')}, 3000)

//The function inside is called callback function.
// setTimeout(function(){console.log('Here')}, 2000)





// console.log('%c HI', 'color: red')
