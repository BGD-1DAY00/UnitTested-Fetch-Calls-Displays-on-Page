const btn = document.getElementById('btn')
const div = document.getElementById('div')

function handleClick(e){
    e.preventDefault()
    return new Promise((resolve, reject)=>{
        resolve(getData())
    }).then((prom)=>{
        return prom.json()
    }).then((promTwo)=>{
        display(promTwo)
    }).catch((error)=>{
        throw new Error('Promise failed to be Fufilled')
    })
}
function getData(){
    const response = fetch('https://api.publicapis.org/entries')
    return response
}

function display(obj){
    let {entries} = obj
    let temp = ''
    const updatedTemp = loop(entries, temp)
    return div.innerHTML=updatedTemp
}
function loop(vari, temp){
    for(let i = 0; i <vari.length; i++){
        temp+= `<div id='info'>  <h1>${vari[i].API}</h1> <h4>${vari[i].Description}</h4> <a href=${vari[i].Link}>Link to Website</a>  </div>`
    }
    return temp
}
const reverseHandle = ()=>{
    div.innerHTML === ''
}

btn.addEventListener('click', handleClick)


module.exports = {handleClick}