module.exports = {
    askQuestions
};

/**
 * Ask questions required to build the default template
 *
 * @param {object} generator - generator instance to use
 */
function askQuestions(generator) {
    const promptCase1 = [{
        type: 'input',
        name: 'decriptInput',
        message: 'Give a description for your project:',
        default: 'description_sample'
    }];
    const done = generator.async();

    generator.prompt(promptCase1)
        .then((props) => {
            generator.decriptionInput = props.decriptInput;
            // To access props later use this.someOption;
            done();
        });
}
