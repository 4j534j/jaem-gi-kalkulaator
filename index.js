const readline = require('readline');

// Create interface for reading from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let hind;
let kogus;
//hind
rl.question('Palun sisesta toote hind: ', (input) => {
    hind = input;
  console.log('Sisestatud hind:', input);
  //kogus
  rl.question('Palun sisesta toote kogus: ', (input) => {
    kogus = input;
    console.log('Sisestatud kogus:', input);    
    rl.close();
    // inputi lopp
    console.log("---------------")
    // hind maksudeta
    ilmaMaksuta = hind * kogus
    console.log("Hind maksudeta: ", ilmaMaksuta)
  });
});
