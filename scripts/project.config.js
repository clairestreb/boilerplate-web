module.exports = {
	project_config: {
		/**
		 * __Required__
		 * `production_dir` this folder store all compiled files that is ready for **Release**.
		 */
		production_dir: '../release',

		/**
		 * __Required__
		 * `build_dir` this folder store all compiled JavaScript, CSS, HTML, images... sources.
		 */
		build_dir: '../build',

		/**
		 * __Required__
		 * `source_dir` this folder store all compiled JavaScript, CSS, HTML, images... sources.
		 */
		source_dir: '../src',

		/**
		 * `log` this folder store all the log files
		 */
		log_dir: 'log',

		/**
		 * __Required__
		 * `app_files` stores all files created by this project. Includes js, css, img...
		 */
		app_files: {
			/**
			 * __Required__
			 * JavaScript files, you can configure it based on your project
			 */
			app_js: {
				src: ['<%= source_dir %>/js/**/*.js', '!vendor/**/*'],
				dest: '<%= build_dir %>/js/<%= pkg.name %>.js'
			},

			/**
			 * __Required__
			 * Less css files
			 */
			less: {
				src: '<%= source_dir %>/asset/less/<%= pkg.name %>.less',
				dest: '<%= build_dir %>/asset/css/<%= pkg.name %>.css'
			},

			/**
			 * __Required__
			 * Resource files, such as: images, fonts...
			 */
			asset: ['<%= source_dir %>/asset/**/*', '!<%= source_dir %>/asset/less/*', '!<%= source_dir %>/asset/css/*']
		},

		/**
		 * __Required__
		 * Third part libraries depended by this project
		 */
		vendor: ['<%= source_dir %>/vendor/**/*']
	}
};