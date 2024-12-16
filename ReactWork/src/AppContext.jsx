import React, { createContext } from 'react'
// import Child1 from './contextcompo/Child1';
// import Child3 from './contextcompo/Child3';
// import Child2 from './contextcompo/Child2';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Child3 from './components/Child3';
const mycontext=createContext();
function AppContext() {
   
    const data={
        name:'Rahul',
        branch:'IT'
    }
  return (
    <div>AppContext
  <mycontext.Provider value={data}>
    <Child3 />
    <Child2 />
    </mycontext.Provider>

    
    </div>
  )
}
export {
    mycontext
}


export default AppContext