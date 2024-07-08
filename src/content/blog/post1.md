---
title: "Automating your VMware Homelab with Vagrant"
pubTime: 12
pubDate: "2024-07-08T00:00:00Z"
views: 1000
readTime: 10
image: {
 src: "/src/assets/project1.jpeg",
  alt: "A picture of a coder",
}
author: Kaladin Brightlord
authorImg: {
 src: "/src/assets/project1.jpeg",
  alt: "A picture of a coder",
}
description: "Creating custom Discord selfbots when Discord's Webhooks aren't enough. With a dash of Python and a dab of Chrome Dev tools. Creating custom Discord selfbots when Discord's Webhooks aren't enough. With a dash of Python and a dab of Chrome Dev tools."

layout: "../../layouts/BlogLayout.astro"
---

# VMware Homelab Automation with Vagrant

## Introduction

In this blog post, I'll share my experience setting up a VMware homelab using Vagrant for automation. This approach allows for quick and easy deployment of virtual machines, making it ideal for testing and development environments.

## Prerequisites

Before getting started, ensure you have the following:

- VMware Workstation or Fusion
- Vagrant
- vagrant-vmware-desktop plugin

## Setting Up Vagrant

1. Install Vagrant from the official website
2. Install the vagrant-vmware-desktop plugin:

```bash
vagrant plugin install vagrant-vmware-desktop
```

3. Obtain a license for the plugin (free for personal use)

## Creating a Vagrantfile

Create a file named `Vagrantfile` in your project directory with the following content:

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "generic/ubuntu2004"
  config.vm.provider "vmware_desktop" do |v|
    v.vmx["memsize"] = "1024"
    v.vmx["numvcpus"] = "2"
  end
end
```

This configuration specifies:
- Ubuntu 20.04 as the base image
- 1024 MB of RAM
- 2 CPU cores

## Launching the VM

To start the virtual machine, run:

```bash
vagrant up
```

## Accessing the VM

SSH into the VM using:

```bash
vagrant ssh
```

## Customizing the VM

You can further customize the VM by modifying the Vagrantfile. For example, to add a second network interface:

```ruby
config.vm.network "private_network", ip: "192.168.33.10"
```

## Provisioning

Vagrant supports various provisioning methods. Here's an example using a shell script:

```ruby
config.vm.provision "shell", inline: <<-SHELL
  apt-get update
  apt-get install -y nginx
SHELL
```

## Conclusion

Using Vagrant with VMware provides a powerful and flexible way to manage your homelab environment. It allows for easy creation, destruction, and recreation of VMs, making it ideal for testing and development purposes.

Citations:
[1] https://kaladin.dev/blog/vmware-homelab-automation-with-vagrant/