set -e

cd "${0%/*}/.."

echo " "
echo "Running ESLint"
echo "............................" 
yarn eslint --ext .js,.jsx,.ts,.tsx ./
