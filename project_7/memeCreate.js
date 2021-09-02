import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { UserURL, VaultURL, MemeImages } from "./misc.js";
/* 
fade-in styling adapted from: 
https://stackoverflow.com/questions/59673831/making-text-fade-in-out-on-button-click-in-react
*/
class MemeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.addMeme = props.addMeme;
    this.state = {
      image: MemeImages[0],
      img_id: 0,
      fadeTransition: null,
      fadeState: "fade-in",
      caption: "",
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateMeme = this.generateMeme.bind(this);
    this.handleCaptionChange = this.handleCaptionChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }
  generateMeme(e) {
    let img_id = Math.floor(Math.random() * MemeImages.length);
    // timer runs after image fades out
    const timeout = setTimeout(() => {
      this.setState({
        img_id: img_id,
        image: MemeImages[img_id],
        fadeTransition: null,
        fadeState: "fade-in"
      });
    }, FADE_DURATION);
    clearTimeout(this.state.fadeTransition);
    // update state to execute fade out
    this.setState({
      fadeState: "fade-out",
      fadeTransition: timeout,
      caption: ""
    });
  }
  handleSubmit() {
    if (!this.state.caption) {
      alert("Cannot leave caption blank!");
    } else {
      let payload = {
        meme_id: Math.floor(Math.random() * 2147483647),
        username: this.state.username,
        upvotes: 0,
        downvotes: 0,
        img_id: this.state.img_id,
        caption: this.state.caption
      };
      this.addMeme(payload);

      // meme_id: req.body.meme_id,
      // username: req.body.username,
      // upvotes: req.body.upvotes,
      // downvotes: req.body.downvotes,
      // img_id: req.body.img_id,
      // caption: req.body.caption
      // meme_id int(11)
      // username text
      // upvotes int(11)
      // downvotes int(11)
      // caption text
      // img_id int(11)

      // influenced from the interweb https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      fetch(VaultURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      fetch(UserURL, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          posted: true
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    this.setState({
      caption: ""
    });
  }
  handleCaptionChange(e) {
    this.setState({
      caption: e.target.value
    });
  }
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }
  render() {
    return (
      <div className="memeCreator">
        <h2 className="memesTitle">Generate Meme</h2>
        <img
          className={`fade-wrapper ${this.state.fadeState}`}
          style={{ transitionDuration: `${FADE_DURATION}ms` }}
          src={this.state.image}
          alt="cannot display"
        />
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.generateMeme}
        >
          Generate!
        </Button>
        <br />
        <br />
        <TextField
          label="Username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <br />
        <br />
        <TextField
          id="caption"
          label="Caption"
          multiline
          rowsMax={5}
          value={this.state.caption}
          onChange={this.handleCaptionChange}
          variant="outlined"
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    );
  }
}

const FADE_DURATION = 1000;

export { MemeCreate };
