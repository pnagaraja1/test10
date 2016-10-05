#! /usr/bin/env node
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
    type: 'input',
    name: 'gitreponame',
    message: 'Enter your repo name?',
    when: function (answers) {
      console.log(answers)
      return answers.frontendTechType=='Angular';

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
    console.log('Generating Node Angular Scaffolding Project');
    console.log(answers);
    //git.clone("git@bitbucket.org:prosto-vsapkrmkad/0ng-node.git");


    var github = require('octonode');
    var simplegit = require('simple-git')();
    var client = github.client({
      username: 'musa4u',
      password: 'Musa@1987'
    });

    client.get('/user', {}, function (err, status, body, headers) {
      console.log(body); //json object

// Then we instantiate a client with or without a token (as show in a later section)

      var ghme = client.me();

      ghme.repo({
        "name": answers.gitreponame,
        "description": "This is your first repo",
      }, function (err,b,h) {


        console.log("repo is created");
        console.log(err);
        console.log(b);

        // starting a new repo
        simplegit
            .init()
            .add('./*')
            .commit("first commit!")
            .addRemote('origin', 'git@github.com:musa4u/'+answers.gitreponame+'.git')
            .push('origin', 'master');

        console.log("Done Done;;;;;;;")

      }); //repo

    });


    console.log('Adding Node Angular Project into Repository');
  });
}

ask();
