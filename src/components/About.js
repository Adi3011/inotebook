import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";

/*What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.
https://legacy.reactjs.org/docs/hooks-state.html ---> useState()
When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!

useEffect() --> https://legacy.reactjs.org/docs/hooks-effect.html

useContext() --> is a hook in React that allows you to subscribe to a React context 
without introducing nesting. Context provides a way to pass data through the component tree without having to pass props down manually at every level.
*/
const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.updateState();
  }, []);
  return (
    <div>
      <h1>Hi, I am About {a.state.name}</h1>
    </div>
  );
};

export default About;
