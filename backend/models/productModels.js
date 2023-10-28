import db from "../config/database.js";

export const getData = (result) => {
  db.query("SELECT * FROM data", (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results)
    }
  })
}


export const getDataById = (id, result) => {
  db.query("SELECT  * FROM data WHERE id_data = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0])
    }
  })
}

export const insertData = (data, result) => {
  db.query("INSERT INTO data SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results)
    }
  })
}

export const updateDataById = (data, id, result) => {
  db.query("UPDATE data SET nama = ?, judul = ?, kategori = ?, isi = ?, tanggal = ?, lokasi = ? WHERE id_data = ?", [data.nama, data.judul, data.kategori, data.isi, data.tanggal, data.lokasi, id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results)
    }
  })
}

export const deleteDataById = (id, result) => {
  db.query("DELETE FROM data WHERE id_data = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results)
    }
  })
}