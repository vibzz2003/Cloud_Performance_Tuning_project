echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server..."
scp -r build/* azureuser@20.244.36.231:/var/www/20.244.36.231/ 

echo "Done!"