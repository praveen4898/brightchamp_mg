import React from 'react'
import plainbg from '../images/plainbg.png'
import blueheart from "../images/blueheart.png"
import playbutton from "../images/playbutton.png"
import apple from "../images/apple.png"
import { useNavigate } from 'react-router-dom'



const Instruction:React.FC = () => {
const navigate=useNavigate()

const handlePlay=()=>{
navigate('/Activity')
}

  return (
    <div style={{
        backgroundImage:`url(${plainbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '1512px', 
        height: '100vh',
        display:'flex',
        justifyContent:"space-evenly"
    }}>

<div style={{borderRadius:"60px",marginTop:"180px",height:"338px",width:"351px",backgroundColor:"white",display:'flex',flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>



<div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", top: "0",left: "0"}}>
<div style={{ height:"150px",width:"135px",margin:"5px", background: 'linear-gradient(to right, #FBA8C1 0%, #FBA8C1 54%, #FBA8C1 97%)',borderRadius:"10px"}}>
<img src={apple} alt="apple" />
</div>


</div>


<div style={{height:"50px",width:"200px",textAlign:"center",fontSize:"35px",color:"#11AEC6",fontWeight:"800"}}>
    Select a pink card
</div>

<div style={{height:"33px",width:"200px",textAlign:"center",fontSize:"24px",color:"#A6C930",fontWeight:"800"}}>
    <p>It has images.</p>
</div>

</div>





{/* secondcard */}
<div style={{borderRadius:"60px",marginTop:"180px",height:"338px",width:"351px",backgroundColor:"white",display:'flex',flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>

<div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
<div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"150px",width:"135px",margin:"5px", background: 'linear-gradient(#A2E3F3 0%, rgba(162, 227, 243, 0.29) 46%, #A2E3F3 100%)',borderRadius:"10px"}}>
<img src={blueheart} alt="blueheart" />

</div>
</div>

<div style={{height:"50px",width:"200px",textAlign:"center",fontSize:"35px",color:"#11AEC6",fontWeight:"800"}}>
    Select a blue card
</div>

<div style={{height:"33px",width:"200px",textAlign:"center",fontSize:"24px",color:"#A6C930",fontWeight:"800"}}>
    <p>It has alphabets.</p>
</div>

</div>


{/* thirdcard */}
<div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ borderRadius: "60px", marginTop: "180px", height: "338px", width: "351px", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
            <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "150px", width: "135px", margin: "5px", background: 'linear-gradient(#A2E3F3 0%, rgba(162, 227, 243, 0.29) 46%, #A2E3F3 100%)', borderRadius: "10px" }}>
                <img src={blueheart} alt="blueheart" />
              </div>
            </div>
            <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
              <div style={{ height: "150px", width: "135px", margin: "5px", background: 'linear-gradient(to right, #FBA8C1 0%, #FBA8C1 54%, #FBA8C1 97%)', borderRadius: "10px" }}>
                <img src={apple} alt="apple" />
              </div>
            </div>
          </div>
          <div style={{ height: "150px", width: "300px", textAlign: "center", fontSize: "18px", color: "#A6C930", fontWeight: "800", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
            <div>If they’re same</div>
            <div style={{color:"#11AEC6",fontSize:"40px",fontWeight:"800"}}>Its a match !</div>
            <div>otherwise retry</div>
          </div>
        </div>
      </div>





<button onClick={handlePlay} style={{
          backgroundColor: 'transparent',
          border: 'none',
          textDecoration: 'none',
          position: 'absolute',
          marginTop: '550px',
          marginLeft: '450px',
        }}>
    <img           style={{ height: '100px', width: '250px' }}
 src={playbutton} alt="" />
</button>

    </div>
  )
}

export default Instruction


