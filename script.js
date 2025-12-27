// 等待页面加载完成
document.addEventListener('DOMContentLoaded', () => {

    // 1. 找到页面上的嘤嘤怪图片元素
    const monsterImage = document.getElementById('yingying-monster');

    // 2. 创建一个包含所有音频文件名的数组
    // 请确保这些文件名与你的实际文件匹配！
    const audioFiles = [
        'yingying_1.mp3',
        'yingying_2.mp3',
        'yingying_3.mp3'
    ];
    
    // 基础音量设置 (可以根据需要调整)
    const baseVolume = 0.8; 

    /**
     * 函数：从音频文件名数组中随机选择一个文件
     * @returns {string} 随机选择的音频文件名
     */
    function getRandomAudioFile() {
        // 计算数组的长度
        const arrayLength = audioFiles.length;
        
        // 生成一个介于 0 (包含) 和 arrayLength (不包含) 之间的随机整数
        const randomIndex = Math.floor(Math.random() * arrayLength);
        
        // 返回随机选择的文件名
        return audioFiles[randomIndex];
    }


    // 3. 为图片添加一个“点击”事件监听器
    monsterImage.addEventListener('click', () => {
        
        // 3a. 随机选择要播放的音频文件
        const selectedFile = getRandomAudioFile();
        
        // 3b. 创建一个新的音频对象
        // 每次点击都创建新对象可以确保快速连击时，声音不会被中断
        const soundEffect = new Audio(selectedFile);
        
        // 设置音量
        soundEffect.volume = baseVolume;
        
        // 3c. 播放声音
        soundEffect.play().catch(error => {
            // 捕获播放错误，例如浏览器限制自动播放
            console.log("播放声音遇到了一点小问题:", error);
        });
        
        // 在控制台显示当前播放了哪个文件
        console.log(`嘤嘤怪被捏了！播放了: ${selectedFile}`);
    });
});