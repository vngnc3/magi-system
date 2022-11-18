const fs = require('node:fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const filesString = '' + commandFiles;
const rep1 = filesString.replaceAll('.js,', '   ');
const rep = rep1.replaceAll('.js', '  ');
console.log(rep);

fs.writeFile("./contents/commandsList.js", `const CommandsList = "${rep}"\nmodule.exports = CommandsList;`, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 