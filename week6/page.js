
const sendTitle = async () =>{
    let response;
    try{
        response = await axios.get("https://api.jikan.moe/v3/anime/1")
        let show = await response
        getTitle(show)
        
    }catch(err){
        console.log(err);
    }
}
sendTitle()

function getTitle(show){
    console.log(show)
    let h3 = document.createElement("h3")
    h3.innerHTML = show.data.title
    div1.appendChild(h3)
    

}

const sendChar = async () => {
    let char;
    try{
    char = await axios.get("https://api.jikan.moe/v3/anime/1/characters_staff")
    let people = await char
    getChar(people)
    }catch(err){
        console.log(err)
    }
}
sendChar()

function getChar(people){
    console.log(people)
    let h3 = document.createElement("h3")
    h3.innerHTML = people.data.characters[0].name
    div2.appendChild(h3)

}

const sendSyn = async () => {
      let syn;
    try{
    syn = await axios.get("https://api.jikan.moe/v3/anime/1")
    let what = await syn
    getSyn(what)
    }catch(err){
        console.log(err)
    }
}
sendSyn();

function getSyn(what){
    console.log(what)
    let h3 = document.createElement("h3")
    h3.innerHTML = what.data.synopsis
    div3.appendChild(h3)
}
