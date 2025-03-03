<script>
  import Router  from 'svelte-spa-router';
  import routes from './routes.js';
  import { link } from 'svelte-spa-router';
</script>

<nav>
  <a use:link href="/">Home</a>
  <a use:link href="/about">About</a>
  <a use:link href="/login">Login</a>
  <a use:link href="/camera">camera</a>
</nav>

<main>
  <Router {routes} prefix="" />
</main>



