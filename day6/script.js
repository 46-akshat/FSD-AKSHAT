arr=[1,2,3,4,5]
const sum=arr.filter((x) => x%2==0).reduce((x,y) => x+y,0);
console.log(sum);
const students=[
    { 
        name:'Alice',score:50},
    { name:'Bob',score:60},
    {
        name:'Charlie',score:70
    },
    { name:'David',score:45},
    { name:'Joe',score:75},
];
let newar=students.filter((student)=>student.score>60).map((student)=>student.score*2).reduce((x,y)=> x+y,0);
console.log(newar);

