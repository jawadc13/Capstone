import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCriketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

//declare an array for coaches .. inirially empty
let theCoaches: Coach[] = [];

theCoaches.push(myCriketCoach);
theCoaches.push(myGolfCoach);

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
