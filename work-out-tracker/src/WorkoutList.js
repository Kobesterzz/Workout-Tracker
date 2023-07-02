import React from 'react';
import './WorkoutList.sass';


const WorkoutList = ({ workouts, handleDateClick }) => {
  return (
    <div className="workout-list">
      <h2>Workout List</h2>
      {workouts.map((workout, index) => (
        <div className="date-card" key={index} onClick={() => handleDateClick(workout.date)}>
          <h3>Date: {workout.date}</h3>
          {workout.workouts.map((w, i) => (
            <div className="workout-card" key={i}>
              <h4>Exercise: {w.exercise}</h4>
              <p>Sets: {w.sets}</p>
              <p>Reps: {w.reps}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
