import React from 'react'
import logo from '../images/logo.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 



const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          },


    },
    logo: {
        width: "25%", 
        borderRadius: '10%',
        margin: '100px',
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color: "#B8D1B8"},
        
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})



function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img className={classes.logo} src={logo} alt="logo"/> 
                <Typography variant="h6" className={classes.menuItem}>
                   Home
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact
                </Typography>
            </Toolbar>
    )
}

export default NavBar
