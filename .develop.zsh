# ZSH Script to run 'develop' process on project
#!/bin/zsh
clear && npm install && prettier --write "**/*.{js,jsx,json,md,scss,yml}" && gatsby clean && gatsby develop
