import React, {useState} from 'react'

const Accordion = ({ title, body }) => {
  const [show, setShow] = useState(false)
  const toggleAccordition = () => setShow(!show)

  return(
    <div style={{border: '2px solid grey', marginBottom: '10px', width:"100%"}}>
      <div onClick={toggleAccordition} style={{padding:"10px", backgroundColor:show ? "#ddd" :"#f1f1f1", cursor:"ponter", borderBottom:"1px solid green"  }}>
        <h3 style={{color: show ?"Red":"orange"}}>{title}</h3>
      </div>
      {show && <div style={{padding:"10px"}}>{body}</div>}
    </div>
  )
}

function App() {
  return (
    <div style={{display:"flex", margin:"10px", justifyContent:"space-between"}}>
     <Accordion title="First" body="Thist is first accordion"/>
     <Accordion title="Second" body="Thist is second accordion"/>
     <Accordion title="Third" body="Thist is third accordion"/>
     <Accordion title="Fourth" body="Thist is fourth accordion"/>
     <Accordion title="Fifth" body="Thist is fifth accordion"/>
    </div>
  );
}

export default App;
