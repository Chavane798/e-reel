<script>
    import { onMount } from 'svelte';
    
    let videoElement;
    let canvasElement;
    let capturedImage = '';
    let savedImages = [];
  
    onMount(() => {
      loadImage(); // Carrega a imagem ao montar o componente
      loadSavedImages(); // Carrega todas as imagens salvas no LocalStorage
      startCamera(); // Inicia a câmera ao montar o componente
    });
  
    // Função para iniciar a câmera
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream; // Atribui o fluxo da câmera ao elemento de vídeo
      } catch (err) {
        console.error('Erro ao acessar a câmera:', err);
        alert('Não foi possível acessar a câmera. Verifique as permissões.');
      }
    }
  
    function captureImage() {
      const context = canvasElement.getContext('2d');
      context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
      capturedImage = canvasElement.toDataURL('image/png'); // Salva a imagem capturada como base64
    }
  
    function saveImageLocally() {
      if (capturedImage) {
        localStorage.setItem('capturedImage', capturedImage); // Salva a última imagem no LocalStorage
        savedImages.push(capturedImage); // Adiciona a nova imagem ao array de imagens salvas
        localStorage.setItem('savedImages', JSON.stringify(savedImages)); // Atualiza a lista de imagens salvas no LocalStorage
        alert('Imagem salva localmente!');
      }
    }
  
    function loadImage() {
      const storedImage = localStorage.getItem('capturedImage');
      if (storedImage) {
        capturedImage = storedImage;
      }
    }
  
    function loadSavedImages() {
      const images = localStorage.getItem('savedImages');
      if (images) {
        savedImages = JSON.parse(images);
      }
    }
  </script>
  
  <main>
    <h1>Acessando a Câmera</h1>
    <video bind:this={videoElement} autoplay playsinline>
      <track kind="captions" src="/legendas.vtt" srclang="pt" label="Português" default />
    </video>
    <br />
    <button on:click={captureImage} class="button">Capturar Imagem</button>
    <button on:click={saveImageLocally} class="button" disabled={!capturedImage}>Salvar Imagem</button>
    <canvas bind:this={canvasElement} width="600" height="400" style="display: none;"></canvas>
  
    {#if capturedImage}
      <h2>Imagem Capturada:</h2>
      <img src={capturedImage} alt="Imagem Capturada" />
    {/if}
  
    <h2>Imagens Salvas:</h2>
    {#if savedImages.length > 0}
      <div class="saved-images">
        {#each savedImages as image}
          <img src={image} alt="Imagem salva" class="saved-image" />
        {/each}
      </div>
    {:else}
      <p>Nenhuma imagem salva.</p>
    {/if}
  </main>
  
  <style>
    video {
      width: 100%;
      max-width: 600px;
      border: 2px solid #333;
      border-radius: 8px;
    }
  
    .button {
      margin-top: 10px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 5px;
      transition: 0.3s;
    }
  
    .button:hover {
      background-color: darkblue;
    }
  
    img {
      margin-top: 10px;
      width: 100%;
      max-width: 600px;
      border-radius: 8px;
    }
  
    .saved-images {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
  
    .saved-image {
      width: 150px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
    }
  </style>
  