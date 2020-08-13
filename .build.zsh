# ZSH Script to run 'build' process on project
#!/bin/zsh
clear && cd && cd Documents/GitHub/portfolio3 && git pull && npm install && prettier --write "**/*.{js,jsx,json,md,scss,yml}" && gatsby build
