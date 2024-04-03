const readline = require('readline');

// Create interface for reading from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let hind;
let kogus;
// riigid map
const riigid = {};
riigid["Eesti"] = "1.22";
riigid["Iisrael"] = "1.17";
riigid["Saksamaa"] = "1.19";
riigid["Leedu"] = "1.21";
riigid["Prantsusmaa"] = "1.2";


let riik;
//hind
rl.question('Palun sisesta toote hind: ', (input) => {
    hind = input;
  console.log('Sisestatud hind:', input);
  //kogus
  rl.question('Palun sisesta toote kogus: ', (input) => {
    kogus = input;
    console.log('Sisestatud kogus:', input);    
    // riik
    console.log("-----")
    console.log("Valikud: Eesti, Iisrael, Saksamaa, Leedu, Prantsusmaa")
    rl.question('Palun sisesta riik: ', (input) => {
      riik = input;
      console.log('Sisestatud riik:', input);
      
      
      rl.close();
      // inputi lopp
      console.log("---------------")
      // hind maksudeta
      ilmaMaksuta = hind * kogus
      console.log("Hind maksudeta: ", ilmaMaksuta)
      console.log("Hind maksudega", riigid[riik] * ilmaMaksuta)
    });
  });
});
