\# Docker Learning Journey - Day 6



This repository documents my Docker learning progress.  

On Day 6, I worked with Docker networks and multi-container setup using MongoDB and Mongo Express.



---



\## 📌 What I Learned



\- Creating a custom Docker network  

\- Running MongoDB in a container  

\- Running Mongo Express in a container  

\- Connecting multiple containers using a Docker network  

\- Using environment variables for configuration  

\- Accessing services via browser  

\- Basic container management commands  



---



\## 🧱 Setup Overview



\### 1️⃣ Create Docker Network



```bash

docker network create mongo-network



docker run -d --name mongo --network mongo-network -p 27017:27017 -e MONGO\_INITDB\_ROOT\_USERNAME=<your-username> -e MONGO\_INITDB\_ROOT\_PASSWORD=<your-password> mongo





docker run -d --name mongo-express --network mongo-network -p 8081:8081 \\

&nbsp; -e ME\_CONFIG\_MONGODB\_ADMINUSERNAME=<your-username> \\

&nbsp; -e ME\_CONFIG\_MONGODB\_ADMINPASSWORD=<your-password> \\

&nbsp; -e ME\_CONFIG\_MONGODB\_SERVER=mongo \\

&nbsp; mongo-express



http://localhost:8081





