// 加载页脚到所有页面
document.addEventListener('DOMContentLoaded', function() {
    // 找到页脚容器
    const footerContainer = document.getElementById('footer-container');
    
    if (footerContainer) {
        // 使用fetch加载页脚HTML
        fetch('footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('无法加载页脚');
                }
                return response.text();
            })
            .then(html => {
                // 插入页脚HTML
                footerContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('加载页脚时出错:', error);
            });
    }
}); 