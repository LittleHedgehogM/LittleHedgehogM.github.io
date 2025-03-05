<script setup lang="ts"></script>

<template>
  <main>
    <div class="container">
      <img src="/src/assets/images/general/BG.png" alt="Background" class="background-image" />
      <div class="content">
        <img
          src="/src/assets/images/general/redline.png"
          alt="Foreground Image 1"
          class="foreground-image"
        />
        <img
          src="/src/assets/images/general/blueline.png"
          alt="Foreground Image 2"
          class="foreground-image"
        />
        <h1>Your Title Here</h1>
        <p>Your text here. Add more details about your portfolio.</p>
        <button>Click Me</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
}

.foreground-image {
  margin: 10px;
}
</style>
