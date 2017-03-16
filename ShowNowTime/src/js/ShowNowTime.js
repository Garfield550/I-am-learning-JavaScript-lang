module.exports =  function () {
    // 定时, 每 1 秒更新一次时间
    setInterval(() => {
        // 显示时间
        document.getElementById("now-time").innerText = nowTime();
    }, 1000);
}

function nowTime() {
    // 调用 Date() 对象
    let nowTime = new Date();
    // 获取小时
    let hours = nowTime.getHours();
    // 获取分钟
    let minutes = nowTime.getMinutes();
    // 获取秒
    let seconds = nowTime.getSeconds();
    // 判断是早上还是晚上
    let timeOfDay = (hours < 12) ? "AM" : "PM";
    // 格式化成 12 小时制.
    hours = (hours > 12) ? (hours - 12) : hours;
    // 如果时间为 0 点, 则改为 12 点.
    hours = (hours === 0) ? 12 : hours;
    // 当分钟小于 10, 在前面加 0 .
    minutes = ((minutes < 10) ? "0" : "") + minutes;
    // 当秒数小于 10, 在前面加 0 .
    seconds = ((seconds < 10) ? "0" : "") + seconds;
    // 返回格式化好的时间 HH:mm:ss XX.
    return hours + ":" + minutes + ":" + seconds + " " + timeOfDay;
}