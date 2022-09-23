#!/usr/bin/env node
const { execSync } = require("child_process");
const { join } = require("path")
const { existsSync } = require("fs")
const ifTS = "Which will be uisng TypeScript."
const TSCommand = "-b typescript"
const ifJS = "Which will be using JavaScript."
let useTS;
let projectName;

console.log("Create Uniux App V1.0.6");

const runCommand = (cmd) => {
    execSync(cmd, (error, stdout, stderr) => {
        if (error || stderr) return true
        return false
    })
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const dewIt = () => {
    console.log("[INFO] Cloning Github Repository...")
    try {
        const err = runCommand(`git clone --depth 1 ${useTS ? TSCommand : ""} https://github.com/MDxWARRIORxOP/exampleUniUXApp ${projectName}`)
    } catch(e){
        console.error("[ERROR] There was an error cloning the Github Repository.")
        process.exit(-1)
    }

    console.log(`[SUCCESS] We've created an app at "${join(__dirname, projectName)}".`)
    console.log("\nNext steps:")
    console.log(`    cd "${join(__dirname, projectName)}"`)
    console.log(`    yarn install`)
    console.log(`    yarn develop`)
    console.log("\nHappy Deving!")
    process.exit(0)
}

readline.question('Whats the name of your app?> ', name => {
    projectName = name.replace(/\s/g, '_')
    //if(existsSync(join(__dirname, projectName))){
    //    console.log(`[ERROR] Path "${join(__dirname, projectName)}" already exists.`)
    //    process.exit(-1)
    //}

    readline.question("TypeScript?> (Y/N) ", ts => {
        const tsl = ts.toLowerCase()
        if(tsl == "yes" || tsl == "y"){
            useTS = true
        }else if(tsl == "no" || tsl == "n"){
            useTS = false
        }else{
            console.error("Invalid Input.")
            process.exit(-1)
        }
        console.log("So heres what we'll be doing:")
        console.log(`Creating an app with the name: ${projectName}`)
        console.log(useTS ? ifTS : ifJS)
        readline.question("continue?> ", con => {
            const conl = con.toLowerCase()
            if(conl == "yes" || conl == "y"){
                readline.close()
                dewIt()
            }else if(conl == "no" || conl == "n"){
                readline.close()
                process.exit(0)
            }else{
                console.log("Invalid Input.")
                process.exit(-1)
            }
        })
    })
});
