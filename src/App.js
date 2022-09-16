import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "🥳": "party",
  "🤨": "sus",
  "🥹": "tears of joy",
  "❤️": "love",
  "🫡": "salute"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function listItemClickHandler(emoji) {
    var emojimeaning = emojiDictionary[emoji];
    setMeaning(emojimeaning);
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside out</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>
      {/* <h3> emojis we know</h3> */}
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => listItemClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
