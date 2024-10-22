import React, { useState } from "react";

const Word = () => {
  const [status, setStatus] = useState(true);

  let words = [
    {
      koreanWord: "하다",
      englishWord: "todo",
    },
    {
      koreanWord: "가다",
      englishWord: "to go",
    },
    {
      koreanWord: "오다",
      englishWord: "to come",
    },
    {
      koreanWord: "먹다",
      englishWord: "to eat",
    },
    {
      koreanWord: "마시다",
      englishWord: "to drink",
    },
    {
      koreanWord: "보다",
      englishWord: "to see/watch",
    },
    {
      koreanWord: "자다",
      englishWord: "to sleep",
    },
    {
      koreanWord: "쓰다",
      englishWord: "to write",
    },
    {
      koreanWord: "읽다",
      englishWord: "to read",
    },
    {
      koreanWord: "살다",
      englishWord: "to live",
    },
    {
      koreanWord: "주다",
      englishWord: "to give",
    },
    {
      koreanWord: "받다",
      englishWord: "to receive",
    },
    {
      koreanWord: "좋아하다",
      englishWord: "to like",
    },
    {
      koreanWord: "싫어하다",
      englishWord: "to dislike",
    },
    {
      koreanWord: "일어나다",
      englishWord: "to wake up/to get up",
    },
    {
      koreanWord: "누구",
      englishWord: "who",
    },
    {
      koreanWord: "뭐",
      englishWord: "what",
    },
    {
      koreanWord: "언제",
      englishWord: "when",
    },
    {
      koreanWord: "어디",
      englishWord: "where",
    },
    {
      koreanWord: "왜",
      englishWord: "why",
    },
    {
      koreanWord: "어제",
      englishWord: "yesterday",
    },
    {
      koreanWord: "오늘",
      englishWord: "today",
    },
    {
      koreanWord: "내일",
      englishWord: "tomorrow",
    },
    {
      koreanWord: "지금",
      englishWord: "now",
    },
    {
      koreanWord: "나중에",
      englishWord: "later",
    },
    {
      koreanWord: "지금",
      englishWord: "now",
    },
    {
      koreanWord: "나중에",
      englishWord: "later",
    },
    {
      koreanWord: "곧",
      englishWord: "soon",
    },
    {
      koreanWord: "벌써",
      englishWord: "already",
    },
    {
      koreanWord: "아직",
      englishWord: "still",
    },
    {
      koreanWord: "항상",
      englishWord: "always",
    },
    {
      koreanWord: "자주",
      englishWord: "often",
    },
    {
      koreanWord: "가끔",
      englishWord: "sometimes",
    },
    {
      koreanWord: "절대",
      englishWord: "never",
    },
  ];

  let randomWord = () => {
    return Math.floor(Math.random() * words.length);
  };

  const [wordCreated, setWordCreated] = useState(words[randomWord()]);

  return (
    <div
      className="word"
      onClick={() => {
        setStatus(!status);
      }}
    >
      {status ? (
        <h1>{wordCreated.koreanWord}</h1>
      ) : (
        <h2>{wordCreated.englishWord}</h2>
      )}

      {/* <div className="circle"></div> */}
    </div>
  );
};

export default Word;
