import React, { useState } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core";
import Home from "./screens/Home";
import Verification from "./screens/Verification";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nft from "./screens/Nft";
import AppBarComp from "./components/AppBarComp";
import AppBarCompSm from "./components/AppBarCompSm";
import NotFound from "./screens/NotFound";
import DrawerComp from "./components/DrawerComp"
//import { purple } from "@material-ui/core/colors";

export default function App() {

  const menuItem = [
    { item: "NFT", link: "/nft" },
    { item: "Revoke", link: "/revoke" },
    { item: "Analytics", link: "/analytics" },
    { item: "Verification", link: "/verification" },
    { item: "Profile", link: "/profile" },
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: "#5A7D7C",
      },
      secondary: {
        main: '#A0C1D1'
      }
    },
  });

  const myTheme = useTheme();
  const isMatch = useMediaQuery(myTheme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleHandler = () => {
    setOpenDrawer(!openDrawer)
  }

  console.log(theme)

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {isMatch ? (
            <AppBarCompSm
              menuItem={menuItem}
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
              toggleHandler={toggleHandler}
            />
          ) : (
            <AppBarComp menuItem={menuItem} />
          )}
          <Switch>
            <Route exact path="/">
              <Home
                menuItem={menuItem}
                isMatch={isMatch}
              />
            </Route>
            <Route exact path="/verification">
              <Verification
                menuItem={menuItem}
                isMatch={isMatch}
              />
            </Route>
            <Route path="/nft" component={Nft} />
            <Route component={() => <NotFound isMatch={isMatch}/>} />
          </Switch>
          <DrawerComp 
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        menuItem={menuItem}
      />
        </BrowserRouter>
      </ThemeProvider>
      
    </>
  );
}
