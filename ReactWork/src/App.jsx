import React from 'react'
import Student from './Student';
import logo from './images.png'
import StudentState from './StudentState';
const App = () => {
  let a = 12;
  const mystyle = {
    backgroundColor: 'red',
    color:"cyan"
  }
  const studentData={
    college :"ABES Engg",
    pic:<img src={logo}/>,
    roll:'180',
    branch: 'CSE',
    section:'A',
    name :"Tithaye"
  }
  return (
    <div style={mystyle}>
      ABES Engineering College
      <div style={mystyle}>{a}</div>
      <div style={{color:'blue',backgroundColor:'cyan',display:'flex'}}>
        <Student data={studentData}/>
        {/* <Student college="ABES Engineering College"
          pic={<img src={logo} />} name='Tithaye' roll='180' branch='CSE' section='A' />
        
        <Student
        pic={<img src={logo} />} name='Tithaye' roll='180' branch='CSE' section='A' />
        
        <Student college="ABES Engineering College"
          pic={<img src={logo}/>} name='Tithaye' roll='180' branch='CSE' section='A' />*/}
      </div>
    </div>
    
  )
}

export default App