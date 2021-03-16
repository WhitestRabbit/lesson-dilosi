import { v4 } from "uuid";

export const LessonReducer = (state, action) => {
    switch(action.type) {
    case 'ADD_LESSON':
        return [...state, {title: action.lesson.title, professor: action.lesson.professor, id: v4()}];
    case 'REMOVE_LESSON':
        return state.filter(lesson => lesson.id !== action.id);
    case 'EDIT_LESSON':
        let newLessons = [...state];
        newLessons.map(lesson => {
            if (lesson.id === action.id) {
                lesson.title = action.title;
                lesson.professor = action.professor;
            }
        });
        return newLessons;
    default:
        return state;
    }
}