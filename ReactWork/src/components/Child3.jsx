import React from 'react'
import {mycontext} from '../AppContext'
import Child2 from './Child2';
function Child3({child3data}){
    const recievecontext = useContext(mycontext);
    return (
        <div>Child3
            <div>
            Name:{recievecontext.name}
            <br></br>
            Branch:{child3.data.branch}
            <br></br>
            Section:{child3.data.section}
            </div>
        </div>
    )
}
export default Child3
