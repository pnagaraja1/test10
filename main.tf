variable "azure_settings_file" {
	 default = "./common/settings/dev"
}

provider "azure" {
 	   publish_settings = "${file(var.azure_settings_file)}"
}
module prosto {
 	   source = "https://vaseems@bitbucket.org/prosto-vsapkrmkad/terraform-modules.git"
 	   name = "prosto"
  	  size = "Standard_DS3_v2"
}