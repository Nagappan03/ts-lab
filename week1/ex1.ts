// 1. Prediction: I think TypeScript will infer the type as number
let age = 31;

// 2. Prediction: I think TypeScript will infer the type as string
const username = "Nags";

// 3. Prediction: I think TypeScript will infer the type as an array of numbers (number[])
const scores = [85, 90, 95];

// 4. Prediction: I think TypeScript will infer the type as an object with name (string) and age (number) properties
const user = {
  name: "Nags",
  age: 31,
};

// 5. Prediction: I think TypeScript will infer the return type as number
function calculateTotal(price: number, quantity: number) {
  return price * quantity;
}

function parseAge(input: string): number | null {
  const age = Number(input);

  if (!Number.isInteger(age) || age <= 0) {
    return null;
  }

  return age;
}

// parseAge("42").toFixed(1);

const myAge = parseAge("42");

if (myAge !== null) {
  console.log(myAge.toFixed(1)); // "42.0"
}