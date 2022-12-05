#!/bin/bash

# httpd image
docker build --tag annenmrts/httpd ./httpd

# Express server
docker build --tag annenmrts/express ./express