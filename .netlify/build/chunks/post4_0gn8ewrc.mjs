import { a as createComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_E_GASDw3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"vmware-homelab-automation-with-vagrant\">VMware Homelab Automation with Vagrant</h1>\n<h2 id=\"introduction\">Introduction</h2>\n<p>In this blog post, I’ll share my experience setting up a VMware homelab using Vagrant for automation. This approach allows for quick and easy deployment of virtual machines, making it ideal for testing and development environments.</p>\n<h2 id=\"prerequisites\">Prerequisites</h2>\n<p>Before getting started, ensure you have the following:</p>\n<ul>\n<li>VMware Workstation or Fusion</li>\n<li>Vagrant</li>\n<li>vagrant-vmware-desktop plugin</li>\n</ul>\n<h2 id=\"setting-up-vagrant\">Setting Up Vagrant</h2>\n<ol>\n<li>Install Vagrant from the official website</li>\n<li>Install the vagrant-vmware-desktop plugin:</li>\n</ol>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">vagrant</span><span style=\"color:#9ECBFF\"> plugin</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#9ECBFF\"> vagrant-vmware-desktop</span></span>\n<span class=\"line\"></span></code></pre>\n<ol start=\"3\">\n<li>Obtain a license for the plugin (free for personal use)</li>\n</ol>\n<h2 id=\"creating-a-vagrantfile\">Creating a Vagrantfile</h2>\n<p>Create a file named <code>Vagrantfile</code> in your project directory with the following content:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ruby\"><code><span class=\"line\"><span style=\"color:#79B8FF\">Vagrant</span><span style=\"color:#E1E4E8\">.configure(</span><span style=\"color:#9ECBFF\">\"2\"</span><span style=\"color:#E1E4E8\">) </span><span style=\"color:#F97583\">do</span><span style=\"color:#E1E4E8\"> |config|</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  config.vm.box </span><span style=\"color:#F97583\">=</span><span style=\"color:#9ECBFF\"> \"generic/ubuntu2004\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  config.vm.provider </span><span style=\"color:#9ECBFF\">\"vmware_desktop\"</span><span style=\"color:#F97583\"> do</span><span style=\"color:#E1E4E8\"> |v|</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    v.vmx[</span><span style=\"color:#9ECBFF\">\"memsize\"</span><span style=\"color:#E1E4E8\">] </span><span style=\"color:#F97583\">=</span><span style=\"color:#9ECBFF\"> \"1024\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    v.vmx[</span><span style=\"color:#9ECBFF\">\"numvcpus\"</span><span style=\"color:#E1E4E8\">] </span><span style=\"color:#F97583\">=</span><span style=\"color:#9ECBFF\"> \"2\"</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">  end</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">end</span></span>\n<span class=\"line\"></span></code></pre>\n<p>This configuration specifies:</p>\n<ul>\n<li>Ubuntu 20.04 as the base image</li>\n<li>1024 MB of RAM</li>\n<li>2 CPU cores</li>\n</ul>\n<h2 id=\"launching-the-vm\">Launching the VM</h2>\n<p>To start the virtual machine, run:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">vagrant</span><span style=\"color:#9ECBFF\"> up</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"accessing-the-vm\">Accessing the VM</h2>\n<p>SSH into the VM using:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">vagrant</span><span style=\"color:#9ECBFF\"> ssh</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"customizing-the-vm\">Customizing the VM</h2>\n<p>You can further customize the VM by modifying the Vagrantfile. For example, to add a second network interface:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ruby\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">config.vm.network </span><span style=\"color:#9ECBFF\">\"private_network\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">ip:</span><span style=\"color:#9ECBFF\"> \"192.168.33.10\"</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"provisioning\">Provisioning</h2>\n<p>Vagrant supports various provisioning methods. Here’s an example using a shell script:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ruby\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">config.vm.provision </span><span style=\"color:#9ECBFF\">\"shell\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">inline:</span><span style=\"color:#9ECBFF\"> &#x3C;&#x3C;-SHELL</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">  apt-get</span><span style=\"color:#9ECBFF\"> update</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">  apt-get</span><span style=\"color:#9ECBFF\"> install </span><span style=\"color:#79B8FF\">-y</span><span style=\"color:#9ECBFF\"> nginx</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">SHELL</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>Using Vagrant with VMware provides a powerful and flexible way to manage your homelab environment. It allows for easy creation, destruction, and recreation of VMs, making it ideal for testing and development purposes.</p>\n<p>Citations:\r\n[1] <a href=\"https://kaladin.dev/blog/vmware-homelab-automation-with-vagrant/\">https://kaladin.dev/blog/vmware-homelab-automation-with-vagrant/</a></p>";

				const frontmatter = {"title":"Automating your VMware Homelab with Vagrant","pubTime":12,"pubDate":"2024-07-08T00:00:00.000Z","views":1000,"readTime":10,"image":{"src":"./images/project1.jpeg","alt":"A picture of a coder"},"author":"Kaladin Brightlord","authorImg":{"src":"./images/project1.jpeg","alt":"A picture of a coder"},"description":"Creating custom Discord selfbots when Discord's Webhooks aren't enough. With a dash of Python and a dab of Chrome Dev tools. Creating custom Discord selfbots when Discord's Webhooks aren't enough. With a dash of Python and a dab of Chrome Dev tools."};
				const file = "C:/upwork/matthew-portfolio/src/content/blog/post4.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n# VMware Homelab Automation with Vagrant\r\n\r\n## Introduction\r\n\r\nIn this blog post, I'll share my experience setting up a VMware homelab using Vagrant for automation. This approach allows for quick and easy deployment of virtual machines, making it ideal for testing and development environments.\r\n\r\n## Prerequisites\r\n\r\nBefore getting started, ensure you have the following:\r\n\r\n- VMware Workstation or Fusion\r\n- Vagrant\r\n- vagrant-vmware-desktop plugin\r\n\r\n## Setting Up Vagrant\r\n\r\n1. Install Vagrant from the official website\r\n2. Install the vagrant-vmware-desktop plugin:\r\n\r\n```bash\r\nvagrant plugin install vagrant-vmware-desktop\r\n```\r\n\r\n3. Obtain a license for the plugin (free for personal use)\r\n\r\n## Creating a Vagrantfile\r\n\r\nCreate a file named `Vagrantfile` in your project directory with the following content:\r\n\r\n```ruby\r\nVagrant.configure(\"2\") do |config|\r\n  config.vm.box = \"generic/ubuntu2004\"\r\n  config.vm.provider \"vmware_desktop\" do |v|\r\n    v.vmx[\"memsize\"] = \"1024\"\r\n    v.vmx[\"numvcpus\"] = \"2\"\r\n  end\r\nend\r\n```\r\n\r\nThis configuration specifies:\r\n- Ubuntu 20.04 as the base image\r\n- 1024 MB of RAM\r\n- 2 CPU cores\r\n\r\n## Launching the VM\r\n\r\nTo start the virtual machine, run:\r\n\r\n```bash\r\nvagrant up\r\n```\r\n\r\n## Accessing the VM\r\n\r\nSSH into the VM using:\r\n\r\n```bash\r\nvagrant ssh\r\n```\r\n\r\n## Customizing the VM\r\n\r\nYou can further customize the VM by modifying the Vagrantfile. For example, to add a second network interface:\r\n\r\n```ruby\r\nconfig.vm.network \"private_network\", ip: \"192.168.33.10\"\r\n```\r\n\r\n## Provisioning\r\n\r\nVagrant supports various provisioning methods. Here's an example using a shell script:\r\n\r\n```ruby\r\nconfig.vm.provision \"shell\", inline: <<-SHELL\r\n  apt-get update\r\n  apt-get install -y nginx\r\nSHELL\r\n```\r\n\r\n## Conclusion\r\n\r\nUsing Vagrant with VMware provides a powerful and flexible way to manage your homelab environment. It allows for easy creation, destruction, and recreation of VMs, making it ideal for testing and development purposes.\r\n\r\nCitations:\r\n[1] https://kaladin.dev/blog/vmware-homelab-automation-with-vagrant/";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"vmware-homelab-automation-with-vagrant","text":"VMware Homelab Automation with Vagrant"},{"depth":2,"slug":"introduction","text":"Introduction"},{"depth":2,"slug":"prerequisites","text":"Prerequisites"},{"depth":2,"slug":"setting-up-vagrant","text":"Setting Up Vagrant"},{"depth":2,"slug":"creating-a-vagrantfile","text":"Creating a Vagrantfile"},{"depth":2,"slug":"launching-the-vm","text":"Launching the VM"},{"depth":2,"slug":"accessing-the-vm","text":"Accessing the VM"},{"depth":2,"slug":"customizing-the-vm","text":"Customizing the VM"},{"depth":2,"slug":"provisioning","text":"Provisioning"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
