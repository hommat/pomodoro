set -e

cd "${0%/*}/.."

echo " "
echo "Running ESLint"
echo "............................" 
yarn eslint --ext .js,.jsx,.ts,.tsx ./

echo " "
echo "Running tests"
echo "............................" 
yarn jest