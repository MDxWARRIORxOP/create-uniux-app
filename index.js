#!/usr/bin/env node
const { execSync } = require("child_process");

console.log("Create Uniux App V1.0.1");

function runCommand(name){
    execSync(name, (error, stdout, stderr) => {
        if (error || stderr) return true
        return false
    })
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Whats the name of your app?> ', name => {
    readline.question("Typescript? (Y/N)> ", (ts) => {
        const tsl = ts.toLowerCase();
        if(tsl == "y" || tsl == "yes") {
            console.info("Cloning Repo...")
            const err = runCommand(`git clone -b typescript https://github.com/MDxWARRIORxOP/exampleUniUXApp.git ${name}`)
            if(err){
                console.log("There was an error. Please try again later.")
            } else {
                console.log("Create UniUX App Complete!")
                console.log("Check out README.md for next steps with this app.")
            }
        }else if (tsl == "n" || tsl == "no") {
            const err = runCommand(`git clone https://github.com/MDxWARRIORxOP/exampleUniUXApp.git ${name}`)
            if(err){
                console.log("There was an error. Please try again later.")
            } else {
                console.log("Create UniUX App Complete!")
                console.log("Check out README.md for next steps with this app.")
            }

        }else{
            console.error("Invalid Answer")
        }
        readline.close()
    })
});
