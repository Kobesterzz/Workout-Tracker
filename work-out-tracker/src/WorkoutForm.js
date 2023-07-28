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
    display:'flex',
    justifyContent:'center',
    flexDirection: 'column',
    
  }

  const label = {
    display:'flex',
    flexDirection: 'column',
    marginBottom:'20px',
    fontFamily:'SF pro',
  }

  const input = {
    color:'white',
    background:'transparent',
    borderColor:'white',
  }

  const button = {
    color:'white',
    background:'grey',
    borderColor:'white',
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Add Workout</h2>
      <label style={label}>
        Date:
        <input
          style={input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label style={label}>
        Exercise:
        <input
          style={input}
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </label>
      <label style={label}>
        Sets:
        <input
          style={input}
          type="number"
          value={sets}
          onChange={(e) => setSets(parseInt(e.target.value))}
        />
      </label>
      <label style={label}>
        Reps:
        <input
          style={input}
          type="number"
          value={reps}
          onChange={(e) => setReps(parseInt(e.target.value))}
        />
      </label>
      <label style={label}>
        notes:
        <input
          style={input}
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <button style={button} type="submit">Add</button>
    </form>
  );
};

export default WorkoutForm;
