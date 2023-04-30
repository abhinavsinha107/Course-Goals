import './CourseGoalList.css';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem'

const CourseGoalList = (props) => {
  return (
    <ul className='goal-list'>
        {props.items.map((goal) => {
            return (
              <CourseGoalItem key={goal.id} id={goal.id} text={goal.text} onDelete={props.onDeleteItem} />
            );
        })}
    </ul>
  )
}
export default CourseGoalList;