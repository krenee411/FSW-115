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
axios.get("http://api.bryanuniversity.edu/kelciMorgan/list")
.then(response => { console.log(response.data)
    for(let i = 0; i < response.data.length; i++){
        
        const ul = document.createElement('ul')
        ul.setAttribute('id', 'item')
        ul.textContent = response.data[i].name

        const check= document.createElement('input')
        check.setAttribute('type', 'checkbox')
        check.setAttribute('id', 'checkbox')
        if(response.data[i]){
            ul.setAttribute('id', 'checkboxs')
            check.addEventListener('change', changed)

            ul.appendChild(check)

        document.body.appendChild(ul)
        }

    }
})
.catch(error => console.log(error))


}
