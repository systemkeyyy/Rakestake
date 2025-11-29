
resource "vultr_dns_domain" "rakebet_bet" {
  domain = var.domain_bet
}

resource "vultr_dns_domain" "rakebet_com" {
  domain = var.domain_com
}

resource "vultr_dns_record" "rakebet_bet_root" {
  domain = vultr_dns_domain.rakebet_bet.id
  name = "@"
  type = "A"
  data = vultr_instance.rake_app.main_ip
}

resource "vultr_dns_record" "rakebet_com_root" {
  domain = vultr_dns_domain.rakebet_com.id
  name = "@"
  type = "A"
  data = vultr_instance.rake_app.main_ip
}
