let object = {
  nama: "Mahrus",
  zodiak: "Gemini",
  alamat: {
    kabupaten: "Kab. Bekasi",
    provinsi: "Jawa Barat",
    negara: "Indonesia",
    kodePos: 17825            // Camelcase => camelCase
  }
};

let alamat = {
  kabupaten: "Kab. Bekasi",
  provinsi: "Jawa Barat",
  negara: "Indonesia",
  kodePos: 17825            // Camelcase => camelCase
}

console.log(object.alamat.kodePos); 
