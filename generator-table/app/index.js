const Generator = require('yeoman-generator');
var lowerCase = require('lower-case')
module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options);
    }

    // first stage
    async prompting() {
        this.log('Generator starting... 🤖');
        this.log('Lets Create a Table Component today ... 🤖');

        this.answers = await this.prompt([
            {
                type: 'input',
                name: 'table',
                message: 'Enter Table name',
                validate: input => Boolean(input.length),
            },
            {
                type: 'list',
                name: 'isTable',
                message: 'Do yo want to add Table?',
                choices: ['Yes', 'No'],
            },
        ]);
        if (this.answers.isTable === 'Yes') {
            this.tableanswers = await this.prompt([
                {
                    type: 'list',
                    name: 'redux',
                    message: 'Do yo want to create Redux Table or  Non-Redux-Table?',
                    choices: ['Redux-table', 'Non-Redux-Table'],
                },
            ]);
        }
        this.answers2 = await this.prompt([
            {
                type: 'list',
                name: 'snakbar',
                message: 'Want to add Snackbar',
                choices: ['Yes', 'No'],
            },
        ]);

    }


    // second stage
    writing() {
        this.log('Writing files... 📝');

        const { table, isTable } = this.answers;
        const { snakbar } = this.answers2;

        if (isTable === 'Yes') {
            this.log('Table Created📝');
            if (this.tableanswers.redux)
            {
                if (this.tableanswers.redux==='Redux-table') 
                this.log('Table with Redux 📝');
                else
                    this.log('Table without Redux 📝');
            }
               
        }
        else
            this.log('Table NotCreated📝');

        if (snakbar === 'Yes')
            this.log('Snakbar initialized📝');
        else
            this.log('Snakbar Not initialized 📝');

    }

    // last stage
    end() {
        this.log('Bye... 👋');
    }
};