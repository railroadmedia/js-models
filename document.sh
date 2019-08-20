#!/bin/bash

for filename in src/*.js; do
  name=${filename##*/}
  base=${name%.js}

  ./node_modules/.bin/jsdoc2md "$filename" > "docs/$base.md"
done

chmod 777 -R docs;