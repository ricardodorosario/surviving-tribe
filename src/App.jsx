import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import "./app.css";
import LeftMenu from "./LeftMenu";
import * as leftMenuActions from "./LeftMenuActions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuActive: false
    };
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <AppBar
            className={this.state.isMenuActive ? "app-bar-open" : "app-bar"}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={evt => leftMenuActions.toggleDrawer(this, evt)}
                edge="start"
                className="app-bar-icon-button"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Surviving Tribe
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
        <LeftMenu
          isMenuActive={this.state.isMenuActive}
          toggleDrawer={evt => leftMenuActions.toggleDrawer(this, evt)}
        />
      </div>
    );
  }
}

export default App;
