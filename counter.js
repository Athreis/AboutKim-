document.addEventListener('DOMContentLoaded', function () {
    const counterElement = document.getElementById('counter');
  
    function updateCounter(count) {
      counterElement.textContent = count.toLocaleString();
    }
  
    function startCounter() {
      let count = 0;
      const maxCount = 12897;
      const delay = 1; // 5 detik
  
      function incrementCounter() {
        count += 1;
        updateCounter(count);
  
        if (count < maxCount) {
          setTimeout(incrementCounter, delay);
        }
      }
  
      incrementCounter();
    }
  
    startCounter();
  });
  