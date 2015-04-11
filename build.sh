#!/bin/sh
bundle exec jekyll build
docker build $1 -t zenedith/vh-developers .