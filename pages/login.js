import React from 'react'

const IndexPage = ()=>{
    return(
    <html style={{background:"rgba(81, 233,225, 0.678)",width:"100%",height:"100%"}}>
    <div>
        <header>
            <h1 style={{fontFamily:"algerian",textAlign:"center",fontSize:"50px"}}>Iniciar Sesion</h1>
        </header>
        <div style={{background:"rgba(1, 23, 2, 0.678)",marginLeft:"420px", width:"45%",  paddingTop:"30px",paddingBottom:"30px"}}>
            <form style={{textAlign:"center",fontSize:"30px"}}>
                    <div style={{marginBottom:"20px"}}>
                            <label>email: </label>
                            <input type="email" placeholder="email" style={{fontSize:"30px"}}></input>
                    </div>
                    <div style={{marginBottom:"20px"}}>
                            <label for="n2">Password: </label>
                            <input type="password" placeholder="password" style={{fontSize:"30px"}}></input>
                    </div>  
                    <button type="btn" style={{fontSize:"30px"}}>Iniciar Sesion</button>
            </form>
        </div>
    </div>
    </html>
    )
}
export default IndexPage