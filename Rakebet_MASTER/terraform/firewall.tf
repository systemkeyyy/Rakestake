
resource "vultr_firewall_group" "rakebet_fw" {
  description = "Rakebet Firewall"
}

resource "vultr_firewall_rule" "ssh" {
  firewall_group_id = vultr_firewall_group.rakebet_fw.id
  allowed_network = "0.0.0.0/0"
  port = "22"
  protocol = "tcp"
}

resource "vultr_firewall_rule" "http" {
  firewall_group_id = vultr_firewall_group.rakebet_fw.id
  allowed_network = "0.0.0.0/0"
  port = "80"
  protocol = "tcp"
}

resource "vultr_firewall_rule" "https" {
  firewall_group_id = vultr_firewall_group.rakebet_fw.id
  allowed_network = "0.0.0.0/0"
  port = "443"
  protocol = "tcp"
}
