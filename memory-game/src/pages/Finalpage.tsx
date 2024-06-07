import React from 'react'
import plainbg from "../images/plainbg.png"
import bananaicon from "../images/bananaicon.png"
import monkey from "../images/monkey.png"
import finalbutton from "../images/finalbutton.png"
import { useLocation } from 'react-router-dom'
const Finalpage:React.FC = () => {

  const location=useLocation()
  const {score}=location.state||{score:0}
  return (

<div style={{height:"100vh",width:"100wh"}}>
<img style={{position:"absolute",marginLeft:"270px"}} src={bananaicon} alt="bananaicon" />
<img style={{position:"absolute",marginLeft:"-700px"}} src={bananaicon} alt="bananaicon" />
<img style={{position:"absolute",marginTop:"300px",marginLeft:"-700px"}} src={bananaicon} alt="bananaicon" />
<img style={{position:"absolute",marginLeft:"-700px"}} src={bananaicon} alt="bananaicon" />
<img style={{position:"absolute",marginTop:"300px",marginLeft:"270px"}} src={bananaicon} alt="bananaicon" />

    <div style={{
      backgroundImage:`url(${plainbg})`,
      backgroundSize:'cover',
      backgroundPosition:"center",
      height:'100vh',
      width:'1512px',
      padding:"0",
      margin:"0",
      display:"flex",
      justifyContent:"center",
      alignItems:'center',
      flexDirection:"column"
    }}>
    
    <div style={{height:"120px",width:"300px",borderRadius:"10px",backgroundColor:"#E26B1E",color:"#FFFFFF",transform:"rotate(-0.64deg)"}}>
  <h2 style={{fontWeight:"700"}}>Earned </h2>
  <h1 style={{fontWeight:"800"}}> {score} Banana's</h1>
    </div>

    <div style={{height:'300px',width:'400px',borderRadius:'40px',backgroundColor:"#FFF5D1"}}>


<img style={{maxHeight:"350px",maxWidth:"200px"}} src={monkey} alt="monkey" />
<button style={{border:"none",backgroundColor:"transparent"}}><img  style={{height:"80px",width:"300px"}} src={finalbutton} alt="finalbutton" /></button>

    </div>
    
    
    
    
    
    </div>
    </div>
  )
}

export default Finalpage