
 function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    snowflake.style.left = '595px';
    snowflake.style.top = '650px';
 
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
      snowflake.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(snowflake);
      }, 700);
    }, 900);
  }

  setInterval(createSnowflake, 1750);