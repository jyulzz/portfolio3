# ZSH Script to run 'build' process on project
#!/bin/zsh
clear && npm install && prettier --write "**/*.{js,jsx,json,md,scss,yml}" && gatsby build
