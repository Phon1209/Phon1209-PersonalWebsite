So Grafana doesn’t act as a data puller from the source, it’s actually just reading from the database that something (Prometheus or something else) populate, or the pushed from the source.

![image.png](attachment:d01c6d11-c994-40b0-a917-80f734362f90:image.png)

Grafana only queries this resources and make it a dashboard to easier visualization.