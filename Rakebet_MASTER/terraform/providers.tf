
terraform {
  required_providers {
    vultr = {
      source = "vultr/vultr"
      version = "~> 2.19"
    }
  }
}

variable "vultr_api_key" {}

provider "vultr" {
  api_key = var.vultr_api_key
}
