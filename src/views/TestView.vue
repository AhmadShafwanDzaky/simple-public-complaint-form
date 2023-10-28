<script setup lang="ts">
import axios from 'axios'
import InputComps from '@/components/InputComps.vue'
import SelectComps from '@/components/SelectComps.vue'
import TextAreaComps from '@/components/TextAreaComps.vue'
import { defineModel, ref } from 'vue'
import FooterComps from '@/components/FooterComps.vue'
import router from '../router'

const Apaantu: String[] = ['Kesehatan', 'Keamanan', 'Lingkungan', 'Infrastruktur']

const nameInput = ref('')
const titleInput = ref('')
const categoryInput = ref('')
const isiInput = ref('')
const dateInput = ref('')
const locationInput = ref('')
const checkBox = ref(false)

const inputDatas = async () => {
  console.log('sending...')
  // console.log(nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1))
  try {
    await axios.post('http://localhost:5000/datas', {
      nama: nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1),
      judul: titleInput.value.charAt(0).toUpperCase() + titleInput.value.slice(1),
      kategori: categoryInput.value.charAt(0).toUpperCase() + categoryInput.value.slice(1),
      isi: isiInput.value.charAt(0).toUpperCase() + isiInput.value.slice(1),
      tanggal: dateInput.value,
      lokasi: locationInput.value.charAt(0).toUpperCase() + locationInput.value.slice(1)
    })
    nameInput.value = ''
    titleInput.value = ''
    categoryInput.value = ''
    isiInput.value = ''
    dateInput.value = ''
    locationInput.value = ''
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="container">
    <div class="text-wrapper">
      <h1>Form Pengaduan Masyarakat</h1>
      <p>
        Suara Anda menjadi kekuatan untuk perubahan! Sampaikan pengaduan Anda langsung kepada
        pemerintah setempat dan bantu membangun masyarakat yang lebih baik bersama-sama.
      </p>
    </div>
    <div class="wrapper">
      <h2>Sampaikan aduan anda</h2>
      <InputComps label="Nama" placeholder="Nama" v-model="nameInput" type="text" />
      <!-- <input type="text" v-model="nameInput"> -->
      <InputComps label="Judul Aduan" placeholder="Judul aduan" v-model="titleInput" />
      <SelectComps
        label="Kategori Aduan"
        placeholder="Kategori aduan"
        :option="Apaantu.map((a) => a)"
        v-model="categoryInput"
      />
      <TextAreaComps label="Isi Aduan" placeholder="Isi aduan" v-model="isiInput" />
      <InputComps
        label="Tanggal Aduan"
        placeholder="Tanggal aduan"
        v-model="dateInput"
        type="date"
      />
      <InputComps label="Lokasi Kejadian" placeholder="Lokasi kejadian" v-model="locationInput" />

      <div class="checkbox">
        <input type="checkbox" class="checkbox__" id="sk" value="sk" v-model="checkBox" />
        <label class="checkbox-label" for="sk"
          >Saya telah menyetujui <a href="">Syarat dan Ketentuan</a></label
        >
      </div>
      <button
        type="submit"
        :disabled="
          !checkBox ||
          !nameInput ||
          !titleInput ||
          !categoryInput ||
          !isiInput ||
          !dateInput ||
          !locationInput
        "
        id="submitButton"
        @click="inputDatas"
      >
        Kirim Aduan
      </button>
    </div>
  </div>
  <FooterComps label="Data" link="/data" />
</template>

<style>
h1 {
  color: #fddccb;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: -0.288px;
  margin: 0 !important;
  text-align: center;
}

h2 {
  color: #f00005;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.192px;
  margin: 0 !important;
}

p {
  color: #fdb199;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.144px;
  margin: 0 !important;
}

button {
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  background: #f00005;
  font-size: 20px;
  color: #fff;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #e1272a;
}

button:disabled {
  background-color: rgb(183, 183, 183);
}

input.checkbox__ {
  width: 20px;
  height: 20px;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  padding: 80px 64px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  background: #ce0015;
}
.wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 64px 80px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border: 4px solid #ededed;
  background: #fff;
  border-radius: 24px;
}

.checkbox {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 48px 32px;
  }

  .wrapper {
    padding: 32px;
  }
}

@media screen and (max-width: 426px) {
  .container {
    padding: 32px 16px;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }

  .wrapper {
    padding: 20px;
    border-radius: 12px;
  }
}
</style>
