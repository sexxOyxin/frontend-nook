# Git
## 添加远程仓库 or 直接clone远程仓库
```bash
git remote add origin https://github.com/sexxOyxin/frontend-nook.git
git clone https://github.com/sexxOyxin/frontend-nook.git
```

## 查看远程仓库信息
```bash
git remote -v
```

## 设置用户信息
```bash
git config user.name xxx
git config user.email xxx
```

## 查看用户信息
```bash
git config --get user.name
git config --get user.email
```

## 一些 git 操作
```bash
# 创建测试目录
mkdir testdemo

# 查看状态
git status

#把需要的修改提交到暂存区
git add .gitignore   /   git add .

#撤销修改
git restore .gitignore

#撤销暂存
git reset package.json

#删除
rm .gitignore

#提交
git commit -m "提交了xxx"

#撤回上一次commit 有soft、mixed【默认】、hard
git reset HEAD~1

#创建tag 推送tag
git push origin --tags
```

# 实践
```bash
# 创建文件夹
mkdir testdemo

# 创建文件 - 方法1
touch newfile1.md

# 创建文件 - 方法2 -> 输入命令后输入内容 - Ctrl + D结束
cat > newfile2.md

# 创建文件 - 方法3 -> echo内容 > 文件名
echo hhhhh > testdemo/newfile3.md

# 查看状态
git status

# 暂存 + 提交
git add .
git commit -m 'git 练习'

# 创建/切换分支
git branch gitlearn
git checkout gitlearn

# 在 main 分支创建 mainfile 文件 并且commit 切换到 gitlearn 分支看不到mainfile

#

#


```