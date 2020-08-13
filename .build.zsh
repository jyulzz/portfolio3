# ZSH Script to run 'build' process on project
#!/bin/zsh
clear && cd && cd Documents/GitHub/portfolio3 && npm install && prettier --write "**/*.{js,jsx,json,md,scss,yml}" && gatsby build
