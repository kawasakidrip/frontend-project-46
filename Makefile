install:
	npm ci
gendiff:
	node bin/gendiff.js
git: 
	git add .
	git commit -m 'upd all project3'
	git push
lint:
	npx eslint .
fix:
	npx eslint --fix .
test-coverage:
	npx jest --coverage
test:
	npm test