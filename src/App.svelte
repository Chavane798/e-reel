<script>
  import Router  from 'svelte-spa-router';
  import { link } from 'svelte-spa-router';
  import Login from './routes/login/App.svelte';
  import Camera from './routes/camera/App.svelte';

  // Definição das rotas
  const routes = {
    "/login": Login,
    "/camera": Camera
  };
</script>

<Router {routes} />

<nav>
  <a href="/" use:link>Home</a>
  <a href="/login" use:link>Login</a>
  <a href="/camera" use:link>Câmera</a>
</nav>


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
