import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
 
const Typing = (props) => {
  return (
    <ReactTypingEffect
    className="type"
    speed={200}
    eraseDelay={2000}
    typingDelay= {1500}
    text={["Pain.", "Stress.", "Fatigue."] }
    cursorClassName="cursor"
    />
  );
};
export default Typing