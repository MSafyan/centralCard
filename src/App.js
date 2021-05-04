import React from 'react';
import './App.css';
import Home from './components/home'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from './themeContext';


const useStyles = makeStyles((theme) => ({
  rootpaper:{
    minHeight:'100vh'
  }
}));
function App() {
  const classes = useStyles();
  const [themeColor,setThemeColor]=React.useState(false)

  const theme = createMuiTheme({
    palette: {
      type:themeColor?'dark':'light',
      primary: {
        main: 'rgb(114, 54, 223)',
        
      },
      secondary: {
        main: '#eee',
      },
  
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{themeColor,setThemeColor}}>
      <Paper className={classes.rootpaper}>
        <Home/>
      </Paper>
      </ThemeContext.Provider>
     
    </ThemeProvider>

  );
}

export default App;
