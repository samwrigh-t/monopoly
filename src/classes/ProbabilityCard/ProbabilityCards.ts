
export class ProbabilityCards {
    description: string;
    function: Function | undefined;

    constructor(data: Array<string>) {
        // [Descriptor, Function]
        this.description = data[0];
        this.function = new Function(data[1])
    }
}


export default ProbabilityCards;
