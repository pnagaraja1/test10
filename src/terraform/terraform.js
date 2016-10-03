var fs = require("fs");

var terraform = 'variable "azure_settings_file" {'+
'default = "./common/settings/dev"'+
'}'+
''+
'provider "azure" {'+
'    publish_settings = "${file(var.azure_settings_file)}"'+
'}'+

'module ${appname} {'+
'    source = "https://vaseems@bitbucket.org/prosto-vsapkrmkad/terraform-modules.git"'+
'    name = "${appname}"'+
'    size = "Standard_DS3_v2"'+
'}';


function generateTerraformFile(appName){
    var path = "main.tf";
    var data = terraform.replace('${appname}', appName);

    fs.writeFile(path, data, function(error) {
        if (error) {
            console.error("write error:  " + error.message);
        } else {
            console.log("Successful Write to " + path);
        }
    });
}