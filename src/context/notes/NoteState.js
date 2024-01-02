import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "6592aed3bee748210ae2e53a",
      user: "658fc5508096cb8e114e9b54",
      title: "AI is advancing",
      description:
        "AI is future.Various Organizations are developing tools to optimize human work using AI",
      tag: "Artificial Intelligence",
      date: "2024-01-01T12:23:47.210Z",
      __v: 0,
    },
    {
      _id: "65941c4f70f4f2d71a612e1a",
      user: "658fc5508096cb8e114e9b54",
      title: "AI is advancing with speed",
      description:
        "AI is future.Various Organizations are developing tools to optimize human work using AI",
      tag: "Artificial Intelligence",
      date: "2024-01-02T14:23:11.468Z",
      __v: 0,
    },
    {
      _id: "65941c4f70f4f2d71a612e1a",
      user: "658fc5508096cb8e114e9b54",
      title: "AI is advancing with speed",
      description:
        "AI is future.Various Organizations are developing tools to optimize human work using AI",
      tag: "Artificial Intelligence",
      date: "2024-01-02T14:23:11.468Z",
      __v: 0,
    },
    {
      _id: "65941c4f70f4f2d71a612e1a",
      user: "658fc5508096cb8e114e9b54",
      title: "AI is advancing with speed",
      description:
        "AI is future.Various Organizations are developing tools to optimize human work using AI",
      tag: "Artificial Intelligence",
      date: "2024-01-02T14:23:11.468Z",
      __v: 0,
    },
    {
      _id: "65941c4f70f4f2d71a612e1a",
      user: "658fc5508096cb8e114e9b54",
      title: "AI is advancing with speed",
      description:
        "AI is future.Various Organizations are developing tools to optimize human work using AI",
      tag: "Artificial Intelligence",
      date: "2024-01-02T14:23:11.468Z",
      __v: 0,
    },
    {
      _id: "65941c4f70f4f2d71a612e1a",
      user: "658fc5508096cb8e114e9b54",
      title: "AI is advancing with speed",
      description:
        "AI is future.Various Organizations are developing tools to optimize human work using AI",
      tag: "Artificial Intelligence",
      date: "2024-01-02T14:23:11.468Z",
      __v: 0,
    },
    {
      _id: "65941c4f70f4f2d71a612e1a",
      user: "658fc5508096cb8e114e9b54",
      title: "AI is advancing with speed",
      description:
        "AI is future.Various Organizations are developing tools to optimize human work using AI",
      tag: "Artificial Intelligence",
      date: "2024-01-02T14:23:11.468Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialNotes);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
