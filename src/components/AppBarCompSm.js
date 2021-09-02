import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(() => ({
    appbar: {
        padding: "5px 10px",
      },
    
      toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },
    containerHeading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
}));

const AppBarCompSm = ({ menuItems, openDrawer, setOpenDrawer, toggleHandler }) => {
  const classes = useStyles();
  
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.containerHeading}>
            <span>
              <Typography variant="h4">Isaac Frank</Typography>
            </span>
            <span>
              <IconButton onClick={toggleHandler}>
                <MenuIcon />
              </IconButton>
            </span>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarCompSm;
