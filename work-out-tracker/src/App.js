import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div>
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} />
    </div>
  );
};

export default App;
