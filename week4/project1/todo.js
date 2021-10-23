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
axios.get("http://api.bryanuniversity.edu/kelciMorgan/list")
.then(response => { console.log(response.data)
    for(let i = 0; i < response.data.length; i++){
 
        const ul = document.createElement('ul')
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





//CORS error-- CORS-anywhere cross orgian resorse sharing 
//https:cors-anywhere.herokuapp.com/

//get one
/*
axios.get("http://api.bryanuniversity.edu/kelciMorgan/list/4461600c-f411-4e37-8fc3-be6bd5069064")
.then(response => console.log(response.data))
.catch(error => console.log(error))*/