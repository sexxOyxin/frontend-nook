# node_modules文件不自动定位
打开VSCode的setting配置，搜索Auto Reveal Exclude，可以看到自动打开文件/目录的排除配置，把**/node_modules那一项去掉就可以了。

# cmd + ,
快捷打开设置页面

# 修改文件粘贴路径
打开设置页，搜索 markdown.copy，找到Markdown › Copy Files: Destination。
key：```**/*.md```
value【我想将图片放在当前文件夹的images中】：```images/${fileName}```
![mdcopy](images/image.png)


# 自定义保存
找到VSCode的设置页，搜索 Auto Save，我比较喜欢失焦保存。
![autosave](images/image-1.png)

# 空文件-空文件 并排显示
找到VSCode的设置页，在设置页面搜索 Compact Folders，把这项勾选掉，就可以了。

# 缩略图
![suoluetu](images/image-4.png)

# ts显示类型
找到VSCode的设置页搜索 ```TypeScript › Inlay Hints › Enum Member Values```，选择自己要显示的类型。

# 生成目录树
安装插件 project-tree，快捷键 Ctrl+Shift+P 然后输入 Project Tree，查看 README.md 生成好的树。
![projecttree](images/image-2.png)

# 好用插件 - TODO TREE
还有一个类似的叫 TODO Highlight，但是我比较喜欢可以展示在目录里面的哈哈
![todotree](images/image-3.png)

笨人的设置效果：
![xiaoguo](images/image-5.png)
配置代码：
```json
  "todo-tree.highlights.defaultHighlight": {
    "type": "text",
    "foreground": "#3478c6",
    "opacity": 0.5,
    "iconColour": "#3478c6",
    "gutterIcon": true
  },
  "todo-tree.general.tags": [
    "todo",
    "mark",
    "bug",
  ],
  "todo-tree.highlights.customHighlight": {
    "todo": {
      "type": "text-and-comment",
      "foreground": "#FF9800",
      "iconColour": "#FF9800",
    },
    "mark": {
      "icon": "unverified",
      "type": "text-and-comment",
      "foreground": "#1ed6c0",
      "iconColour": "#1ed6c0",
    },
    "bug": {
      "icon": "bug",
      "foreground": "#ff0000",
      "iconColour": "#ff0000",
      "type": "text-and-comment",
    }
  }
```
参考文档：
https://blog.csdn.net/Ztt300/article/details/124474324

