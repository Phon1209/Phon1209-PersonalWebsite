A while ago, I tried to migrate n8n from `nodejs` environment to docker image, but some of my workflows contain a command node that run custom python script I wrote to automate the blog creation command for [practical-algo.com](http://practical-algo.com). The `n8nio/n8n` image doesn’t really support python script; it doesn’t even have python installed.

So I just made a very simple Dockerfile to install some python in there:

```docker
from n8nio/n8n
user root

run apk add --no-cache git \\
  python3 \\
  py3-pip

user node
```

and change the image in the compose.yml to build instead:

```yaml
  n8n:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: n8n-python
```

That works just fine.

## Resources

[https://community.n8n.io/t/running-python-with-n8n/5715/2](https://community.n8n.io/t/running-python-with-n8n/5715/2)