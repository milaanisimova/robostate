const { Bundler } = require('@stylify/bundler');

const isDev = process.argv[process.argv.length - 1] === '--w';
const bundler = new Bundler({
  watchFiles: isDev,
  // Optional
  // Compiler config info https://stylifycss.com/en/docs/stylify/compiler#configuration
  compiler: {
    // https://stylifycss.com/en/docs/stylify/compiler#variables
    variables: {},
    // https://stylifycss.com/en/docs/stylify/compiler#macros
    macros: {},
    // https://stylifycss.com/en/docs/stylify/compiler#components
    components: {},
    // ...
  }
});

// This bundles all CSS into one file
// You can configure the Bundler to bundle CSS for each page separately
// See bundler link below
bundler.bundle([
  { 
    files: [
      './_includes/**/*.html', 
      './_layouts/**/*.html'], 
    outputFile: './assets/stylify.css' },
]);