import React from "react";
import img from "./memes/ash_tear.jpg";
import img2 from "./memes/d.w.jpg";
import img3 from "./memes/disgusted_marge.jpg";
import img4 from "./memes/door_money.jpg";
import img5 from "./memes/dumb_people.jpg";
import img6 from "./memes/helth.jpg";
import img7 from "./memes/looking_respect.jpg";
import img8 from "./memes/marge_hiding.jpg";
import img9 from "./memes/microwave.jpg";
import img10 from "./memes/mind_sync.jpg";
import img11 from "./memes/no_listen.jpg";
import img12 from "./memes/oscar_propose.jpg";
import img13 from "./memes/sad_kermit.jpg";
import img14 from "./memes/say_sike.jpg";
import img15 from "./memes/shinji.jpg";
import img16 from "./memes/sims3.jpg";
import img17 from "./memes/simulations.jpg";
import img18 from "./memes/society.jpg";
import img19 from "./memes/spongebob_jellyfish.jpg";
import img20 from "./memes/spongebob_lying.jpg";
import img21 from "./memes/squidward_crazy.jpg";
import img22 from "./memes/squidward_distressed.jpg";
import img23 from "./memes/squidward_sleeping.jpg";
import img24 from "./memes/squidward_twin.jpg";
import img25 from "./memes/star.jpg";
import img26 from "./memes/uncut_gems.jpg";
import img27 from "./memes/weeknd_superbowl.jpg";
import img28 from "./memes/will_smith_pain.jpg";
/* 
fade-in styling adapted from: 
https://stackoverflow.com/questions/59673831/making-text-fade-in-out-on-button-click-in-react
*/
export default class MemeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meme: img,
      rNum: 1,
      fadeTransition: null,
      fadeState: "fade-in"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateMeme = this.generateMeme.bind(this);
    this.handleCaptionChange = this.handleCaptionChange.bind(this);
  }
  generateMeme(e) {
    let rNum = Math.floor(Math.random() * memes.length);
    // timer runs after image fades out
    const timeout = setTimeout(() => {
      this.setState({
        rNum: rNum,
        meme: memes[rNum],
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
    if (!this.state.caption) alert("Cannot leave caption blank!");
    this.setState({
      caption: ""
    });
  }
  handleCaptionChange(e) {
    this.setState({
      caption: e.target.value
    });
  }
  render() {
    return (
      <div>
        <h2 className="memesTitle">Generate Meme</h2>
        <div className="generatedMeme">
          <img
            className={`fade-wrapper ${this.state.fadeState}`}
            style={{ transitionDuration: `${FADE_DURATION}ms` }}
            src={this.state.meme}
            alt="cannot display"
          />
        </div>
        <div id="generateButton">
          <button onClick={this.generateMeme}>Generate!</button>
        </div>
        <br />
        <div id="editor">
          <label>Your Caption:</label>
          <br />
          <textarea
            id="caption"
            rows="4"
            cols="25"
            value={this.state.caption}
            onChange={this.handleCaptionChange}
          />
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}
var memes = [
  img,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28
];

const FADE_DURATION = 1000;
