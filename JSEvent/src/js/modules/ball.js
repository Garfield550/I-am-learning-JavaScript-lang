export {draw};
// 球的 draw 方法
function draw(context, x, y, radius, color) {
    let circle = new Path2D();
    let startAngle = 0;
    let endAngle = Math.PI * 2;
    // 填充色
    context.fillStyle = color;
    // 画个圆
    circle.arc(x, y, radius, startAngle, endAngle);
    // 填充到内容里
    context.fill(circle);
}