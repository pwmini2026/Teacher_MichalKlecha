import './App.css'
import type {ReactElement} from "react";
import {numbers, students, teachers} from "./lab1Data.ts";
import {ex71, ex72, ex73, sumOfArray} from "./utils.ts";

const App = (): ReactElement => {

  const ex4 = (): string[] => students.filter(x => x.startsWith("M"))
  const ex5 = (): number[] => numbers.map(Math.sqrt)

  return (
      <>
        <div>
          <h3>Ex 4</h3>
          <p>{ex4().join(", ")}</p>
        </div>
        <div>
          <h3>Ex 5</h3>
          <p>{ex5().join(", ")}</p>
        </div>
        <div>
          <h3>Ex 6</h3>
          <p>{sumOfArray(numbers)}</p>
        </div>
        <div>
          <h3>Ex 7</h3>
          <p>Sum of teachers ages {ex71(teachers)}</p>
          <p>Sum of active teachers ages {ex72(teachers)}</p>
          <p>List of students: {ex73(teachers).join(", ")}</p>
        </div>
      </>
  )
}

export default App
