import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

const App = () => {
  const [workouts, setWorkouts] = useState([]);

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

  const backgroundColor = {
    marginTop: -16,
    backgroundColor: '#2C3333',
    height: '100vh',
    color: '#CBE4DE',
  };

  return (
    <div style={backgroundColor}>
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} handleDateClick={handleDateClick} />
    </div>
  );
};

export default App;
