var dest = './dist';
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  ico: {
    src: src + "/favicon.ico",
    dest: dest
  },
  markup: {
    src: src + "/**/*.html",
    dest: dest + ""
  },
  styles: {
    src: src + "/styles/**",
    dest: dest + "/styles"
  },
  paths: {
    src: src,
    scripts: src + '/js',
    dest: dest,
    wildcards: {
      scripts: src + '/js/**/*.js',
      markup: src + '/**/*.html',
      styles: src + '/styles/**/*',
      images: src + '/images/**/*'
    }
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/index.js',
      dest: dest + '/js',
      outputName: 'bundle.js',
      // list of externally available modules to exclude from the bundle
      external: ['jquery']
    }]
  },
  clean: {
    dest: dest
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
