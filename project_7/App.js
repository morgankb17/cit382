import React, { useState, useEffect } from "react";
import { MemeCreate } from "./memeCreate.js";
import MemeGrid from "./memeGrid.js";
import "./styles.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

import { UserURL, VaultURL } from "./misc.js";
import { TabPanel, a11yProps, useStyles } from "./materialUtil.js";

export default function App(props) {
  const memeReducer = (state, newMeme) => {
    return state.concat(newMeme);
  };
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);
  const [localMemes, addLocalMeme] = React.useReducer(memeReducer, []);

  const [DBMemes, setDBMemes] = useState([]);
  const [Memers, setMemers] = useState([]);
  useEffect(() => {
    // Running into issues with this fetch rn
    fetch(VaultURL, {
      mode: "cors" // no-cors, *cors, same-origin
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.rows);
        if (res.rows) {
          setDBMemes(res.rows);
        }
      })
      .catch((err) => console.log(err));
    fetch(UserURL, {
      mode: "cors" // no-cors, *cors, same-origin
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.rows);
        if (res.rows) {
          return setMemers(res.rows);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const addMeme = (meme) => {
    addLocalMeme(meme);
  };

  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={tab}
          onChange={handleTabChange}
          aria-label="Meme Generator Tabs"
          centered
        >
          <Tab label="Meme" {...a11yProps(0)} />
          <Tab label="Meme Vault" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        <div className="localTab">
          <Paper elevation={2} variant="outlined" className="flex-half">
            <MemeCreate addMeme={addMeme} />
          </Paper>
          <Paper elevation={2} variant="outlined" className="flex-half">
            <div>
              <h2 className="viewMeme">Your Memes</h2>
              <MemeGrid memes={localMemes} />
            </div>
          </Paper>
        </div>
        <br />
        <Paper elevation={1}>
          <marquee>
            <i>
              <b>Memers:</b> {Memers.map((x) => x.username).join(", ")}
            </i>
          </marquee>
        </Paper>
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Paper elevation={3}>
          <MemeGrid memes={DBMemes} />
        </Paper>
      </TabPanel>
    </div>
  );
}
