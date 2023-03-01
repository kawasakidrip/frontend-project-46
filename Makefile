install:
	npm ci
gendiff:
	node bin/gendiff.js
git: 
	git add .
	git commit -m 'upd first jest'
	git push
lint:
	npx eslint .
fix:
	npx eslint --fix .
jest:
	npx jest --coverage