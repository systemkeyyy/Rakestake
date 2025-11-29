
resource "vultr_instance" "rake_app" {
  region  = var.app_region
  plan    = var.app_plan
  os_id   = 215
  label   = "Rakebet-App"
  hostname = "${var.app_hostname}-app"
  vpc2_network_ids = [vultr_private_network.rake_net.id]
  sshkey_ids = [var.ssh_key]
  enable_ipv6 = false

  user_data = file("cloud-init-app.yaml")
}

resource "vultr_instance" "rake_db" {
  region  = var.db_region
  plan    = var.db_plan
  os_id   = 215
  label   = "Rakebet-DB"
  hostname = "${var.app_hostname}-db"
  vpc2_network_ids = [vultr_private_network.rake_net.id]
  sshkey_ids = [var.ssh_key]
  enable_ipv6 = false

  user_data = file("cloud-init-db.yaml")
}
