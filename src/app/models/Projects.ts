export class Project {
    constructor(
        public id: number,
        public name: Text,
        public priority: number,
        public description: Text,
        public deliverydate: Date
    ){}
}