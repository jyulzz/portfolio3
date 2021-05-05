# /*-----------------------------------------------------------------------------*

# FILE
# .develop.zsh

# DESCRIPTION
# ZSH Script to run 'gatsby develop' process on project

# *-----------------------------------------------------------------------------*/

#!/bin/zsh
sudo clear
echo "\n\033[1;32mdevelop.zsh: a ZSH Script to run 'gatsby develop' on this project.\033[0m"
echo "\n\033[1;35m1. Install:\033[0m\n"
npm install
echo "\n\033[1;35m2. Clean:\033[0m\n"
sudo gatsby clean
echo "\n\033[1;35m3. Prettier:\033[0m\n"
prettier --write "**/*.{js,jsx,json,scss,yml}"
echo "\n\033[1;35m4. Develop:\033[0m\n"
sudo gatsby develop
