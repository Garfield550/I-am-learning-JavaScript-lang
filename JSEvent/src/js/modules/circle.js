export {draw};
// 圆的 draw 方法
function draw(context, args) {
    let circle = new Path2D();
    // 填充色
    context.fillStyle = args.color;
    // 画个圆
    circle.arc(args.x, args.y, args.radius, args.startAngle, args.endAngle);
    // 填充到内容里
    context.fill(circle);
}