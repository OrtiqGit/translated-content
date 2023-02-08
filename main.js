
let MoviesList = document.querySelector('.MoviesList'),
btn = document.querySelector('.btn'),
input = document.querySelector('#first_name2')
progress = document.querySelector('.progress')




fetch(`https://www.omdbapi.com/?s=shrek&apikey=d231f019`)
.then(res=> res.json())
.then(data=> {
 
    progress.style.display = 'none'
    data.Search.map(item=>{
        let img = document.createElement('img')
        let h1 =document.createElement('h1')
        let h2 =document.createElement('h2')
        let card =  document.createElement('div')
        card.classList.add('card')
        img.src =item.Poster
        h1.innerHTML = item.Title
        h2.innerHTML= item.Year
        card.appendChild(img)
        card.appendChild(h1)
        card.appendChild(h2)
        MoviesList.appendChild(card)
    
})
})


btn.addEventListener('click', (e)=>{
    e.preventDefault
    for(let item of MoviesList.children){
        MoviesList.removeChild(item)
    }
    for(let item of MoviesList.children){
        MoviesList.removeChild(item)
    }
    for(let item of MoviesList.children){
        MoviesList.removeChild(item)
    }
    for(let item of MoviesList.children){
        MoviesList.removeChild(item)
    }
    fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=d231f019`)
.then(res=> res.json())
.then(data=> {
    progress.style.display = 'none'
    data.Search.map(item=>{
        let img = document.createElement('img')
        let h1 =document.createElement('h1')
        let h2 =document.createElement('h2')
        let card =  document.createElement('div')
        card.classList.add('card')
        img.src =item.Poster
        h1.innerHTML = item.Title
        h2.innerHTML= item.Year
        card.appendChild(img)
        card.appendChild(h1)
        card.appendChild(h2)
        MoviesList.appendChild(card)
    
})
})
.catch(()=>{
    progress.style.display = 'none'
    let h1 = document.createElement('h1')
    h1.innerHTML = 'Not Found !'
    h1.style.color = 'red'
    h1.style.fontSize = '50px'
    MoviesList.appendChild(h1)
})




})



