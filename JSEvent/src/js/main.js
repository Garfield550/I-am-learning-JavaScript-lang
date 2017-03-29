import 'normalize.css';
import '../scss/main.scss';
import {draw as drawBall} from './modules/ball';

// 获取 Canvas
let canvas = document.getElementById("jump-ball");
// 如果能获取到 Canvas 继续执行
if (canvas.getContext) {
    // 2D 内容
    let context = canvas.getContext("2d");
    // 球的属性
    let _x = 30;
    let _y = 30;
    let _vx = 2;
    let _vy = 4;
    let _radius = 30;
    let _color = "#767676";
    // requestAnimationFrame
    let raf;

    // 定义动画
    function drawAnimation() {
        // 清理 Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        // 画个球
        drawBall(context, _x, _y, _radius, _color);
        // 球的当前位置
        let _ballXTop = _x - _radius + _vx;
        let _ballYTop = _y - _radius + _vy;
        let _ballXBottom = _x + _radius + _vx;
        let _ballYBottom = _y + _radius + _vy;
        // 球碰到 Canvas 的左右侧弹回
        if (_ballXBottom > canvas.width || _ballXTop < 0) {
            _vx = -_vx;
        }
        // 球碰到 Canvas 的上下侧弹回
        if (_ballYBottom > canvas.height || _ballYTop < 0) {
            _vy = -_vy;
        }
        // 球的移动
        _x += _vx;
        _y += _vy;
        // requestAnimationFrame
        raf = window.requestAnimationFrame(drawAnimation);
    }
    // 添加鼠标移入事件监听
    canvas.addEventListener('mouseover', function (e) {
        raf = window.requestAnimationFrame(drawAnimation);
    });
    // 添加鼠标移出事件监听
    canvas.addEventListener("mouseout", function (e) {
        window.cancelAnimationFrame(raf);
    });
    // 初始化球
    drawBall(context, _x, _y, _radius, _color);
} else {
    console.log("Your broswer not support canvas!");
}