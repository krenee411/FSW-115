let btn = document.getElementById('submit').addEventListener('click', push)
function changed(event){
    console.log(event.target)
    console.log(event.target.parentNode)
    var checkboxs = event.target
    var todo = event.target.parentNode
    if(checkboxs.checked == true){
        todo.id= 'checkbox'
    }else if(checkboxs.checked == false){
        todo.removeAttribute('id')
    }
  
}

function push(){
axios.get("https://api.jikan.moe/v3/anime/1/characters_staff")
.then(function (response) { console.log(response.data.characters)
    for(let i = 0; i < response.data.characters.length; i++){
 
        const ul = document.createElement('ul')
        ul.setAttribute('id', 'item')
        ul.textContent = response.data.characters[i].name

        const check= document.createElement('input')
        check.setAttribute('type', 'checkbox')
        check.setAttribute('id', 'checkbox')
        if(response.data.characters[i].name){
            ul.setAttribute('id', 'checkboxs')
            check.addEventListener('change', changed)

            ul.appendChild(check)

        document.body.appendChild(ul)
        }

    }
})
.catch(error => console.log(error))


}
