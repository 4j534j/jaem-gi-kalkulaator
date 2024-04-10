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
riigid["Soome"] = "1,31";
riigid["Rootsi"]  = "1.52";


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
    console.log("Valikud: Eesti, Iisrael, Saksamaa, Leedu, Prantsusmaa, Soome, Rootsi")
    rl.question('Palun sisesta riik: ', (input) => {
      riik = input;
      console.log('Sisestatud riik:', input);
      
      
      rl.close();
      // inputi lopp
      console.log("---------------")
      // hind maksudeta
      const ilmaMaksuta = kogus * hind
        const hindMaksudega = ilmaMaksuta * riigid[riik]
        console.log("Kogu hind  maksudega: ", hindMaksudega)

        console.log("---------------")

        const koguHind = soodustus(hindMaksudega)
        if (koguHind !== hindMaksudega) {
            console.log("Kogu hind soodustusega: ", koguHind)
          }
        });
    });
});
function soodustus(hindMaksudega) {
    let koguHind;

    if (hindMaksudega > 10000) {
        koguHind = hindMaksudega * 0.93;
    } else if (hindMaksudega > 5000) {
        koguHind = hindMaksudega * 0.95;
    } else if (hindMaksudega > 2000) {
        koguHind = hindMaksudega * 0.97;
    } else if (hindMaksudega > 1000) {
        koguHind = hindMaksudega * 0.98;
    } else {
        koguHind = hindMaksudega // soodustuseta
    }

    return koguHind;
}