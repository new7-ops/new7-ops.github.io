const balls = document.querySelectorAll('.ball');  

function getRandomColor() {  
    const letters = '0123456789ABCDEF';  
    let color = '#';  
    for (let i = 0; i < 6; i++) {  
        color += letters[Math.floor(Math.random() * 16)];  
    }  
    return color;  
}  

balls.forEach((ball) => {  
    // 随机初始位置  
    ball.style.top = `${Math.random() * (window.innerHeight - 30)}px`;  
    ball.style.left = `${Math.random() * (window.innerWidth - 30)}px`;  

    let velocityY = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1); // 随机垂直速度  
    let velocityX = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1); // 随机水平速度  

    // 动画函数  
    function animateBall() {  
        let posY = parseFloat(ball.style.top);  
        let posX = parseFloat(ball.style.left);  
        posY += velocityY;  
        posX += velocityX;  

        // 碰到上下边界反弹  
        if (posY >= window.innerHeight - 30 || posY <= 0) {  
            velocityY = -velocityY; // 反转垂直速度  
            ball.style.backgroundColor = getRandomColor(); // 变换颜色  
        }  

        // 碰到左右边界反弹  
        if (posX >= window.innerWidth - 30 || posX <= 0) {  
            velocityX = -velocityX; // 反转水平速度  
            ball.style.backgroundColor = getRandomColor(); // 变换颜色  
        }  

        // 设置小球的新位置  
        ball.style.top = `${posY}px`;  
        ball.style.left = `${posX}px`;  

        // 请求下一个动画帧  
        requestAnimationFrame(animateBall);  
    }  

    // 开始动画  
    animateBall();  
});