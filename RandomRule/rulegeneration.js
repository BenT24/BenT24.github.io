// import * as fs from 'fs';
// const {readFileSync, promises: fsPromises} = require('fs');
// function syncReadFile(filename) {
//     const contents = fs.readFileSync(filename, 'utf-8');
//     const arr = contents.split(/\r?\n/);
//     console.log(arr);
//     return arr;
//   }
  
//   syncReadFile('./nounlist.txt');

const nouns = ["post", "scandal", "increase", "descent", "grain"];
const verbs = ["crush", "own", "chat", "experience", "sue"];
const prepositions =["in", "on", "beside", "under", "above"]

let noun1 = nouns[Math.floor(Math.random()*nouns.length)];
let noun2 = nouns[Math.floor(Math.random()*nouns.length)];
let verb1 = verbs[Math.floor(Math.random()*verbs.length)];
let preposition1 = prepositions[Math.floor(Math.random()*prepositions.length)];

let ret = "Always" + verb1 + "the" + noun1 + preposition1 + "a" + noun2;

document.getElementById("rule").innerHTML = ret;
