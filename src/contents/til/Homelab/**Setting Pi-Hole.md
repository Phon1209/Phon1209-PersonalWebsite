#fix-image 

There’s a staggering amount of ads I see each day; so, I don’t know why, but today I’m setting Pi-hole on my Raspberry Pi.

Normally, when we make a request to the network, the device will send DNS request first to the default nameserver which is probably your router. But since router doesn’t know how to resolve the domain name itself (usually), it will forward the request to the ISP or DNS server of your choice. Once the domain is resolved and and back IP address to the device, it can make a direct connection to the said IP address.

![image.png](attachment:25a37ff4-a493-4aca-a4e0-8ab4cbb348a9:image.png)

Problem with this is I don’t want any ads to resolve at all. So I need something to block all those ads domain from ever reaching the DNS resolver.

So instead of directly communicate with DNS resolver, I have it go through Raspberry Pi with Pi-hole installed so that it filter out the unwanted domain resolve request. So the current setup is looking like this.

![image.png](attachment:e783d833-5d1c-4a1d-8983-6879c233359e:image.png)

As for installation, I just go with the docker installation process on Raspberry Pi, which is really simple. Just copy-pasta the compose.yml that the guide give you and run `docker compose up -d`.

And it’s done!

Well.. Not really for me since Pi-Hole use port `80` for dashboard, but I also use it for my n8n setup. So basically I just change the port mapping from `80:80` to `81:80` and just use that port `81` for dashboard instead.

## Resources

[https://docs.pi-hole.net/docker/](https://docs.pi-hole.net/docker/)