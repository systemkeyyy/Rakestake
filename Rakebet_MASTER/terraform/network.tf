
resource "vultr_private_network" "rake_net" {
  region = var.app_region
  description = "Rakebet private net"
}
