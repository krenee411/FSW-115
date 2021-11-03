
// GET request with axios
var thing =[]
//url: http://api.bryanuniversity.edu/kelciMorgan/list

//get all
axios.get("http://api.bryanuniversity.edu/kelciMorgan1/list")
.then(response => { console.log(response.data)
    for(let i = 0; i < response.data.length; i++){
 
        const ul = document.createElement('h3')
        ul.setAttribute('id', 'item')
        ul.textContent = response.data[i].name
        var btn = document.createElement("button")


        const check= document.createElement('input')
        check.setAttribute('type', 'checkbox')
        check.setAttribute('id', 'checkbox')
        if(response.data[i].isComplete){
            ul.setAttribute('id', 'checkbox')
            check.checked= true
        }
            check.addEventListener('change',function (event){
                console.log(event.target)
                console.log(event.target.parentNode)
                var checkbox = event.target
                var todo = event.target.parentNode
                //if statement will be in the .then()
                if(checkbox.checked == true){
                    todo.id= 'checkbox'
                    axios.put(`http://api.bryanuniversity.edu/kelciMorgan1/list/${thing[i]}`,{ 
                        isComplete: true
                    } )
                    .catch(error => console.log(error))
                }else if(checkbox.checked == false){
                    todo.removeAttribute('id')
                    axios.put(`http://api.bryanuniversity.edu/kelciMorgan1/list/${thing[i]}`,{ 
                        isComplete: false
                    } )
                    .catch(error => console.log(error))
                }
                //axios.put inside this function
                //isComplete:checkbox.checked
            } )

        ul.appendChild(check)
        document.body.appendChild(ul)
        thing.push(response.data[i]._id)
        console.log(thing)
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
        isComplete: false
    }

    axios.post("http://api.bryanuniversity.edu/kelciMorgan1/list", newTodo)
    .then(response => {console.log(response.data)
        thing.push(response.data._id)
    })
    .catch(error => console.log(error))
});


//id of item to update

axios.delete("http://api.bryanuniversity.edu/kelciMorgan1/list")
.then(response => {console.log(response.data)
    thing.remove(response.data._id)
})
.catch(error => console.log(error))


