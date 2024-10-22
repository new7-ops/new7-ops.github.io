const images = [  
    document.getElementById('image1'),  
    document.getElementById('image2'),  
    document.getElementById('image3')  
];  

let currentIndex = 0;  

function startAnimation() {  
    // 禁用按钮，防止重复点击  
    document.getElementById('start-button').disabled = true;  

    // 循环显示图片  
    const intervalId = setInterval(() => {  
        images[currentIndex].style.opacity = 0; // 当前图片淡出  

        // 更新索引  
        currentIndex = (currentIndex + 1) % images.length; // 循环回到第一张  

        // 让下一张图片淡入  
        images[currentIndex].style.opacity = 1;  

        // 如果展示完最后一张图片，停止动画  
        if (currentIndex === 0) {  
            clearInterval(intervalId);  
            document.getElementById('start-button').disabled = false; // 恢复按钮  
        }  
    }, 3000); // 每3秒切换一次  
}  

document.getElementById('start-button').addEventListener('click', startAnimation);