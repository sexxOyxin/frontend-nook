const test = () => {
    console.log('testtesttest');
    return 'test返回值';
}

const os = require('os');

const getUserInfo = () => {
    console.log('当前用户', os.userInfo().username);
    console.log('当前进程 ID', process.pid);
    console.log('当前脚本路径', __filename);
}

const getDate = () => {
    const time = new Date();
    return time.toLocaleString();
};

// 将test函数添加到exports对象
exports.test = test; //   其实和 module.exports.test = test 一样
exports.getUserInfo = getUserInfo;
exports.getDate = getDate;
// console.log(module, '+++++');