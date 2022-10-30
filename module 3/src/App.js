import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Blush from './images/blush.jpeg'
import Concealer from './images/concealer.jpg'
import Mascara from './images/mascara.jpg'

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="#000000">
            Welcome to Makeup And Cosmetics
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="#000000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales congue tristique. Cras non pretium sem. Duis interdum lorem sit amet ligula pretium, sed rutrum urna semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas gravida ullamcorper.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<img src={Blush} style={{height:"300px", width:"200px"}}/>}  title="Cloud Paint Blush" btnTitle="Buy Now" />
          <Grid icon={<img src={Concealer} style={{height:"300px", width:"200px"}}/>} title="Stretch Concealer" btnTitle="Buy Now"/>
          <Grid icon={<img src={Mascara} style={{height:"300px", width:"200px"}}/>}  title="Slick Mascara" btnTitle="Buy Now"/>
        </div>
        <div className={classes.bigSpace}>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
