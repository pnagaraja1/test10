/**
 * Recursive prompt example
 * Allows user to choose when to exit prompt
 */

'use strict';
var inquirer = require('inquirer');
var output = [];

var questions = [
  {
    type: 'list',
    name: 'projectType',
    message:'     _\n'+
'      (-) \n'+
'    _(   )_ \n'+
'    (_`/._)\n'+
    'Guru welcome thee...\n What type of project is it?',
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
    console.log('bye');
  });
}

ask();

var fs = require("fs");

var terraform = 'variable "azure_settings_file" {\n'+
    '\t default = "./common/settings/dev"\n'+
    '}\n'+
    '\n'+
    'provider "azure" {\n'+
    ' \t   publish_settings = "${file(var.azure_settings_file)}"\n'+
    '}\n'+

    'module ${appname} {\n'+
    ' \t   source = "https://vaseems@bitbucket.org/prosto-vsapkrmkad/terraform-modules.git"\n'+
    ' \t   name = "${appname}"\n'+
    '  \t  size = "Standard_DS3_v2"\n'+
    '}';


function generateTerraformFile(appName){
  var path = "main.tf";
  var data = terraform.replace(/\$\{appname\}/g, appName);

  fs.writeFile(path, data, function(error) {
    if (error) {
      console.error("write error:  " + error.message);
    } else {
      console.log("Successful Write to " + path);
    }
  });
}

generateTerraformFile("prosto");