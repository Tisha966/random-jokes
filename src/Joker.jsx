import { useEffect, useState } from "react";
import "./App.css";

// Floating emoji background component
function EmojiBackground() {
  const emojis = Array.from({ length: 15 });

  return (
    <div className="emoji-background">
      {emojis.map((_, index) => {
        const style = {
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          fontSize: `${Math.random() * 1.5 + 1.5}rem`,
        };
        return (
          <div key={index} className="emoji-float" style={style}>
            😂
          </div>
        );
      })}
    </div>
  );
}

export default function Joker() {
  const [joke, setJoke] = useState(null);
  const [animate, setAnimate] = useState(false);

  const fetchJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(data);
    setAnimate(true);

    setTimeout(() => setAnimate(false), 1000);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="joke-wrapper">
      <EmojiBackground />
      <div className="joke-card">
        <div className={`laugh-emoji ${animate ? "bounce" : ""}`}>😂</div>
        {joke ? (
          <>
            <p><strong>{joke.setup}</strong></p>
            <p>{joke.punchline}</p>
            <button onClick={fetchJoke}>Get Another Joke</button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
