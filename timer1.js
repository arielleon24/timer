//if no number is provided program ends without beeping
//if the input is negative ignore skip that number and move to the next one
//If input is NAN skip 

const nodeArg = process.argv.slice(2)
for(let duration of nodeArg ) {
  if (nodeArg !== NaN || nodeArg > 0) {
  setTimeout(() => {  
    process.stdout.write('.');
  }, duration * 1000);;
}
  
}

