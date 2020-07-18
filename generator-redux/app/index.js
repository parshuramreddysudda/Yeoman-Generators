const Generator = require('yeoman-generator');
var lowerCase = require('lower-case')
var upperCase = require('upper-case')
var captilizeFirstLetter = require('capitalize-first-letter')
module.exports = class extends Generator {
    constructor(args, options) {
        super(args, options);
    }

    // first stage
    async prompting() {
        this.log('Generator starting... 🤖');
        this.log('Lets Create a react-redux App today ... 🤖');

        this.answers = await this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Input the name for this Project: ',
                validate: input => Boolean(input.length),
            },
            {
                type: 'list',
                name: 'app',
                message: 'Do yo want to create App files with Default App Name? : ',
                choices: ['Yes', 'No'],
            },
            {
                type: 'list',
                name: 'test',
                message: 'Do yo want to add Test files to Project? : ',
                choices: ['Yes', 'No'],
            },
            {
                type: 'input',
                name: 'component',
                message: 'Add any Component name, We will setup the Store and container for it : ',
                validate: input => Boolean(input.length),
            },
            {
                type: 'list',
                name: 'crud',
                message: 'Do you want to add CRUD methods in your for your Component? : ',
                choices: ['Yes', 'No'],
            },
        ]);
    }
    writing() {
        this.log('Writing files... 📝');

        const { name, app, test, component, crud } = this.answers;
        let componentName = captilizeFirstLetter(component)
        let appName = 'App';
        this.log('Writing files in Public/... 📝');
        this.fs.copyTpl(
            this.templatePath('_public'),
            this.destinationPath(`public`),
            {
                name: name,
            },
        );
        this.fs.copyTpl(
            this.templatePath('_.gitignore'),
            this.destinationPath(`.gitignore`),
        );
        // Wrriting Src File
        this.log('Writing files in src/... 📝');

        this.fs.copyTpl(
            this.templatePath('_src/_index.css'),
            this.destinationPath(`src/index.css`),
        );
        this.fs.copyTpl(
            this.templatePath('_src/logo.svg'),
            this.destinationPath(`src/logo.svg`),
        );
        if (app === 'No') {
            appName = name;
            appName = captilizeFirstLetter(appName);
        }
        this.fs.copyTpl(
            this.templatePath('_src/_index.js'),
            this.destinationPath(`src/index.js`),
            {
                appName,
            },
        );
        this.fs.copyTpl(
            this.templatePath('_src/_App.js'),
            this.destinationPath(`src/${appName}.js`),
            {
                appName,
            },
        );
        this.fs.copyTpl(
            this.templatePath('_src/_App.css'),
            this.destinationPath(`src/${appName}.css`),
            {
                appName,
            },
        );
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath(`package.json`),
            {
                appName: lowerCase.lowerCase(appName)
            },
        );

        //Writing Redux files 

        this.fs.copyTpl(
            this.templatePath('_src/_Component/apps.scss'),
            this.destinationPath(`src/${componentName}/${componentName}.scss`),
        );
        this.fs.copyTpl(
            this.templatePath('_src/logo.svg'),
            this.destinationPath(`src/logo.svg`),
        );
        this.fs.copyTpl(
            this.templatePath('_src/_reducers.js'),
            this.destinationPath(`src/reducers.js`),
            {
                componentCapital: componentName,
                componentLower: lowerCase.lowerCase(component)
            }
        );
        this.fs.copyTpl(
            this.templatePath('_src/_Component/Apps.js'),
            this.destinationPath(`src/${componentName}/${componentName}.js`),
            {
                componentUpper: componentName,
                componentLower: lowerCase.lowerCase(component)
            },
        );
        this.fs.copyTpl(
            this.templatePath('_src/_Component/AppsContainer.js'),
            this.destinationPath(`src/${componentName}/${componentName}Container.js`),
            {
                componentUpper: componentName,
                componentLower: lowerCase.lowerCase(component)
            },
        );
        //Writing Redux Services
        // Add Crud Services only when user want it to be 
        if (crud === 'Yes') {
            this.fs.copyTpl(
                this.templatePath('_src/_Component/Services_Added/apps.action.js'),
                this.destinationPath(`src/${componentName}/Services/${lowerCase.lowerCase(component)}.action.js`),
                {
                    componentCapital: componentName,
                    componentUpper: upperCase.upperCase(componentName),
                    componentLower: lowerCase.lowerCase(component)
                },
            );
            this.fs.copyTpl(
                this.templatePath('_src/_Component/Services_Added/apps.reducer.js'),
                this.destinationPath(`src/${componentName}/Services/${lowerCase.lowerCase(component)}.reducer.js`),
                {
                    componentCapital: componentName,
                    componentUpper: upperCase.upperCase(componentName),
                    componentLower: lowerCase.lowerCase(component)
                },
            );
        }
        else {
            this.fs.copyTpl(
                this.templatePath('_src/_Component/Services_NoAddons/apps.action.js'),
                this.destinationPath(`src/${componentName}/Services/${lowerCase.lowerCase(component)}.action.js`),
            );
            this.fs.copyTpl(
                this.templatePath('_src/_Component/Services_NoAddons/apps.reducer.js'),
                this.destinationPath(`src/${componentName}/Services/${lowerCase.lowerCase(component)}.reducer.js`),
                {
                    componentLower: lowerCase.lowerCase(component)
                },
            );

        }

        // Writing Test files 
        if (test === 'Yes') {

            this.fs.copyTpl(
                this.templatePath('_testpack.json'),
                this.destinationPath(`package.json`),
                {
                    appName: lowerCase.lowerCase(appName)
                },
            );

            this.fs.copyTpl(
                this.templatePath('_test/_App.test.js'),
                this.destinationPath(`src/${appName}.test.js`),
                {
                    appName,
                },
            );
            this.fs.copyTpl(
                this.templatePath('_test/_setupTests.js'),
                this.destinationPath(`src/_setupTests.js`),
            );
            this.fs.copyTpl(
                this.templatePath('_src/_Component/Apps.spec.js'),
                this.destinationPath(`src/${componentName}/${componentName}.spec.js`),
                {
                    componentUpper: componentName,
                    componentLower: lowerCase.lowerCase(component)
                },
            );
            this.fs.copyTpl(
                this.templatePath('_src/_Component/Services_NoAddons/apps.action.spec.js'),
                this.destinationPath(`src/${componentName}/Services/${lowerCase.lowerCase(component)}.action.spec.js`),
                {
                    componentCapital: componentName,
                    componentUpper: upperCase.upperCase(componentName),
                    componentLower: lowerCase.lowerCase(component)
                },
            );
            this.fs.copyTpl(
                this.templatePath('_src/_Component/Services_NoAddons/apps.reducer.spec.js'),
                this.destinationPath(`src/${componentName}/Services/${lowerCase.lowerCase(component)}.reducer.spec.js`),
                {
                    componentCapital: componentName,
                    componentUpper: upperCase.upperCase(componentName),
                    componentLower: lowerCase.lowerCase(component)
                },
            );
        }
    }

    // last stage
    end() {
        this.log('Bye... 👋');
    }
};