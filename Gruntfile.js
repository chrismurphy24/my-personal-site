'use strict';

const sass = require('node-sass');
const webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
        base: webpackConfig.BASE
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Default task(s).
  grunt.registerTask('build', ['webpack:base']);
};
