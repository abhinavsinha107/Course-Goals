import { useState } from "react";

import "./CourseInput.css";
import Button from '../../UI/Button/Button';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
export default CourseInput;
