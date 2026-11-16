import type {Teacher} from "./lab1Data.ts";

export const sumOfArray = (numbers: number[]): number => numbers.reduce((a, b) => a + b, 0)

export const ex71 = (teachers: Teacher[]) => sumOfArray(teachers.map(t => t.teacherAge))
export const ex72 = (teachers: Teacher[]) => sumOfArray(teachers.filter(t=>t.active).map(t => t.teacherAge))
export const ex73 = (teachers: Teacher[]) => teachers.flatMap(t => t.students).map(s => s.name).sort()