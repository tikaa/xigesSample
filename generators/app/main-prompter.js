const constants = require('./constants');
const defaultNg2TemplatePrompter = require('./about-us/about-us-ng2-template-prompter');
const questionFirstPrompter = require('./about-us/about-us-ng2-template-prompterOne');
const questionOtherPrompter = require('./about-us/about-us-ng2-template-prompterTwo');
const questionNextPrompter = require('./about-us/about-us-ng2-template-prompterThree');
const questionLastPrompter = require('./about-us/about-us-ng2-template-prompterFour');

module.exports = {
    promptToChooseATemplate,
    promptTemplateSpecificQuestions,
    askQUestionOne,
    askQuestionTwo,
    askQuestionThree,
    askQuestionFour
};

function promptToChooseATemplate() {
    const done = this.async();

    this.prompt({
        type: 'list',
        name: 'templateType',
        message: 'Which *type* of page would you like to generate? (More templates will be added soon! Stay tuned...)',
        choices: [
            {
                name: 'About Us',
                value: constants.TEMPLATE_TYPE.DEFAULT
            },
            {
                name: 'FAQ',
                value: constants.TEMPLATE_TYPE.FAQ
            },
            {
                name: 'Contact Us',
                value: constants.TEMPLATE_TYPE.CONTACT_US
            }
        ]
    }).then((prompt) => {
        this.templateType = prompt.templateType;
        // To access props later use this.someOption;
        done();
    });
}

function askDefaultTemplateQuestions(generator) {
    if (generator.jhipsterAppConfig.clientFramework === 'angularX') {
        defaultNg2TemplatePrompter.askQuestions(generator);
    }
}
function askQUestionOne() {
    questionFirstPrompter.askQuestions(this);
}
function askQuestionTwo() {
    questionOtherPrompter.askQuestions(this);
}
function askQuestionThree() {
    questionNextPrompter.askQuestions(this);
}
function askQuestionFour() {
    questionLastPrompter.askQuestions(this);
}
function promptTemplateSpecificQuestions() {
    switch (this.templateType) {
    case constants.TEMPLATE_TYPE.DEFAULT:
        askDefaultTemplateQuestions(this);
        break;
    default:
        break;
    }
}
