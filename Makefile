gendiff:
	node bin/gendiff.js
git: 
	git add .
	git commit -m 'add lint and bages'
	git push
lint:
	npx eslint .

fix:
	npx eslint --fix .