
module.exports = {
    askQuestions
};

/**
 * Ask questions required to build the default template
 *
 * @param {object} generator - generator instance to use
 */
function askQuestions(generator) {
    const promptCase4 = [{
        type: 'input',
        name: 'userVarName',
        message: 'Give a variable name for the variable in the class:',
        default: true
    }];

    const done = generator.async();

    generator.prompt(promptCase4)
        .then((props) => {
            generator.userVarName = props.userVarName;
            // To access props later use this.someOption;
            done();
        });
}
