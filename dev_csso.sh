mkdir public/css -p || exit;
for x in scss-build/index*.css;
do
  output=$(echo $x | sed 's/scss-build/public\/css/');
  npm run csso -- $x \
    --output $output \
    --input-source-map $x.map \
    --source-map $output.map \
    --watch &
done;
