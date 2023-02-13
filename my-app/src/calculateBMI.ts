import React from "react";

function calculateBMI(weight: number, height: number): number {
  const bmi = weight / (height * height);
  return bmi;


}

export default calculateBMI;
