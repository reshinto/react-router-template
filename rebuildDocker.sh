#!/bin/sh

sudo docker stop app
sudo docker rm app
sudo docker rmi app
sudo docker build -t app .
sudo docker run -d -p 3000:3000 --name app --restart unless-stopped app