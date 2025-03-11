# flask_angular_sqlalchemy
Integrating angular with python and sqlalchemy for mysql docker container
## install
venv\Scripts\activate
python -m pip install -r requirements.txt

## ng
ng new angular_flask_sqlalchemy
cd .\flask_angular_sqlalchemy\
ng generate component person

cd .\flask_angular_sqlalchemy
npm cache clean --force
npm install

## docker - mysql
docker run -p 3307:3306 --name my-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -e MYSQL_DATABASE=mydb -d mysql:latest
### enter docker mysql bash
docker exec -it my-mysql /bin/bash

mysql -h 127.0.0.1 -P 3306 -u root -p                   
Enter password: my-secret-pw
### switch to database name (mydb)
USE mydb