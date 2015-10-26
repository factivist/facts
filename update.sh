cp /home/umar/public_html/umar_ideas.html ideas.html
cp ~/public_html/*.png .
git add *
git add pages/*
git commit -a -m 'update.sh'
git push origin gh-pages
