import React, { useState } from 'react';

const WorkoutForm = ({ addWorkout }) => {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const workout = {
      exercise,
      sets,
      reps,
    };
    addWorkout(date, workout);
    setExercise('');
    setSets(0);
    setReps(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Workout</h2>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Exercise:
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </label>
      <label>
        Sets:
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(parseInt(e.target.value))}
        />
      </label>
      <label>
        Reps:
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(parseInt(e.target.value))}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default WorkoutForm;
