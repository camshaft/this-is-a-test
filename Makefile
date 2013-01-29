
test:
	@./node_modules/.bin/mocha -R spec --recursive

test-dev:
	@./node_modules/.bin/mocha -R spec --recursive -w

.PHONY: test test-dev
