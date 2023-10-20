mkdir public/css -p || exit;
for x in scss-build/index*.css;
do
  npm run csso -- $x --output $(echo $x | sed 's/scss-build/public\/css/');
done;

