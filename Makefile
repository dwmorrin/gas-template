# exit and display some helpful info if required commands do not exist
require = $(or $(shell command -v $(1) 2>/dev/null),$(error requires $(1): $(2)))
_ := $(call require,clasp,npm i -g @google/clasp && clasp login)
_ := $(call require,rollup,npm i -g rollup)

# final dist dir
GasDir := gas
# intermediate build dir for the client js bundle
BundleDir := build/bundle
JsBundle = $(BundleDir)/client.js
# server build
GsBundle := $(GasDir)/Code.js
HtmlBundle := $(GasDir)/index.html

all: $(GsBundle) $(HtmlBundle)

# gs build note: IIFEs work if you attach functions
#   to globalThis, but those functions will not be reachable by
#   client-side code.  Use any side-effect (e.g. assignment)
#   to convince Rollup not to skip/tree-shake your entry file.
$(GsBundle): $(wildcard src/server/*) | $(GasDir)
	tsc
	rollup build/server/index.js -o $@

# TODO avoid calling tsc twice
$(JsBundle): $(shell find src/client -type file -name '*.ts') | $(BundleDir)
	tsc
	rollup build/client/index.js -o $@ -f iife

$(HtmlBundle): src/client/html/index.html $(JsBundle) $(wildcard src/client/css/*) | $(GasDir)
	node scripts/inline.js

$(BundleDir):
	@mkdir -p $@

$(GasDir):
	@mkdir -p $@

push: $(wildcard $(GasDir)/*) | $(GasDir)
	clasp push
	touch push
