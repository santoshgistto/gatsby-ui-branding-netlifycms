import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import BasicButtons from '../../templates/newbutton';
import ButtonAppBar from '../../pages';


var styles = {
    appbar: {
        backgroundColor: "red",
        height: "50px",
        width: "auto",
        color:"white"
    },
    box: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#fff",
        width:"432px",
        height:"600px",
        padding: "3px",
        boxShadow: "0 0 2px 0 black"
    },
    appbarTitle: {
        display:"inline",
        paddingLeft: "8px",
        paddingBottom: "2px",
        fontFamily: "futura"
    },
    logo: {
        paddingTop: "5px",
        paddingLeft:"15px",
        width: "40px",
        height: "40px"
    }
}

const AppPreview=({entry}) =>{
    const data = entry.getIn(["data"]).toJS()
    console.log("AppPreview ::", data)
    return(
        <div>
            <div style={getBoxStyle("#fff")}>
            <div style={getAppbarStyle(data.primaryColor)}>
                <img style={styles.logo} src={data.applogo}/>
                
                <h4 style={styles.appbarTitle}>{data.title}</h4>
            </div>
            <div  style={getCardStyle(data.secondaryColor)}>

                <p> Content</p>

                </div>
 
            </div>
        </div>
    )
}

const getBoxStyle =(color)=>{

    return {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#fff",
        width:"432px",
        height:"600px",
        padding: "3px",
        boxShadow: "0 0 2px 0 black",
        backgroundColor:`${color}`
    }
}

const getCardStyle = (color)=>{
    return {
      backgroundColor:`${color}`,
      height: "200px",
      width: "auto",
      color:"white",
      shadowOpacity: 0.75,
      shadowRadius: 5,
      shadowColor: 'gray',
      shadowOffset: { height: 0, width: 0 },
      boxShadow: "0 0 1px 0 black",
      alignItems: "center",
      display:"flex",
      margin:"15px",
      padding:"15px",
      alignItems: "center",
      textAlign: "center"
      
    }
  }

const getAppbarStyle = (color)=>{
    if(color === undefined){
        color = "#8c9eff"
    }
  return {
    backgroundColor:`${color}`,
    height: "70px",
    width: "auto",
    color:"white",
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'gray',
    shadowOffset: { height: 0, width: 0 },
    boxShadow: "0 0 3px 0 black",
    alignItems: "center",
    display:"flex"
    
  }
}

export default AppPreview