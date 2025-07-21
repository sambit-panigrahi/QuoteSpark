    const quotes = [
      { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
      { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
      { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
      { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" }
    ];

    function generateQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const selected = quotes[randomIndex];
      document.getElementById("quote").textContent = selected.text;
      document.getElementById("author").textContent = `— ${selected.author}`;
    }