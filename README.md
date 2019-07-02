I get so excited by:
- Organization (don't worry, I have mostly tamed my OCD)
- Standardization (with the ability to customize)
- Not reinventing the wheel (I cloned this)
------------------------------------------------------------------------

# project-boilerplate

A professional project template for easily create a professional front-end project. This boilerplate includes basic process for you project, such as: build(grunt), documents(jsdoc), validation(jshint)

## Features
* Basic folder structure, includes sources, docs, test and release
* Configured [Grunt](http://gruntjs.com) environment
* Configured .jshintrc, .jshintignore and .gitignore
* Configured [QUnit](http://qunitjs.com) environment
* Configured [JSDoc](http://usejsdoc.org) environment
* A document template with [jekyll](http://jekyllrb.com)

## Get Started
Configure your environment:

1. node.js
2. java

#### Step
1. Checkout [https://github.com/shaoke/project-boilerplate.git](https://github.com/shaoke/project-boilerplate.git)
2. Run `npm install --save-dev`
3. Run `grunt`. This command will run following task: `clean:development`, `jshint`, `concat`, `less:development`, `copy:development`, `uglify:development`, `notify:build`
4. After command running successful, it generates build files to `build` folder

You also can run following grunt tasks:

1. `grunt development`: this is used for when you develop your project. It will start a server and watch files change
2. `grunt release`: this is used to generate release version
3. `grunt api-doc`: this is used to generate API document

## Folder Structure

```
project-boilerplate/
	|-- build/
	|-- release/
	|-- docs/
		|-- api/
	|-- log/
	|-- jsdoc-template/
            |-- jsdoc-docstrap/
            |-- jsdoc-jaguar/
	|-- src/
	|-- test/
	|-- Gruntfile.js
	|-- LICENSE
	|-- package.json
	|-- project.config.js
	|-- README.md
```

* `jsdoc-docstrap` and `jsdoc-jaguar` is a [jsdoc](http://usejsdoc.org) template
* `src` stores source code of this project
* `test` stores all test files
* `docs` stores all document about this project, includes api and developer documents 
* `jsdoc-template` stores jsdoc templates
* `build` and `release` will be created when you running grunt command, stores build files and release files

## Custom
#### Modify `package.json`
* Modify `name` property to what you want, I suggest to modify to your project's name
* Modify `version` property to what you want, this can be used to name or comment your compiled js, css files.
* Modify `homepage` property. If you don't have a homepage, you can remove it
* Modify `author` property. If you don't want to show author, you can keep it empty
* Modify `license` property.

#### Modify `project.config.js`
* All the `__Required__` property need you to modify if your folder isn't same with original value

#### Modify `Gruntfile.js`
You can add, modify or remove grunt tasks.


## Contact
This application is developed by Shaoke Xu. You can use following way to contact me:

**Website**: [http://shaoke.me](http://shaoke.me)

**Email**: [ shaokexu@gmail.com ](shaokexu@gmail.com)

## License
**project boilerplate** is available under the MIT license. See the LICENSE file for more info.






