<script>
    let username = '';
    let password = '';
    
    function handleSubmit() {
      console.log('User:', username);
      console.log('Password:', password);
      // Aqui você pode adicionar a lógica de autenticação ou navegação
    }
  </script>
  
  <main>
    <div class="login-container">
      <h1>Login</h1>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="input-group">
          <label for="username">Username</label>
          <input
            id="username"
            type="text"
            bind:value={username}
            placeholder="Enter your username"
          />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            bind:value={password}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" class="button">Login</button>
      </form>
    </div>
  </main>
  
  <style>
    .login-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      padding: 20px;
    }
    
    .input-group {
      margin-bottom: 15px;
      width: 100%;
      max-width: 300px;
    }
  
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }
  
    input {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  
    .button {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      background-color: blue;
      color: white;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .button:hover {
      background-color: darkblue;
    }
  </style>
  
