import { useState } from "react";

import { VaultURL, MemeImages } from "./misc.js";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

export default function MemeCard(props) {
  const classes = useStyles();

  let [editable, setEditable] = useState(false);
  let [tempCaption, setTempCaption] = useState(props.meme.caption);

  const handleDelete = (e) => {
    fetch(`${VaultURL}/${props.meme.meme_id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // let [{ meme_id }] = props.memeArray.splice(props.arrayIndex, 1);
    // console.log([meme_id, props.memeArray]);
  };

  const saveChanges = (e) => {
    let payload = {
      meme_id: props.meme.meme_id,
      caption: props.meme.caption
    };
    fetch(VaultURL, {
      method: "PUT",
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
  };
  const onToggle = (e) => {
    // conditionals are sort of flipped here due to toggling after behaviour.
    if (editable) {
      props.meme.caption = tempCaption;
      saveChanges();
    } else {
      setTempCaption(props.meme.caption);
    }
    setEditable(!editable);
  };
  const captionChange = (e) => {
    setTempCaption(e.target.value);
  };
  let editableBtn;
  let captionEle;
  if (editable) {
    editableBtn = <SaveIcon color="primary" />;
    captionEle = (
      <TextField label="Caption" value={tempCaption} onChange={captionChange} />
    );
  } else {
    editableBtn = <EditIcon color="primary" />;
    captionEle = (
      <Typography variant="body1" color="textPrimary" component="p">
        {props.meme.caption}
      </Typography>
    );
  }
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        className={classes.media}
        image={MemeImages[props.meme.img_id]}
      />
      <CardContent>
        {captionEle}
        <Typography variant="body2" color="textSecondary" component="p">
          {props.meme.username}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Edit" arrow>
          <IconButton aria-label="edit/save meme" onClick={onToggle}>
            {editableBtn}
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" arrow>
          <IconButton aria-label="delete meme">
            <DeleteIcon color="secondary" onClick={handleDelete} />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
