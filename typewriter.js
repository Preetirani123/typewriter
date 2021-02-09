const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
   }, delay)
   delay += 50;
}

// for (let i = 0; i <= sentence.length; i++) {
  
//   if (i < sentence.length) {
//     setTimeout(() => {
//       process.stdout.write(sentence[i]);
//      }, delay)
//      delay += 50;
//   }

//   else if (i === sentence.length) {
//     console.log('\n');
//   }
  
// }







