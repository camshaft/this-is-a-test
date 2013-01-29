
test:
	@NODE_ENV=test ./node_modules/.bin/mocha -R spec --recursive

test-dev:
	@NODE_ENV=test ./node_modules/.bin/mocha -R spec --recursive -w

test-docs:
	@mkdir -p docs
	@NODE_ENV=test ./node_modules/.bin/mocha -R doc --recursive > docs/body.html
	@cat docs/header.html docs/body.html docs/footer.html > docs/index.html

.PHONY: test test-dev
