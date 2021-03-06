//包装函数
module.exports = function(grunt){
    //任务配置，所有插件的配置信息
    grunt.initConfig({

        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),
        //uglify插件的配置信息
        uglify:{
            options:{
                banner:'/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build:{
                src:'src/dialog.js',
                dest:'dist/<%=pkg.name%>-<%= pkg.version%>.min.js'
            }
        },
        //jshint的插件配置信息
        jshint:{
            build:['Gruntfile.js','src/*.js'],
            options:{
                jshintrc:'.jshintrc' //检测JS代码错误要根据此文件的设置规范进行检测，可以自己修改规则
            }
        },
        //clean 插件配置信息
        clean: {
            contents: ['dist/*','sample/js/*'],
        },
         //copy 插件配置信息
        copy: {
          main: {
            files: [
                // 完整复制整个目录的所有文件到指定目录
                // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
                //拷贝整个目录的的所有文件及子目录到指定目录
                // {expand: true, src: ['path/**'], dest: 'dest/'},
              // 进入某个目录下，拷贝文件到指定目录
                {expand: true, cwd: 'dist/', src: ['*'], dest: 'sample/js'}
            ],
          },
        },
        //
        replace: {
          another_example: {
            src: ['sample/*.html','README.md','test/*.html'],
            overwrite: true,                 // overwrite matched source files
            replacements: [{
              from: /-\d\.\d\.\d\./g,
              to: "-<%= pkg.version%>."
            }]
          }
        }
    });
    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');
    //告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后顺序）
    grunt.registerTask('default', ['clean','jshint','uglify','replace','copy']);
};