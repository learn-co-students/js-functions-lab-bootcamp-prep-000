global.expect = require('expect')

const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

jsdom({
  src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
})

const babelResult = babel.transformFileSync(
    path.resolve(__dirname, '..', 'index.js'), {
      presets: ['es2015']
    }
  );
  const html = path.resolve(__dirname, '..', 'index.html')
jsdom.env(html, [], {
    src: babelResult.code,
     virtualConsole: jsdom.createVirtualConsole().sendTo(console)
  }, (err, window) => {
     if (err) {
       return done(err);
     }
