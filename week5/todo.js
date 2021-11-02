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
function getData(){
axios.get("http://api.bryanuniversity.edu/kelciMorgan/list/")
.then(response => newData (response.data))
.catch(error => console.log(error))
}


//adding new todo to axios
function newData(data){
    for(let i = 0; i < data.length; i++){
 
        const h3 = document.createElement('h3')
        h3.setAttribute('id', 'item')
        h3.textContent = data[i].name + data[i].description + data[i].price

        const check= document.createElement('input')
        check.setAttribute('type', 'checkbox')
        check.setAttribute('id', 'checkbox')
        if(data[i].isComplete){
            h3.setAttribute('id', 'checkbox')
            check.checked= true
        }
            check.addEventListener('change', changed)

        h3.appendChild(check)
        document.body.appendChild(h3)

    }
}
getData();

const form = document.myForm
console.log(form)

form.addEventListener("submit", function() {
    const newTodo = {
        name: form.name.value,
        description: form.description.value,
        price: form.price.value,
    }
    axios.post("http://api.bryanuniversity.edu/kelciMorgan/list", newTodo)
    .then(response => newData (response.data)) 
    .catch(error => console.log(error))
})



    
/*
    if (input === '') {
        alert("Plese add a task");
      } else {
        listItem.appendChild(item);
      }
      document.getElementById("input").value = "";
    }
}*/