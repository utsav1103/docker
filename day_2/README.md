\# Docker Learning – Day 2 🐳



\## Topics Covered

\- Pulling images from Docker Hub

\- Running containers in interactive mode

\- Managing containers

\- Removing containers and images



---



\## 1. Pull Ubuntu Image

Download the latest Ubuntu image from Docker Hub.



```bash

docker pull ubuntu

docker run -it ubuntu





docker ps

docker ps -a

docker start <container\_id>

docker stop <container\_id>



* removing a container

&nbsp;  docker rm <container\_id>



&nbsp;  removing a image

docker rmi <image\_id>







