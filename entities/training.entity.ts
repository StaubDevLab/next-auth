export class TrainingEntity {
    id: string | undefined;
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;

    constructor(training: TrainingEntity) {
        Object.assign(this, training);

    }
}