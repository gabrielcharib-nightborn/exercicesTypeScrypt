import React, { useState } from "react";

interface ExerciseData {
  periodLength: number;
  trainingDays: number;
  target: number;
  average: number;
  targetMet: boolean;
  rating: number;
  ratingText: string;
}
/////////////////////////////////////////////////////////////////////////////////////////////
///fonction qui calcule le temps moyen des exercies au quationdien et ça renvoi un object
////////////////////////////////////////////////////////////////////////////////////////////
const calculateExercises = (
  dailyHours: Array<number>,
  targetHours: number
): ExerciseData => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter((day) => day > 0).length;
  const average = dailyHours.reduce((acc, curr) => acc + curr) / periodLength;
  const targetMet = average >= targetHours;
  let rating: number;
  if (average / targetHours >= 1) {
    rating = 3;
  } else if (average / targetHours >= 0.5) {
    rating = 2;
  } else {
    rating = 1;
  }
  let ratingText: string;
  switch (rating) {
    case 3:
      ratingText = "Excellent job! You have exceeded your daily target hours.";
      break;
    case 2:
      ratingText =
        "Not too bad, but you can still improve by reaching your daily target hours.";
      break;
    case 1:
      ratingText = "You need to work harder to reach your daily target hours.";
      break;
    default:
      ratingText = "";
  }
  return {
    periodLength,
    trainingDays,
    target: targetHours,
    average,
    targetMet,
    rating,
    ratingText,
  };
};

const App: React.FC = () => {
  const [dailyHours, setDailyHours] = useState<Array<number>>([]);
  const [targetHours, setTargetHours] = useState<number>(0);
  const [results, setResults] = useState<ExerciseData | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResults(calculateExercises(dailyHours, targetHours));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='dailyHours'>Enter daily hours:</label>
          <input
            id='dailyHours'
            type='text'
            value={dailyHours.join(",")}
            onChange={(event) =>
              setDailyHours(event.target.value.split(",").map(Number))
            }
          />
        </div>
        <div>
          <label htmlFor='targetHours'>Enter target hours:</label>
          <input
            id='targetHours'
            type='number'
            value={targetHours}
            onChange={(event) => setTargetHours(Number(event.target.value))}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {results && (
        <div>
          <p>Period Length: {results.periodLength}</p>
          <p>Training Days: {results.trainingDays}</p>
          <p>Target: {results.target}</p>
          <p>Average: {results.average}</p>
          <p>Target Met: {results.targetMet ? "Yes" : "No"}</p>
          <p>Rating: {results.rating}</p>
          <p>Rating Text: {results.ratingText}</p>
        </div>
      )}
    </div>
  );
};

export default App;
