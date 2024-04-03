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
    hind = parseFloat(input);
    console.log('Sisestatud hind:', input);

    //kogus
    rl.question('Palun sisesta toote kogus: ', (input) => {
        kogus = parseFloat(input);
        console.log('Sisestatud kogus:', input);    
        rl.close();
        // inputi lopp
        
        console.log("---------------")
        
        // hind maksudeta
        const ilmaMaksuta = hind * kogus
        console.log("Hind maksudeta: ", ilmaMaksuta)
        
        // hind Eesti maksudega
        const hindMaksudega = ilmaMaksuta * 1.22
        console.log("Kogu hind Eesti maksudega: ", hindMaksudega)

        console.log("---------------")

        const koguHind = soodustus(hindMaksudega)
        if (koguHind !== hindMaksudega) {
            console.log("Kogu hind soodustusega: ", koguHind)
        }
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
