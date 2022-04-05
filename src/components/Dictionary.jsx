import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function collectEmojiInfo(entry) {
  return (
    <Entry
      key={entry.id}
      id={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

function Dictionary() {
  return (
    <div>
      <dl className="dictionary">{emojipedia.map(collectEmojiInfo)}</dl>
    </div>
  );
}

export default Dictionary;
