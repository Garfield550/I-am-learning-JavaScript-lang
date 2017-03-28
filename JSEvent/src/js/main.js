import 'normalize.css';
import '../scss/main.scss';

// 获取 Canvas
let canvas = document.getElementById("jump-ball");
// 如果能获取到 Canvas 继续执行
if (canvas.getContext) {
    // 2D 内容
    let context = canvas.getContext("2d");
    // requestAnimationFrame
    let raf;
    // 定义球类
    let ball = {
        // 球的属性
        _x: 30,
        _y: 30,
        _vx: 2,
        _vy: 4,
        _radius: 30,
        _color: "#767676",
        _startAngle: 0,
        _endAngle: Math.PI * 2,
        // 球的 draw 方法
        draw: function () {
            let circle = new Path2D();
            // 填充色
            context.fillStyle = ball._color;
            // 画个圆
            circle.arc(ball._x, ball._y, ball._radius, ball._startAngle, ball._endAngle);
            // 填充到内容里
            context.fill(circle);
        }
    }
    // 定义动画
    function draw() {
        // 清理 Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        // 画个球
        ball.draw();
        // 球的当前位置
        let _ballXTop = ball._x - ball._radius + ball._vx;
        let _ballYTop = ball._y - ball._radius + ball._vy;
        let _ballXBottom = ball._x + ball._radius + ball._vx;
        let _ballYBottom = ball._y + ball._radius + ball._vy;
        // 球碰到 Canvas 的左右侧弹回
        if (_ballXBottom > canvas.width || _ballXTop < 0) {
            ball._vx = -ball._vx;
        }
        // 球碰到 Canvas 的上下侧弹回
        if (_ballYBottom > canvas.height || _ballYTop < 0) {
            ball._vy = -ball._vy;
        }
        // 球的移动
        ball._x += ball._vx;
        ball._y += ball._vy;
        // requestAnimationFrame
        raf = window.requestAnimationFrame(draw);
    }
    // 添加鼠标移入事件监听
    canvas.addEventListener('mouseover', function (e) {
        raf = window.requestAnimationFrame(draw);
    });
    // 添加鼠标移出事件监听
    canvas.addEventListener("mouseout", function (e) {
        window.cancelAnimationFrame(raf);
    });
    // 初始化球
    ball.draw();
} else {
    console.log("Your broswer not support canvas!");
}