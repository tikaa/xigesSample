module.exports = {
    askQuestions
};

/**
 * Ask questions required to build the default template
 *
 * @param {object} generator - generator instance to use
 */
function askQuestions(generator) {
    const promptCase3 = [{
        type: 'input',
        name: 'className',
        message: 'Give a class name to the java class:',
        default: true
    }];

    const done = generator.async();

    generator.prompt(promptCase3)
        .then((props) => {
            generator.userInputClassName = props.className;
            // To access props later use this.someOption;
            done();
        });
}
