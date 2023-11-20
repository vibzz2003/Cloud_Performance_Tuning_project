echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server..."
scp -r build/* Vibhor@4.240.65.158:/var/www/4.240.65.158/ 

echo "Done!"