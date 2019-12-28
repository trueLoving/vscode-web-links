### 简述

1. 用于快速打开相关Web文档
2. 先初步使用命令打开，后期在Activity Bar添加可视化操作



### 相关库

1. vs code 
2. typescript
3. ts lint
4. vsce // vscode打包工具，需要Node全局安装(npm i vsce -g)
4. .......



### 相关脚本命令说明

```json
npm run compile  将typescript编译成js
npm run watch 编译typescript并且监控运行情况
npm run test 编译typescript并测试
npm run package 本地打包
```



### 文件目录结构说明

```txt
├─.vscode // .vscode开发配置
|
├─node_modules // 相关依赖
│          
├─out // typescript编译好的文件
│          
└─src // 源文件
│    │  extension.ts
│    │  
│    └─test
│         extension.test.ts
│         ndex.ts
│  .gitignore // git忽略文件
│  .vscodeignore // vscode 打包忽略文件
│  CHANGELOG.md // 更新日志
│  package.json
│  README.md
│  tsconfig.json // typescript编译配置
│  tslint.json // tslint配置            
```

