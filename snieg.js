function createSnowflake() {
    const snieg = document.createElement('div');
    snieg.className = 'snieg';
    snieg.style.left = Math.random() * window.innerWidth + 'px';
    snieg.style.animationDuration = Math.random() * 2 + 4 + 's'; 
    document.body.appendChild(snieg);

    setTimeout(() => {
        snieg.remove();
    }, 10000); 

    return snieg;
}

function createSnowfall() {
    setInterval(() => {
        createSnowflake();
    }, 200);
}

createSnowfall();