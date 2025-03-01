<script>
    import { onMount } from 'svelte';
  
    let videoElement;
    let canvasElement;
    let capturedImage = '';
  
    onMount(() => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoElement.srcObject = stream;
        })
        .catch((err) => {
          console.error('Erro ao acessar a câmera:', err);
        });
    });
  
    function captureImage() {
      const context = canvasElement.getContext('2d');
      context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
      capturedImage = canvasElement.toDataURL('image/png'); // Salva a imagem capturada como base64
    }
  </script>
  
  <main>
    <h1>Acessando a Câmera</h1>
    <video bind:this={videoElement} autoplay playsinline></video>
    <br />
    <button on:click={captureImage} class="button">Capturar Imagem</button>
    <canvas bind:this={canvasElement} width="600" height="400" style="display: none;"></canvas>
  
    {#if capturedImage}
      <h2>Imagem Capturada:</h2>
      <img src={capturedImage} alt="Imagem Capturada" />
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
  </style>