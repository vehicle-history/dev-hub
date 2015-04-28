#!/bin/sh
bundle exec jekyll build

IMAGE="zenedith/vh-developers"
VERSION="$1"

docker build $2 -t ${IMAGE}:${VERSION} .
docker tag -f ${IMAGE}:${VERSION} ${IMAGE}:latest