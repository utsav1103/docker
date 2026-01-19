\# Docker Learning – Day 4 



\## Topics Covered

\- Viewing container logs

\- Executing commands inside running containers

\- Interactive exec mode

\- Difference between Docker and Virtual Machines



---



\## 1. View Container Logs



To see logs of a running or stopped container:



```bash

docker logs <container\_id>



docker logs mysql-db



docker logs -f <container\_id>



docker exec <container\_id> <command>





Difference Between Docker and Virtual Machine

Feature	Docker (Containers)	Virtual Machine

Architecture	Shares host OS kernel	Each VM has its own OS

Startup Time	Very fast (seconds)	Slow (minutes)

Resource Usage	Lightweight	Heavy

Isolation	Process-level isolation	Full OS-level isolation

Performance	Near native speed	Slower due to overhead

Size	MBs	GBs

