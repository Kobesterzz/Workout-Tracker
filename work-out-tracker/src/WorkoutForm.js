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
    marginBottom: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the form horizontally
    color: '#1F1D36', // Primary color
  };

  const Title = {
    marginTop: '40px',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0', // Add some margin at the top and bottom of the title
  };

  const label = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    fontFamily: 'SF pro',
    textAlign: 'center', // Center the label text
  };

  const input = {
    color: '#1F1D36', // Primary color
    background: '#E9A6A6', // Accent color
    borderColor: '#864879', // Secondary color
    textAlign: 'center', // Center the input text
    width: '500px', // Set a fixed width for the input box
    margin: '0 auto', // Center the input horizontally
  };

  const button = {
    color: 'white',
    background: '#3F3351', // Primary color
    borderColor: 'white',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={Title}>Add Workout</h2>
      <label style={label}>
        <div>Date:</div>
        <input
          style={input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label style={label}>
        <div>Exercise:</div>
        <input
          style={input}
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </label>
      <label style={label}>
        <div>Sets:</div>
        <input
          style={input}
          type="number"
          value={sets}
          onChange={(e) => setSets(parseInt(e.target.value))}
        />
      </label>
      <label style={label}>
        <div>Reps:</div>
        <input
          style={input}
          type="number"
          value={reps}
          onChange={(e) => setReps(parseInt(e.target.value))}
        />
      </label>
      <label style={label}>
        <div>Notes:</div>
        <input
          style={input}
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <button style={button} type="submit">
        Add
      </button>
    </form>
  );
};

export default WorkoutForm;

