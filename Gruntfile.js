var path = require('path');

module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		srcMainDir: "./src",
		destMainDir: "./www",
		dirs:{
			js: "scripts",
			css: "css",
			assets: "assets",
			img: "images"
		},
		jshint: require("./grunt_plugins_configs/jshint.config"),
		concat: {
		  dist: {
			// the files to concatenate
			src: ["src/app/**/*.js"],
			// the location of the resulting JS file
			dest: "<%= destMainDir %>/<%= dirs.js %>/<%= pkg.name %>.js"
		  }
		},
		clean:{
			contents:["<%= destMainDir %>"]
		},
		html2js:{
			options: {
                base  : "src",
                rename: function (moduleName) {
                    return path.parse(moduleName).base;
                }
            },
			main: {
				src: ["src/**/*.tpl.html"],
				dest: "<%= destMainDir %>/<%= dirs.js %>/templates/templates.js",
				module : "templates.app"
			}
		},
		copy:{
			html: {
				files:[{
					src: "./index.html",
					dest: "<%= destMainDir %>/index.html"
				}]
			},
			assets: {
				files:[{
					expand: true,
					cwd: "<%= srcMainDir %>/assets",
					src: "**",					
					dest: "<%= destMainDir %>/<%= dirs.assets %>"
				},
				{
					expand: true,
					cwd: "./bower_components/bxslider-4/src/images",
					src: "**",
					dest: "<%= destMainDir %>/<%= dirs.assets %>"
				}]
			},
			img: {
				files:[
					{
						expand: true,
						cwd: "<%= srcMainDir %>/img",
						src: "**",
						dest: "<%= destMainDir %>/<%= dirs.img %>"	},
					]
			},
			css: {
				files:[
					{
						expand: true,	
						cwd: "<%= srcMainDir %>/css",
						src: "**",
						dest: "<%= destMainDir %>/<%= dirs.css %>"				
					},
					{
						src: "./bower_components/bxslider-4/src/css/jquery.bxslider.css",
						dest: "<%= destMainDir %>/<%= dirs.css %>/jquery.bxslider.css"	
					}]
			},
			libs: {
				files:[
					{
						src: "./bower_components/jquery/dist/jquery.min.js",
						dest: "<%= destMainDir %>/<%= dirs.js %>/jquery.min.js"
					},
					{
						src: "./bower_components/angular/angular.min.js",
						dest: "<%= destMainDir %>/<%= dirs.js %>/angular.min.js"
					},
					{
						src: "./bower_components/angular-ui-router/release/angular-ui-router.min.js",
						dest: "<%= destMainDir %>/<%= dirs.js %>/angular-ui-router.min.js"
					},
					{
						src: "./bower_components/bxslider-4/src/js/jquery.bxslider.js",
						dest: "<%= destMainDir %>/<%= dirs.js %>/jquery.bxslider.js"
					}]
			}
		}
		
	});	
	
	grunt.loadNpmTasks('grunt-contrib-concat'); // JS CONCAT
	grunt.loadNpmTasks('grunt-contrib-jshint'); // JS CHECKING
    //grunt.loadNpmTasks('grunt-contrib-uglify'); // COMPRESSION
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-html2js'); // HTML TEMPLATES TO JS
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	grunt.registerTask('default', ['clean','concat','jshint','html2js','copy']);
};