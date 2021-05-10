# /*-----------------------------------------------------------------------------*

# FILE
# .serve.zsh

# DESCRIPTION
# ZSH Script to run 'gatsby build && gatsby serve' process on project

# *-----------------------------------------------------------------------------*/

#!/bin/zsh
sudo clear
echo "\n\033[1;32mserve.zsh: a ZSH script to \033[49;33mbuild and run a production\033[0m \033[1;32mversion of this project."
echo "\n\033[1;35m1. Install:\033[0m\n"
npm install
echo "\n\033[1;35m2. Audit Vulnerabilities:\033[0m\n"
npm audit
echo "\n\033[1;35m3. Fix Vulnerabilities:\033[0m\n"
npm audit fix
echo "\n\033[1;35m4. Clean:\033[0m\n"
sudo gatsby clean
echo "\n\033[1;35m5. Prettier:\033[0m\n"
sudo prettier --write "**/*.{js,jsx,json,scss,yml}"
echo "\n\033[1;35m6. Build:\033[0m\n"
sudo gatsby build
echo "\n\033[1;35mBuild: DONE\033[0m\n"
sudo gatsby serve
