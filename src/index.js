let fetchUrl= 'https://dog.ceo/api/breeds/image/random/4'
fetch(fetchUrl)
.then(res=> res.json())
.then(data=> {
   console.log(data)
  data.message.forEach(d => {
    console.log(d)
   let div = document.querySelector('#dog-image-container')
   let image = document.createElement('img')
   div.append(image)
   image.src= d


   image.addEventListener('click', function(){

    // Adding a Video
  //  let video = document.createElement('video')
  //  div.append(video)
  //  video.src="mov_bbb.mp4"
  // Adding an image

    image.src='data:image/jpeg;base64,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'

  
     })
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
        // console.log(data.message)
        breeds.forEach(m=> {
        // console.log(m)
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
