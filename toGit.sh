#// TO LOCAL
#sed -i '' 's/https:\/\/wdg.github.io\/tvOS.js\//http:\/\/localhost:9001\//g' *.js
if [ -z "$1" ]; then
	message="tvOS.js Auto Update"
else
	message="$1"
fi
# Push wiki
cd tvOS.js.wiki
git pull
git fetch
php generateDocs.php
sed -i '' 's/http:\/\/localhost:9001\//https:\/\/wdg.github.io\/tvOS.js\//g' *.md
git add .
git commit -m "$message"
git push
cd ..

# Push wiki data
cd tvOS.wiki-data
git pull
git fetch
git add .
git commit -m "$message"
git push
cd ..

# Push www
rm tvOS.www/*.js
rm tvOS.www/*.html
cp Server/*.js tvOS.www/
cp Server/*.html tvOS.www/
cd tvOS.www
#To Publish, rewrite url!
sed -i '' 's/http:\/\/localhost:9001\//https:\/\/wdg.github.io\/tvOS.js\//g' *.js
git pull
git fetch
git add .
git commit -m "$message"
git push
cd ..

# Push main
git pull
git fetch
git add .
git commit -m "$message"
git push
