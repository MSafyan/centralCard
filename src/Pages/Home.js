import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ConCard from '../components/Card'
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Container from '@material-ui/core/Container'
import {ThemeContext} from '../themeContext';

//components
import AccountButton from '../components/DropDownButton/AccountButton'
import HQButton from '../components/DropDownButton/HQButton';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('xs')]: {
      display:'none'
    }

  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      marginRight: 36,
    }

  },
  hide: {
    display: 'none !important',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
width: theme.spacing.unit * 7,
[theme.breakpoints.up('sm')]: {
  width: theme.spacing.unit * 9,
},
[theme.breakpoints.down('sm')]: {
  width: 0,
  display:'none',
},
},
NavLinks:{
  [theme.breakpoints.down('sm')]: {
    width: 0,
    display:'none',
  },
},
nested: {
paddingLeft: theme.spacing.unit * 4,
},
  drawerOpen: {
    width: drawerWidth,
    // color:'white',
    // background:'#212529',

    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {

    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  toolbar1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  lefttoolbar:{
    display:'flex',
    alignItems:'center'

  },
  rightToolbar:{
    display:'flex'
  },
  toolbarButton:{
    color:'white',
    [theme.breakpoints.down('sm')]: {
      width: 0,
      display:'none',
    },
  },
  toolbarButtonUnhidden:{
    color:'white',
    [theme.breakpoints.up('md')]: {
      minWidth:"0px",
      padding:'0px'
    },
  },
  content: {
    minHeight:'100vh',
    display:'flex',
    alignItems:"center",
    justifyContent:'center',
    paddingTop:'4rem'
  },
  hideCard:{
    [theme.breakpoints.down('xs')]: {
      display:"none !important"
    }
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const {themeColor,setThemeColor}=React.useContext(ThemeContext);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const onClick=()=>{
    setThemeColor(!themeColor);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar1}>
          <div className={classes.lefttoolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            LOGO
          </Typography>
          </div>
          <div className={classes.rightToolbar}>
            <Button className={classes.toolbarButton}>Support</Button>
            <HQButton/>
            <Button className={classes.toolbarButton}>HQM</Button>
            
            <Button className={classes.toolbarButton} onClick={(e)=>onClick()}>
              <Brightness4Icon/>
            </Button>
            <AccountButton/>
         
            
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerPaperClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
        <Container>
      <main className={clsx(classes.content, {
              [classes.hideCard]: open,
            })} >
        <ConCard/>
      </main>
        </Container>
    </div>
  );
}
