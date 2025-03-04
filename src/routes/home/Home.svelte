<script>
  import { link } from 'svelte-spa-router';
</script>

<head>
<link href="/src/app.css" rel="stylesheet">
</head>

<div class="bg-blue">
<main class="flex flex-col gap-10 w-full max-w-4xl">
  <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900">Event-Reel</h1>
      <p class="text-lg text-gray-600 mt-2">Make every instant memorable!</p>
  </div>

  <div class="mt-6">
    <a href="/login" use:link>
        <button class="w-48 h-12 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md transition hover:bg-blue-700">
            Login
        </button>
    </a>
  </div>
</main>
</div>
