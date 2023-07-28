import React, { useState } from 'react';

const WorkoutList = ({ workouts, handleDateClick }) => {
  const [activeDate, setActiveDate] = useState(null); // State to keep track of active date

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
    marginRight: '10px', // Add a gap between date cards
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
    transition: 'transform 0.3s',
  };

  const workoutCardStyles = {
    backgroundColor: '#0E8388', // Use the secondary card background color here
    padding: '10px',
    marginBottom: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    top: '40px', // Adjust the distance from the date card here
    left: 0,
    right: 0,
    transform: 'scaleY(0)', // Hide the workout cards initially
    transformOrigin: 'top', // Set the transform origin to top
    transition: 'transform 0.3s',
    zIndex: 0,
  };

  const stackStyles = {
    transform: 'translateY(0)',
    marginBottom: '-5px',
  };

  const handleDateClickToggle = (date) => {
    setActiveDate((prevActiveDate) => (prevActiveDate === date ? null : date));
  };

  return (
    <div style={workoutListStyles}>
      <h2>Workout List</h2>
      {workouts.map((workout, index) => {
        const workoutCount = workout.workouts.length;
        const isActive = activeDate === workout.date;
        return (
          <div
            style={dateCardStyles}
            key={index}
            onClick={() => handleDateClickToggle(workout.date)} // Use handleDateClickToggle
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h3>Date: {workout.date}</h3>
            {/* Add the circle with workout count */}
            {workoutCount > 0 && (
              <div
                style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '10px',
                  backgroundColor: 'green',
                  color: '#ffffff',
                  borderRadius: '35%',
                  padding: '4px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: 2,
                }}
              >
                {workoutCount}
              </div>
            )}
            <div
              style={{
                ...workoutCardStyles,
                transform: isActive ? 'scaleY(1)' : 'scaleY(0)', // Toggle visibility based on activeDate
              }}
            >
              {workout.workouts.map((w, i) => (
                <div key={i}>
                  <h4>Exercise: {w.exercise}</h4>
                  <p>Sets: {w.sets}</p>
                  <p>Reps: {w.reps}</p>
                  <p>Notes: {w.notes}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutList;
