import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (date, workout) => {
    const existingWorkout = workouts.find((w) => w.date === date);

    if (existingWorkout) {
      existingWorkout.workouts.push(workout);
      setWorkouts([...workouts]);
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

  return (
    <div>
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} handleDateClick={handleDateClick} />
    </div>
  );
};

export default App;