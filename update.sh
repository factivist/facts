cp /home/umar/public_html/ideas.html .
cp /home/umar/public_html/*.png .
cp /home/umar/public_html/*.jpg .
cp /home/umar/public_html/*.css .
git add *
git add pages/*
git commit -a -m 'update.sh'
git push origin gh-pages
