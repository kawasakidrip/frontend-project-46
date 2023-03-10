install:
	npm ci
gendiff:
	node bin/gendiff.js
git: 
	git add .
	git commit -m 'upd all project'
	git push
lint:
	npx eslint .
fix:
	npx eslint --fix .
jest:
	npx jest --coverage
test:
	npm test