import React from 'react';

const WorkoutList = ({ workouts, handleDateClick }) => {
  const workoutListStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    color: '#2C3333', // Use the primary text color here
  };

  const dateCardStyles = {
    backgroundColor: '#2E4F4F', // Use the primary card background color here
    padding: '10px',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  };

  const workoutCardStyles = {
    backgroundColor: '#0E8388', // Use the secondary card background color here
    padding: '10px',
    marginBottom: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-10)',
    transition: 'transform 0.3s',
  };

  const stackStyles = {
    transform: 'translateY(0)',
    marginBottom: '-5px',
  };

  return (
    <div style={workoutListStyles}>
      <h2>Workout List</h2>
      {workouts.map((workout, index) => (
        <div
          style={dateCardStyles}
          key={index}
          onClick={() => handleDateClick(workout.date)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(0px)';
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
                <p>Notes: {w.notes}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;


