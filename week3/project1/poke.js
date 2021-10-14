
const xhr = new XMLHttpRequest

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText)
        getpoke(data.results)
    } else if(xhr.readyState === 4 && xhr.status !== 200){
        console.log (xhr.responseText)
    }
}
function getpoke(data){
    console.log(data)
    for(let i=0 ; i< data.length; i++){
        const mons = document.createElement('h1')
        mons.setAttribute("id", "style")
        mons.innerHTML = data[i].name
        document.body.appendChild(mons)
    
}}


