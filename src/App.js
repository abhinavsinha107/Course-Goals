import { useState } from 'react';

import './App.css';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {text: "Do All Excersises!", id: 'g1'},
    {text: "Finish the Course", id: 'g2'},
  ])

  const addGoalHandler = (newGoal) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({text: newGoal, id: Math.random()});
      return updatedGoals;
    })
  }

  const deleteItemHandler = (deleteGoalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => {
        return goal.id !== deleteGoalId;
      })
      return updatedGoals;
    })
  }

  let content = <p style={{textAlign: "center"}}>No goals found. Maybe add one?</p>;

  if(courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/>
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;
