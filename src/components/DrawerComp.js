import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import '../index.css'
import { makeStyles  } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  href: {
    textDecoration: 'none',
    
  }
}))

const DrawerComp = ({ openDrawer, setOpenDrawer, menuItem }) => {
  const classes = useStyles()
  return (
    <>
    
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {menuItem.map(menu => (
              <>
              <Link to={menu.link} className={classes.href}>
              <ListItem divider button>
              <ListItemIcon>
                <ListItemText>{menu.item}</ListItemText>
              </ListItemIcon>
            </ListItem>
            </Link>
              </>
          ))}
        </List>
      </Drawer>
      
    </>
  );
};

export default DrawerComp;
