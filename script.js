function toggleMoreInfo() {
    const moreInfo = document.getElementById('more-info');
    const button = document.getElementById('more-info-btn');
    
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        button.textContent = 'Show Less';
    } else {
        moreInfo.style.display = 'none';
        button.textContent = 'Learn More';
    }
}
