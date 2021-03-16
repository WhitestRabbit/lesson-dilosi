import React, { useContext, useState } from "react";
import { LessonContext } from "../contexts/LessonContext";

const LessonForm = () => {
    const { dispatch } = useContext(LessonContext);
    const [title, setTitle] = useState('');
    const [professor, setProfessor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_LESSON', lesson: {
            title,
            professor
        }});
        setTitle('');
        setProfessor('');
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Lesson..." value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="Professor..." value={professor} onChange={(e) => setProfessor(e.target.value)} required/>
            <input type="submit" value="Add new lesson" />
        </form>
    );

}

export default LessonForm;