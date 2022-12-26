import { ProbabilityFunctionType } from "./ProbabilityFunctionType";

export class ProbabilityFunction {
  types: ProbabilityFunctionType[];
  values: string[];

  constructor(data: string) {
    this.values = [];
    this.types = [];
    this.resolveTypes(data);
  }

  private resolveTypes = (data: string) => {
    const array: Array<string> = data.split(" ");

    array.map((item: string, i: number) => {
      switch (item) {
        case "COLLECT":
          this.types.push(ProbabilityFunctionType.COLLECT);
          break;

        case "GOTO":
          this.types.push(ProbabilityFunctionType.GOTO);
          break;

        case "PAY":
          this.types.push(ProbabilityFunctionType.PAY);
          break;

        case "GIVE":
          this.types.push(ProbabilityFunctionType.GIVE);
          break;

        case "PAY_FOR_HOTELS":
          this.types.push(ProbabilityFunctionType.PAY_FOR_HOTELS);
          break;

        case "PAY_FOR_HOUSES":
          this.types.push(ProbabilityFunctionType.PAY_FOR_HOUSES);
          break;

        case "POTENTIALLY_GET":
          this.types.push(ProbabilityFunctionType.POTENTIALLY_GET);
          break;

        case "EITHER":
          this.types.push(ProbabilityFunctionType.EITHER);
          break;

        case "COLLECT_FROM_EACH_PLAYER":
          this.types.push(ProbabilityFunctionType.COLLECT_FROM_EACH_PLAYER);
          break;

        case "DONT_COLLECT":
          this.types.push(ProbabilityFunctionType.DONT_COLLECT);
          break;

        default:
          this.values.push(item);
      }
    });
  };
}
