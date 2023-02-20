gendiff:
	node bin/gendiff.js
git: 
	git add .
	git commit -m 'upd first test'
	git push
lint:
	npx eslint .

fix:
	npx eslint --fix .