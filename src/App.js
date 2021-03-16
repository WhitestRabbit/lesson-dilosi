import React from "react";
import "./app.css";
import LessonContextProvider from "./contexts/LessonContext";
import LessonList from "./components/LessonList";
import Navbar from "./components/Navbar";
import LessonForm from "./components/LessonForm";

const App = () => {
  return (
    <div className="App">
      <LessonContextProvider>
        <Navbar />
        <LessonList />
        <LessonForm />
      </LessonContextProvider>
    </div>
  );
};

export default App;
