const id = "post12.md";
						const collection = "blog";
						const slug = "post12";
						const body = "\r\n\r\n# VMware Homelab Automation with Vagrant\r\n\r\n## Introduction\r\n\r\nIn this blog post, I'll share my experience setting up a VMware homelab using Vagrant for automation. This approach allows for quick and easy deployment of virtual machines, making it ideal for testing and development environments.\r\n\r\n## Prerequisites\r\n\r\nBefore getting started, ensure you have the following:\r\n\r\n- VMware Workstation or Fusion\r\n- Vagrant\r\n- vagrant-vmware-desktop plugin\r\n\r\n## Setting Up Vagrant\r\n\r\n1. Install Vagrant from the official website\r\n2. Install the vagrant-vmware-desktop plugin:\r\n\r\n```bash\r\nvagrant plugin install vagrant-vmware-desktop\r\n```\r\n\r\n3. Obtain a license for the plugin (free for personal use)\r\n\r\n## Creating a Vagrantfile\r\n\r\nCreate a file named `Vagrantfile` in your project directory with the following content:\r\n\r\n```ruby\r\nVagrant.configure(\"2\") do |config|\r\n  config.vm.box = \"generic/ubuntu2004\"\r\n  config.vm.provider \"vmware_desktop\" do |v|\r\n    v.vmx[\"memsize\"] = \"1024\"\r\n    v.vmx[\"numvcpus\"] = \"2\"\r\n  end\r\nend\r\n```\r\n\r\nThis configuration specifies:\r\n- Ubuntu 20.04 as the base image\r\n- 1024 MB of RAM\r\n- 2 CPU cores\r\n\r\n## Launching the VM\r\n\r\nTo start the virtual machine, run:\r\n\r\n```bash\r\nvagrant up\r\n```\r\n\r\n## Accessing the VM\r\n\r\nSSH into the VM using:\r\n\r\n```bash\r\nvagrant ssh\r\n```\r\n\r\n## Customizing the VM\r\n\r\nYou can further customize the VM by modifying the Vagrantfile. For example, to add a second network interface:\r\n\r\n```ruby\r\nconfig.vm.network \"private_network\", ip: \"192.168.33.10\"\r\n```\r\n\r\n## Provisioning\r\n\r\nVagrant supports various provisioning methods. Here's an example using a shell script:\r\n\r\n```ruby\r\nconfig.vm.provision \"shell\", inline: <<-SHELL\r\n  apt-get update\r\n  apt-get install -y nginx\r\nSHELL\r\n```\r\n\r\n## Conclusion\r\n\r\nUsing Vagrant with VMware provides a powerful and flexible way to manage your homelab environment. It allows for easy creation, destruction, and recreation of VMs, making it ideal for testing and development purposes.\r\n\r\nCitations:\r\n[1] https://kaladin.dev/blog/vmware-homelab-automation-with-vagrant/";
						const data = {title:"Automating your VMware Homelab with Vagrant",pubDate:new Date(1720396800000),pubTime:12,views:1000,description:"Creating custom Discord selfbots when Discord's Webhooks aren't enough. With a dash of Python and a dab of Chrome Dev tools. Creating custom Discord selfbots when Discord's Webhooks aren't enough. With a dash of Python and a dab of Chrome Dev tools.",image:{src:
						new Proxy({"src":"/_astro/project1.VtAf7jyR.jpeg","width":1192,"height":794,"format":"jpg","fsPath":"C:/upwork/matthew-portfolio/src/content/blog/images/project1.jpeg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/upwork/matthew-portfolio/src/content/blog/images/project1.jpeg";
							}
							
							return target[name];
						}
					})
					,alt:"A picture of a coder"},author:"Kaladin Brightlord",authorImg:{src:
						new Proxy({"src":"/_astro/project1.VtAf7jyR.jpeg","width":1192,"height":794,"format":"jpg","fsPath":"C:/upwork/matthew-portfolio/src/content/blog/images/project1.jpeg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/upwork/matthew-portfolio/src/content/blog/images/project1.jpeg";
							}
							
							return target[name];
						}
					})
					,alt:"A picture of a coder"}};
						const _internal = {
							type: 'content',
							filePath: "C:/upwork/matthew-portfolio/src/content/blog/post12.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
