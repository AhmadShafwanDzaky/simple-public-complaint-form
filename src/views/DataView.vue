<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'
import FooterComps from '@/components/FooterComps.vue'

interface IData {
  nama: String
  id_data: Number
}

const Data = ref([])

const DataKeys = ref([])

const getDatas = async () => {
  try {
    const response = await axios.get('http://localhost:5000/datas')
    return response.data
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  Data.value = await getDatas()
  DataKeys.value = Object.keys(Data.value[0])
})

const delDatas = async (id) => {
  console.log('delete...')
  try {
    await axios.delete(`http://localhost:5000/datas/${id}`)
    Data.value = await getDatas()
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="container__table">
    <div class="table__text__wrapper">
      <h2>Data Pengaduan</h2>
      <p class="helper__text"><i>*Scroll ke kanan untuk melihat isi table lainnya</i></p>
    </div>
    <div class="tableee">
      <div class="empty__state" v-if="Data.length === 0">
        <span>Tidak ada data. Silahkan isi formnya terlebih dahulu</span>
        <router-link :to="{ path: `/` }">
          <a class="empty__state__btn">di sini</a>
        </router-link>
      </div>
      <table v-else>
        <tr>
          <th v-for="key in DataKeys">{{ key }}</th>
        </tr>
        <tr v-for="data in Data" :key="data.id_data">
          <td v-for="a in data">{{ a }}</td>
          <button class="delete__button" @click="delDatas(data.id_data)">Delete</button>
        </tr>
      </table>
    </div>

    <FooterComps label="Form" link="/" />
  </div>
</template>

<style>
.container__table {
  display: flex;
  width: 100vw;
  height: 100vh !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  height: auto;
  width: auto;
  padding: 80px 80px 0 80px;
}

table {
  font-family: Inter, sans-serif;
  border-collapse: collapse;
}

.tableee {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.delete__button {
  margin-left: 24px;
  font-size: 16px;
}

::-webkit-scrollbar {
  width: 0;
}

.helper__text {
  display: none;
}

td,
th {
  width: auto;
  border-bottom: 1px solid #dddddd;
  text-align: left;
  padding: 24px 8px;
  color: #151515;
  vertical-align: text-top;
}

@media screen and (max-width: 768px) {
  .container__table {
    width: 100%;
    padding: 24px;
    gap: 24px;
  }

  button {
    font-size: 16px;
  }

  .helper__text {
    display: block;
    font-size: 16px;
  }

  .tableee {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }

  .table__text__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
}

@media screen and (max-width: 426px) {
  .container__table {
    width: 100%;
    padding: 24px;
    gap: 24px;
  }

  button {
    font-size: 12px;
  }

  .helper__text {
    display: block;
    font-size: 12px;
  }

  .tableee {
    width: 100%;
    overflow: scroll;
  }

  .table__text__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
}

.modal__container {
  width: 300px;
  position: relative;
  background-color: white;
  border-radius: 8px;
  border: 1px #e0e0e0;
}

.modal__text__wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.modal__title {
  color: #151515;
  font-size: 32px;
}

.modal__subtitle {
  color: #15151550;
  font-size: 20px;
}

.modal__btn__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  background-color: #f5f5f5;
  padding: 24px 12px;
}

.modal__cancel__btn {
  background-color: none;
  color: #151515;
}

.empty__state {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 6px;
}
</style>
