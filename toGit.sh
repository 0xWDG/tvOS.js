# Push wiki
cd tvOS.wiki
git pull
git fetch
git add .
git commit -m "tvOS.js"
git push
cd ..

# Push wiki data
cd tvOS.wiki-data
git pull
git fetch
git add .
git commit -m "tvOS.js"
git push
cd ..

# Push main
git pull
git fetch
git add .
git commit -m "tvOS.js"
git push
