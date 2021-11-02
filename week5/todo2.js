// GET request with axios

//url: http://api.bryanuniversity.edu/kelciMorgan/list
function changed(event){
    console.log(event.target)
    console.log(event.target.parentNode)
    var checkbox = event.target
    var todo = event.target.parentNode
    //if statement will be in the .then()
    if(checkbox.checked == true){
        todo.id= 'checkbox'
    }else if(checkbox.checked == false){
        todo.removeAttribute('id')
    }
    //axios.put inside this function
    //isComplete:checkbox.checked
}
//get all
axios.get("http://api.bryanuniversity.edu/kelciMorgan1/list")
.then(response => { console.log(response.data)
    for(let i = 0; i < response.data.length; i++){
 
        const ul = document.createElement('h3')
        ul.setAttribute('id', 'item')
        ul.textContent = response.data[i].name

        const check= document.createElement('input')
        check.setAttribute('type', 'checkbox')
        check.setAttribute('id', 'checkbox')
        if(response.data[i].isComplete){
            ul.setAttribute('id', 'checkbox')
            check.checked= true
        }
            check.addEventListener('change', changed)

        ul.appendChild(check)
        document.body.appendChild(ul)

    }
})
.catch(error => console.log(error))


const form = document.myForm

form.addEventListener('submit', function(event){
    event.preventDefault()

    const newTodo = {
        name: form.name.value,
        description: form.description.value,
        price: form.price.value,
    }

    axios.post("http://api.bryanuniversity.edu/kelciMorgan1/list",newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
});


//id of item to update

response.data[i].isComplete

axios.put("http://api.bryanuniversity.edu/kelciMorgan1/list/", update)
.then(response =>{ console.log(response.data)
    if(checkbox.checked == true){
        response.data[i].isComplete = true
    }else if(checkbox.checked == false){
        response.data[i].isComplete = false
    }
})
    .catch(error => console.log(error))