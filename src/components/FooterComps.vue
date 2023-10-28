<script setup lang="ts">
import router from '../router';

const props = defineProps({
  label: { type: String },
  link: { type: String }
})
</script>

<template>
  <footer class="footer">
    <router-link :to="{ path: `${link}` }">
      <a>{{ label }}</a>
    </router-link>
    
    <div class="text__wrapper">
      <p class="footer__text">Ahmad Shafwan Dzaky</p>
      <hr class="divider">
      <p class="footer__text">D121211053</p>
      <hr class="divider">
      <p class="footer__text">Kelas B</p>
    </div>
    
  </footer>
</template>

<style>
.footer{
  width: 100vw;
  background-color: white;
  padding: 12px 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.text__wrapper{
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
}

.footer__text {
  font-size: 16px;
  color: #151515;
  font-weight: 500;
}

hr.divider{
  border-right: 3px #151515;
  height: 50%;
}
</style>