import React, { useState } from "react";


////////////////////////////////////////////////////////////////
////methode que calcule le 
/////////////////////////////////////////////////////////////////
const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / (height / 100) ** 2;

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

const App: React.FC = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBmi(calculateBmi(height, weight));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='height'>Height (cm):</label>
          <input
            type='number'
            id='height'
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor='weight'>Weight (kg):</label>
          <input
            type='number'
            id='weight'
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
          />
        </div>
        <button type='submit'>Calculate BMI</button>
      </form>
      {bmi ? (
        <div>
          <p>Your BMI is {bmi}.</p>
        </div>
      ) : null}
    </div>
  );
};

export default App;
