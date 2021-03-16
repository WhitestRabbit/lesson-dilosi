import React, { useContext } from "react";
import { LessonContext } from "../contexts/LessonContext";

const Navbar = () => {
  const { lessons } = useContext(LessonContext);

  return (
    <div className="navbar">
      <h2>Δήλωση Μαθημάτων</h2>
      <p>Έχεις {lessons.length} μαθήματα στη δήλωσή σου.</p>
    </div>
  );
};

export default Navbar;
