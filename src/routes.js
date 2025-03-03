import Home from './routes/home/Home.svelte';
import About from './routes/about/About.svelte';
import Login from './routes/login/Login.svelte';
import Camera from './routes/camera/camera.svelte';

export default {
  '/': Home,
  '/about': About,
  '/login': Login,
  '/camera': Camera

};
