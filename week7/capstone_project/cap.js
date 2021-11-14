
// GET request with axios
var thing =[]
var price = 0
let div = document.getElementById("div")

//url: http://api.bryanuniversity.edu/kelciMorgan/list

//get all
axios.get("http://api.bryanuniversity.edu/kelciMorgan1/list")
.then(response => { console.log(response.data)
    for(let i = 0; i < response.data.length; i++){
 
        const ul = document.createElement('h3')
        ul.setAttribute('id', 'item')
        ul.textContent = response.data[i].name + " - " + response.data[i].description
        const btn = document.createElement("BUTTON")
        btn.setAttribute('id', 'delete')
        let x = ("&#10006")
        btn.innerHTML = x
        btn.addEventListener("click", (e) =>{
            axios.delete(`http://api.bryanuniversity.edu/kelciMorgan1/list/${thing[i]}`)
            .then(response => {console.log(response.data)   
                e.target.parentNode.remove(ul)
            })
    
        })
        ul.appendChild(btn) 

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
                   })
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
        div.appendChild(ul)
        thing.push(response.data[i]._id)


        const form = document.myForm

        form.addEventListener('submit', function(event){
            event.preventDefault()
        
            const newTodo = {
                name: form.name.value,
                description: form.description.value,
                price: price,
                isComplete: false
            }
         
            axios.post("http://api.bryanuniversity.edu/kelciMorgan1/list", newTodo)
            .then(function(response){
                console.log(response)

            })
        });
    }

})


axios.get("https://type.fit/api/quotes")
.then(function(response){
        let code = response.data[3].text
       code.textContent = code.text
       p.append(code)
       
    })
