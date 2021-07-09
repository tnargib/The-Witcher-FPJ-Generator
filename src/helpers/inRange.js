import { curry } from "ramda";

export const inRange = curry((min, max, val) => val >= min && val <= max);
