#!/Users/vabbasmoha/.nvm/versions/node/v6.5.0/bin/node
/**
 * Recursive prompt example
 * Allows user to choose when to exit prompt
 */

'use strict';
var inquirer = require('inquirer');
var git = require('./git/git.js');

var output = [];

var questions = [
  {
    type: 'list',
    name: 'projectType',
    message:'     _\n'+
'      (-) \n'+
'    _(   )_ \n'+
'    (_`/._)\n'+
    'PVR MAD SPARKS!! welcome thee...\n What type of project is it?',
    choices:['Frontend','Services']
  },
  {
    type: 'list',
    name: 'frontendTechType',
    message: 'Which technology you want to develop your frontend in?',
    choices: ['React', 'Angular'],
    when: function (answers) {
      return answers.projectType=='Frontend';
    }
  },
  {
    type: 'list',
    name: 'backendTechType',
    message: 'Which technology you want to develop your services in?',
    choices: ['Java', 'Ruby'],
    when: function (answers) {
      return answers.projectType=='Services';
    }
  }
];

function ask() {
  inquirer.prompt(questions).then(function (answers) {
    console.log('Generating Node Angular Scaffolding Project')
    console.log(git, git.git);
    git.clone("git@bitbucket.org:prosto-vsapkrmkad/ng-node.git");
  });
}

ask();
