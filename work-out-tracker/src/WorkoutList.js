import React from 'react';

const WorkoutList = ({ workouts, handleDateClick }) => {
  const workoutListStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const dateCardStyles = {
    backgroundColor: '#f8f8f8',
    padding: '10px',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  };

  const workoutCardStyles = {
    backgroundColor: '#ffffff',
    padding: '10px',
    marginBottom: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(0)',
    transition: 'transform 0.3s',
  };

  const stackStyles = {
    transform: 'translateY(0)',
    marginBottom: '-5px',
  };

  

  return (
    <div style={{ workoutListStyles}}>
      <h2>Workout List</h2>
      {workouts.map((workout, index) => (
        <div
          style={dateCardStyles}
          key={index}
          onClick={() => handleDateClick(workout.date)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <h3>Date: {workout.date}</h3>
          <div style={stackStyles}>
            {workout.workouts.map((w, i) => (
              <div style={workoutCardStyles} key={i}>
                <h4>Exercise: {w.exercise}</h4>
                <p>Sets: {w.sets}</p>
                <p>Reps: {w.reps}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;

