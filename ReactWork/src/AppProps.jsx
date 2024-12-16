import React from 'react'
import Child1 from './components/Child1'
function AppProps(){
    const data={
        name:"Rahul",
        branch:"CSE",
        section:"A"
    }
    return(
        <div>AppProps
            <div>
                <Child1 child1data={data}/>
            </div>
        </div>
    )
}
export default AppProps