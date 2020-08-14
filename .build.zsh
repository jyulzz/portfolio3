# ZSH Script to run 'gatsby build' process on project
#!/bin/zsh
clear
echo "\n\033[1;32mbuild.zsh: a ZSH Script to run the 'build' process on this project.\033[0m"
echo "\n\033[1;35m1. Install:\033[0m\n"
npm install
echo "\n\033[1;35m2. Clean:\033[0m\n"
sudo gatsby clean
echo "\n\033[1;35m3. Prettier:\033[0m\n"
prettier --write "**/*.{js,jsx,json,md,scss,yml}"
echo "\n\033[1;35m4. Build:\033[0m\n"
gatsby build
echo "\n\033[1;35mBuild: DONE\033[0m\n"
