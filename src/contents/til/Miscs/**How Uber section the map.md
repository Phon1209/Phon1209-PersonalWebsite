#fix-image 

Uber utilizes a grid system in order to find a nearby driver/location and so on. However, with the standard square grid system, when querying the neighbor node, the diagonal neighbor will have further distance compared to the side adjacent node. This creates a bias from asymmetric sectioning. Due to this Uber create H3 Grid system that use hexagonal grid instead.

![image.png](attachment:56649971-cffe-40f5-9c4e-e8607c090146:image.png)

This system make the neighbor cell to be of around equal distance which is useful in several context such as finding estimate shortest path between two cell, finding driver that are in the nearby cell, etc.

[https://h3geo.org/](https://h3geo.org/)