var fs = require("fs");
var sh = require("shelljs");

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

function provisionVM(){
    console.log("Initiating the VM provisions");
    sh.exec("terraform plan");
    console.log("Provisioning the VMs");
    sh.exec("terraform apply");
}