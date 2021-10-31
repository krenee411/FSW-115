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
axios.get("http://api.bryanuniversity.edu/kelciMorgan/list/")
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
//adding new todo to axios
function add(){
    axios.post("http://api.bryanuniversity.edu/kelciMorgan/list")
    
    //new items
    var li = document.createElement("li")
    var input = document.getElementById("input").value
    //the name need to be todo
    // the input value needs to be the description
    var listItem = document.getElementById("listItem")
    var item = document.createTextNode(input)
    li.appendChild(item);
    if (input === '') {
        alert("Plese add a task");
      } else {
        listItem.appendChild(item);
      }
      document.getElementById("input").value = "";
    }
    /* things needed to post a put
        "name": "",
        "description": "",
        "isComplete": true or false(this is triggered onchange and needs to up the server)
        does the isComplete need to be attached to a put request??
    */