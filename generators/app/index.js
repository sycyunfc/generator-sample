// 此文件作为 Generator 的核心入口
// 需要导出一个继承自 Yeoman Generator 的模型
// Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能,例如:文件写入

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        // Yeoman 在询问用户环节会自动调用此方法
        // 在此方法中可以调用父类的 prompt() 方法发出对用户的命令行询问
        // prompt() 方法接收一个数组对象，该数组对象中的每一个元素都是一个问题对象
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname, // appname 为父类当中自动为我们生成的当前生成项目中目录的文件夹名字
        }, {
            type: 'input',
            name: 'title',
            message: 'Your project title',
            default: this.appname + 'title',
        }, {
            type: 'confirm',
            name: 'success',
            message: '请问您是否要开启 success 开关？',
            default: false,
        }]).then(answers => {
            // answers => { name: 'user input value' }
            this.answers = answers
        })
    }
    writing() {
        // // Yeoman 自动在生成文件阶段调用此方法
        // // 我们这里尝试往项目目录中写入文件
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     Math.random().toString(),
        // )


        // // 通过模板方式写入文件到目标目录

        // // 1. 模板文件路径
        // // this.templatePath 获取当前生成器下 templates 目录中的文件路径
        // const tmpl = this.templatePath('bar.html')

        // // 2. 输出目标路径
        // // this.destinationPath 获取生成项目目录下对应的文件路径
        // const output = this.destinationPath('bar.html')

        // // 3. 模板数据上下文
        // const ctx = this.answers

        // this.fs.copyTpl(tmpl, output, ctx)

        const templates = [
            'bar.html',
            'foo.txt',
        ]

        templates.forEach(item => {
            const tmpl = this.templatePath(item)
            const output = this.destinationPath(item)
            const ctx = this.answers

            this.fs.copyTpl(tmpl, output, ctx)
        });
    }
}