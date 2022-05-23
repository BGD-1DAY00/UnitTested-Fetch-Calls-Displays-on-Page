const btn = document.getElementById('btn')
const div = document.getElementById('div')


async function handleClick(e){
    e.preventDefault()
    try{
    const res = await getData()
    const dis = display(res)
    return dis
    }catch(e){
        throw new Error('Data failed to Display')
    }
}
async function getData(){
    try{
        const response = await fetch('https://api.publicapis.org/entries')
        const dataJson = await response.json()
        return dataJson
    }catch(e){
        throw new Error('API Failed to Return Data')
    }
}
 function display(obj){
    let {entries} = obj
    let temp = ''
    for(let i = 0; i <entries.length; i++){
        temp+= `<div id='info'>  <h1>${entries[i].API}</h1> <h4>${entries[i].Description}</h4> <a href=${entries[i].Link}>Link to Website</a>  </div>`
    }
    return div.innerHTML+=temp
}


btn.addEventListener('click', handleClick)