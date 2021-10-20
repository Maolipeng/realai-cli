# realai-cli

A template cli

### 安装

`npm install -g realai-cli`
### 操作
```
Options:
  -V --version    output the version number
  -h, --help      display help for command

Commands:
  init            realai init
  config|cfg      config .realairc
  help [command]  display help for command

Usage:
  - realai init templateName projectName
  - realai config set <k> <v>
  - realai config get <k>
  - realai config remove <k>
```
### 操作步骤

1. 基于git创建项目
2. 在项目根目录运行命令创建工程
### 安装模板
目前支持
* 基于antd-pro+ts的模板 
* 基于umi+ts的模板，已经集成大屏适配  
* screen大屏代码
* react 标准的js工程代码

#### 安装命令
```
// init后面可以传递参数，也可以不传
realai init 
```

 1. init后面可以不传参数，如果不传会把支持的所有模版列出来，支持选择 
   ![选择安装](https://tva1.sinaimg.cn/large/008i3skNly1grt6jeeuplj30gn02edfy.jpg)

 2. 也可以直接传递参数直接安装
   
* pro管理系统模板

  `realai init admin-pro`

* 大屏模板代码安装

    `realai init screen`

* 管理后台模板

    `realai init react`

* 基于ts的umi模版
    `realai init umi-ts`

* 基于ts的Pro管理系统
  `realai init admin-pro`

***建议如果是后台管理系统，优先使用umi-ts***
