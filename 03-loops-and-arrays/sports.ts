let sportsOne: string[] = ["Golf", 'Criket', 'Tennis', 'Swimming'];
/*
for(let i=0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
*/
//let's use the simplified for loop

for(let tempSport of sportsOne) {
    if (tempSport == 'Tennis'){
        console.log(tempSport + " << My Favorite!");
    }else {console.log(tempSport);}
    
}