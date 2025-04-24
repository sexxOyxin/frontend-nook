const program = require('commander');

program
.option('-t, --time <number>', '等待时间 (秒)', 1)
.option('-m, --message <string>', '要输出的信息', '默认输出信息')
.parse(process.argv);

(async () => {
  const ora = (await import('ora')).default;
  const spinner = ora('正在加载中，请稍后 ...').start();

  setTimeout(() => {
    spinner.stop();
    console.log(program.opts().message);
  }, program.opts().time * 1000);

})();

// 这个监听保证process.exit、error、执行完毕都会算exit
process.on('exit', () => {
  console.log('exit事件触发');
});
// throw new Error();

// 命令
// node timer.js --message "控制台的命令！" --time 5

