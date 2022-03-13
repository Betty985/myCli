# 插件

## [commander](https://www.npmjs.com/package/commander):命令行插件

## [figlet](https://www.npmjs.com/package/figlet):终端打印大型字符

## [chalk](https://www.npmjs.com/package/chalk):美化终端字符显示

## [inquirer](https://www.npmjs.com/package/inquirer):命令行参数交互输入

## shelljs:命令行操作

## ora：loading 效果

## download-git-repo:仓库下载

# 过程

通过`npm init或yarn init`初始化标准的 package.json
npm :-S 是-save -D 是--save-dev

# 报错

```js
//版本问题 将node升级或者将npm包版本回退
import chalk from "chalk";
^^^^^^
SyntaxError: Cannot use import statement outside a module
```

# git

origin 是默认的远程版本库名称

- `git remote rename 旧名称 新名称`（改变远程库的名字）
- `git remote add 远程库名 远程库地址`(添加另外远程库) -` git remote remove 远程库名`(删除该远程库)

# node

- [所有 node 版本](https://nodejs.org/dist/index.json)
- nvm :node 版本切换工具
- `nvm list:`查看已安装的所有 node 版本
- `nvm install `版本号: 下载 node
- `nvm use` 版本号：切换 node 版本
