# Push wiki
cd tvOS.wiki
git pull &>/dev/null
git add . &>/dev/null
git commit -m "tvOS.js" &>/dev/null
git push &>/dev/null
cd ..

# Push wiki data
cd tvOS.wiki-data
git pull &>/dev/null
git add . &>/dev/null
git commit -m "tvOS.js" &>/dev/null
git push &>/dev/null
cd ..

# Push main
git pull &>/dev/null
git add . &>/dev/null
git commit -m "tvOS.js" &>/dev/null
git push &>/dev/null
