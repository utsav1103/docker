\# Docker Learning – Day 3 (MySQL)



\## Topics Covered

\- Pulling MySQL images

\- Using environment variables

\- Running containers in detached mode

\- Port binding

\- Using different MySQL versions



---



\## 1. Pull MySQL Image (Latest)



```bash

docker pull mysql



**docker pull mysql:8.0**





**docker run -d \\**

**--name mysql-container \\**

**-e MYSQL\_ROOT\_PASSWORD=root123 \\**

**mysql**





**-d → Run container in detached mode**



**--name → Assign a name to container**



**-e → Set environment variables**



**MYSQL\_ROOT\_PASSWORD → Mandatory for MySQL container**



