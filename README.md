# learn-vuetify.js
my learning process for vuetify.js

# 新建项目
```bash
vue add <project-name>
```

# 初始化环境
```bash
vue add vuetify
vue add router
vue add typescript
```

# 解决 vscode 报错
在文件 <span>tsconfig.json</span> 添加 "vuetify"
```json
{
  "types": [
    "webpack-env",
    "vuetify",
  ]
}
```