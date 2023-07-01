import React from 'react'

const WorkoutList = ({ workouts }) => {
    return (
      <div>
        <h2>Workout List</h2>
        {workouts.map((workout, index) => (
          <div key={index}>
            <h3>Exercise: {workout.exercise}</h3>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default WorkoutList;
  