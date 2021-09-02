import MemeCard from "./memeCard.js";

export default function MemeGrid(props) {
  return (
    <div>
      {props.memes.map((meme, index) => (
        <MemeCard
          key={meme.meme_id}
          meme={meme}
          memeArray={props.memes}
          arrayIndex={index}
        />
      ))}
    </div>
  );
}
