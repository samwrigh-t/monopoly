import ProbabilityCards from "./classes/ProbabilityCard/ProbabilityCards"
import { ProbabilityFunction } from "./classes/ProbabilityCard/ProbabilityFunction"

const rawChanceCards = require("./resources/ChanceCards.json")

const arrayChanceCards = Object.entries(rawChanceCards)

const x = new ProbabilityFunction(arrayChanceCards[0][1] as string)

console.log(x);
