// 等待页面加载完成
document.addEventListener('DOMContentLoaded', () => {

    // 1. 找到页面上的嘤嘤怪图片元素
    const monsterImage = document.getElementById('yingying-monster');

    // 2. 创建一个数据结构，将图片和声音文件进行配对
    const monsterPairs = [
        { image: 'monster_1.png', sound: 'yingying_1.mp3' },
        { image: 'monster_2.png', sound: 'yingying_2.mp3' },
        { image: 'monster_3.png', sound: 'yingying_3.mp3' }
        // 如果你有更多配对，可以在这里继续添加！
    ];
    
    // 基础音量设置
    const baseVolume = 0.8; 

    /**
     * 函数：从配对数组中随机选择一组图片和声音
     * @returns {object} 包含 image 和 sound 属性的对象
     */
    function getRandomMonsterPair() {
        const arrayLength = monsterPairs.length;
        // 生成一个介于 0 到 arrayLength-1 的随机整数
        const randomIndex = Math.floor(Math.random() * arrayLength);
        
        // 返回随机选择的配对对象
        return monsterPairs[randomIndex];
    }


    // 3. 为图片添加一个“点击”事件监听器
    monsterImage.addEventListener('click', () => {
        
        // 3a. 随机选择要展示和播放的配对
        const selectedPair = getRandomMonsterPair();
        
        // 3b. **更新图片：** 将图片元素的 src 属性改为随机选择的图片文件
        monsterImage.src = selectedPair.image;
        
        // 3c. **播放声音：** 创建一个新的音频对象并播放
        const soundEffect = new Audio(selectedPair.sound);
        soundEffect.volume = baseVolume;
        soundEffect.currentTime = 0; // 确保声音从头开始
        
        soundEffect.play().catch(error => {
            console.log("播放声音遇到了一点小问题:", error);
        });
        
        // 在控制台显示当前播放了哪个配对
        console.log(`嘤嘤怪被捏了！现在是 ${selectedPair.image}，播放了 ${selectedPair.sound}`);
    });
});