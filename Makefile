gendiff:
	node bin/gendiff.js
git: 
	git add .
	git commit -m 'add first test'
	git push
lint:
	npx eslint .

fix:
	npx eslint --fix .