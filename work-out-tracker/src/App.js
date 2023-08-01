// App.js
import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import LandingPage from './LandingPage';

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showWorkoutTracker, setShowWorkoutTracker] = useState(false);

  const addWorkout = (date, workout) => {
    const existingWorkoutIndex = workouts.findIndex((w) => w.date === date);

    if (existingWorkoutIndex !== -1) {
      const updatedWorkouts = [...workouts];
      updatedWorkouts[existingWorkoutIndex].workouts.push(workout);
      setWorkouts(updatedWorkouts);
    } else {
      const newWorkout = {
        date,
        workouts: [workout],
      };
      setWorkouts([...workouts, newWorkout]);
    }
  };

  const handleDateClick = (date) => {
    console.log('Clicked on date:', date);
  };

  const handleGetStarted = () => {
    setShowWorkoutTracker(true);
  };

  const backgroundColor = {
    marginTop: -16,
    backgroundColor: 'E9A6A6',
    height: '100vh',
    color: '864879',
  };

  return (
    <div style={backgroundColor}>
      {showWorkoutTracker ? (
        <>
          <WorkoutForm addWorkout={addWorkout} />
          <WorkoutList workouts={workouts} handleDateClick={handleDateClick} />
        </>
      ) : (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
    </div>
  );
};

export default App;
