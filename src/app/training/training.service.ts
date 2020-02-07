import { Training } from "./training.model";
import { Subject } from 'rxjs/Subject';

export class TrainingService {

    trainingChanged = new Subject<Training>();

    private availableTrainings: Training[] = [
        { id: 'peter', name: 'Peter', duration: 8, calories: 16 },
        { id: 'david', name: 'David', duration: 7, calories: 14 },
        { id: 'fulton', name: 'Fulton', duration: 9, calories: 18 },
        { id: 'henry', name: 'Henry', duration: 5, calories: 12 }
    ];

    private runningTraining: Training;
    trainings: Training[] = [];

    getAvailableTrainings() {
        return this.availableTrainings.slice();
    }

    startTraining(trainingId: string) {
        this.runningTraining = this.availableTrainings.find(tr => tr.id === trainingId);
        this.trainingChanged.next(this.runningTraining);
    }

    completeTraining() {
        this.trainings.push({ 
            ...this.runningTraining, 
            date: new Date(), 
            state: 'completed'
        });
        this.runningTraining = null;
        this.trainingChanged.next(this.runningTraining);
    }

    cancelTraining(progress: number) {
        this.trainings.push({ 
            ...this.runningTraining, 
            duration: this.runningTraining.duration * (progress / 100), 
            calories: this.runningTraining.calories * (progress / 100), 
            date: new Date(), 
            state: 'cancelled'
        });
        this.runningTraining = null;
        this.trainingChanged.next(this.runningTraining);
    }

    getRunningTraining() {
        return { ...this.runningTraining };
    }
}