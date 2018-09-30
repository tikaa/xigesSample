module.exports = {
    askQuestions
};

/**
 * Ask questions required to build the default template
 *
 * @param {object} generator - generator instance to use
 */
function askQuestions(generator) {
    const promptCase2 = [{
        type: 'confirm',
        name: 'doYouWantWebapp',
        message: 'Do you want to copy the web app javascript files too?',
        default: true
    }];

    const done = generator.async();

    generator.prompt(promptCase2)
        .then((props) => {
            generator.wantWebApp = props.doYouWantWebapp;
            // To access props later use this.someOption;
            done();
        });
}
