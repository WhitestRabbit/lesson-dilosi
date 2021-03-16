import React, { useContext, useState, useEffect } from "react";
import { LessonContext } from "../contexts/LessonContext";

const LessonDetails = ({ lesson }) => {
  const { dispatch } = useContext(LessonContext);

  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(lesson.title);
  const [newProfessor, setNewProfessor] = useState(lesson.professor);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch({type: 'EDIT_LESSON', id: lesson.id, title: newTitle, professor: newProfessor});
    // editLesson(lesson.id, newTitle, newProfessor);
    setEdit(false);
  }

  return edit ? (
    <li className="edit-lesson">
      <form onSubmit={handleEdit}>
        <input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
        <input type='text' value={newProfessor} onChange={(e) => setNewProfessor(e.target.value)}/>
        <input type='submit' />
      </form>
    </li>
  ): (
    <li>
      <div>
        <div className="title">{lesson.title}</div>
        <div className="professor">{lesson.professor}</div>
      </div>
      <div className="button-box">
        <button className="edit" onClick={() => setEdit(true) }>
          Edit
        </button>
        <button className="delete" onClick={() => dispatch({type: 'REMOVE_LESSON', id:lesson.id})}>
          X
        </button>
      </div>
    </li>
  );
};

export default LessonDetails;
