module.exports = {

    files  : ['gruntFile.js','./src/app/**/*.js'],
    options: {
        curly   : true, // This option requires you to always put curly braces around blocks in loops and conditionals
        eqeqeq  : true, // This options prohibits the use of == and != in favor of === and !==.
        //freeze: true,// This options prohibits overwriting prototypes of native objects such as Array, Date and so on
        latedef : 'nofunc', // This option prohibits the use of a variable before it was defined
        maxdepth: 5, //This option lets you control how nested do you want your blocks to be
        undef   : true, //This option prohibits the use of explicitly undeclared variables
        unused  : true, //This option warns when you define and never use your variables, In addition to that, this option will warn you about unused global variables declared via the global directive.
        noarg   : true, //This option prohibits the use of arguments.caller and arguments.callee
        boss    : true, // This option suppresses warnings about the use of assignments in cases where comparisons are expected. (for (var i = 0, person; person = people[i]; i++) {})
        eqnull  : true, //This option suppresses warnings about == null comparisons. Such comparisons are often useful when you want to check if a variable is null or undefined
        forin   : true, //This option requires all for in loops to filter object's items.
        laxbreak: true, //This option suppresses most of the warnings about possibly unsafe line breakings in your code. Switched off untill jshint 3.0.0 release,
        // Ignoring warning: Forgotten 'debugger' statement?
        '-W087': true,
        globals : {
            "angular"   : false,
            "jasmine"   : false,
            "$"         : false,
            "_"         : false,
            "module"    : false,
            "require"   : false,
            "console"   : false,
            "describe"  : false,
            "process"   : false,
            "beforeEach": false,
            "afterEach" : false,
            "inject"    : false,
            "it"        : false,
            "expect"    : false,
            "element"   : false,
            "by"        : false,
            "browser"   : false,
            "window"    : false,
            "document"  : false,
            "spyOn"     : false,
            "setTimeout": false,
            "Buffer"    : false,
            "sjcl"      : false,
            "Uint8Array": false,
            "jsSHA"     : false,
            "X2JS"      : false,
            "btoa"      : false
        }
    }

};