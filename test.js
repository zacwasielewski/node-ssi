/**
  * Copyright (C) 2014 yanni4night.com
  * test.js
  *
  * changelog
  * 2014-12-15[15:55:16]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
var grunt = require('grunt');
var ssi = require('./lib/ssi');

//var source = grunt.file.read(' ');


console.log(ssi.compileFile('./test.html'));