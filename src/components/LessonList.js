import React, { useContext, useEffect } from "react";
import { LessonContext } from "../contexts/LessonContext";
import LessonDetails from "./LessonDetails";

const LessonList = () => {
  const { lessons } = useContext(LessonContext);

  return lessons.length ? (
    <div className="lesson-list">
      <ul>
        {lessons.map(lesson => (
          <LessonDetails key={lesson.id} lesson={lesson} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">Ξεκίνα να βάζεις μαθήματα στη δήλωσή σου.</div>
  );
};

export default LessonList;
