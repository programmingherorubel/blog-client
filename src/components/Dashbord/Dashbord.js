import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link, Outlet } from 'react-router-dom';
import './Dashbord.css'
import useAuth from './../../hooks/UseAuth';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const {logout} = useAuth()
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

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
        <Toolbar style={{backgroundColor:'black'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome To Dashbord
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
            <Link style={{textDecoration:'none',color:'#010323',fontWeight:'700'}} to="/"><i style={{margin:'1px 20px',fontSize:'20px',color:'gray'}} class="fa-solid fa-arrow-right-to-bracket"></i>Home</Link><br />

            <Link style={{textDecoration:'none',color:'#010323',fontWeight:'700'}} to="/dashbord/createblog"><i style={{margin:'1px 20px',fontSize:'20px',color:'gray'}} class="fa-solid fa-circle-plus"></i>Create Blog</Link><br />

            <Link style={{textDecoration:'none',color:'#010323',fontWeight:'700'}} to="/dashbord/createjapaneseblog"><i style={{margin:'1px 20px',fontSize:'20px',color:'gray'}} class="fa-solid fa-circle-plus"></i>Create Japanese Blog</Link> <br />

            <Link style={{textDecoration:'none',color:'#010323',fontWeight:'700'}} to="/dashbord/deletePersonalBlog"><i class="fa-solid fa-trash-can"style={{margin:'1px 20px',fontSize:'20px',color:'gray'}}></i>Delete Personal Blog</Link> <br />

            <Link style={{textDecoration:'none',color:'#010323',fontWeight:'700'}} to="/dashbord/japaneseBlog"><i class="fa-solid fa-trash-can"style={{margin:'1px 20px',fontSize:'20px',color:'gray'}}></i>Delete Japanese Blog</Link> <br />

            <Link style={{textDecoration:'none',color:'#010323',fontWeight:'700'}} to="/dashbord/admin"><i class="fa-solid fa-user-large"style={{margin:'1px 20px',fontSize:'20px',color:'gray'}}></i>Create Admin</Link> <br />

            <Link style={{textDecoration:'none',color:'#010323',fontWeight:'700'}} to="/dashbord/user"><i class="fa-solid fa-users"style={{margin:'1px 20px',fontSize:'20px',color:'gray'}}></i>Website User</Link> <br />

           <button onClick={logout} className='customButton'><i style={{margin:'0px 10px',fontSize:'18px'}} class="fa-solid fa-right-from-bracket" ></i>Logout</button>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* output  */}
        <Outlet/>
      </main>
    </div>
  );
}
