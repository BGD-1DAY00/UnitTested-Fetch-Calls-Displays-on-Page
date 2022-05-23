const {handleClick} = require('./index.js')
function testHandleClick(){
  const expected = ()=>{
      return new Promise((resolve,reject)=>{
          resolve(apply())
      }).then(()=>{
          resolve(apply())
      }).then((task)=>{
          func()
          
      }).catch((error)=>{
          throw new Error('Promise failed to be Fufilled')
      })
  }
  const apply = ()=>{
      return new Promise((resolve, reject)=>{
          resolve('hello')
      })
  }  
  const func =()=>{

  }
  const result = handleClick()
  console.log(result === expected)

}