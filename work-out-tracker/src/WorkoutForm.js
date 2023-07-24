import React, { useState } from 'react';

const WorkoutForm = ({ addWorkout }) => {
  const [exercise, setExercise] = useState('');
  const [notes, setNotes] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const workout = {
      exercise,
      sets,
      reps,
      notes,
    };
    addWorkout(date, workout);
    setExercise('');
    setSets(0);
    setReps(0);
    setNotes('');
  };

  const formStyle = {
    marginBottom:'100px',
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
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
      <label>
        notes:
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default WorkoutForm;
