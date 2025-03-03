
<script>
    import { link } from 'svelte-spa-router';
</script>
<main>

    <div class="container">
      <div class="message">
        <h1>Event-Reel</h1>
        <p>Make every instant memorable!</p>
      </div>
      
      <div class="button-container">
        <a href="/login" use:link>
          <button class="button">Login</button>
        </a>
      </div>
  
    </div>
  </main>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
  
    .message {
      margin-bottom: 20px;
      text-align: center;
    }
  
    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .button {
      background-color: blue;
      padding: 10px 20px;
      margin: 8px;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      font-size: 25px;
      text-align: center;
      width: 200px;
      height: 50px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .button:hover {
      background-color: darkblue;
    }
  </style>