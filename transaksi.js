const barangData = [
  { kode: "001", nama: "A", harga: 10000 },
  { kode: "002", nama: "B", harga: 20000 },
  { kode: "003", nama: "C", harga: 30000 },
];

function tampilkanDataBarang() {
  const barangTable = document.getElementById("barangTable");
  barangData.forEach((barang, index) => {
    const row = barangTable.insertRow(index + 1);
    const kodeCell = row.insertCell(0);
    const namaCell = row.insertCell(1);
    const hargaCell = row.insertCell(2);

    kodeCell.textContent = barang.kode;
    namaCell.textContent = barang.nama;
    hargaCell.textContent = barang.harga;
  });
}

function tambahTransaksi(event) {
  event.preventDefault();

  const kodeInput = document.getElementById("kodeInput");
  const quantityInput = document.getElementById("quantityInput");

  const selectedBarang = barangData.find(
    (barang) => barang.kode === kodeInput.value
  );

  if (!selectedBarang) {
    alert("Kode Barang Tidak Valid");
    return;
  }

  const jumlah = parseInt(quantityInput.value);
  const totalHarga = selectedBarang.harga * jumlah;

  const bayar = window.prompt(
    "Total Yang Harus Dibayar: " +
      totalHarga +
      "\n\n" +
      "Masukkan Jumlah Uang Yang Akan Dibayarkan:"
  );

  if (bayar === null || bayar === "") {
    alert("Transaksi Dibatalkan");
    return;
  }

  const jumlahBayar = parseFloat(bayar);

  if (isNaN(jumlahBayar) || jumlahBayar < totalHarga) {
    alert(
      "Jumlah Transaksi Tidak Valid Atau Kurang Dari Total Yang Harus Dibayar"
    );
    return;
  }

  const kembalian = jumlahBayar - totalHarga;

  alert(
    "Proses Transaksi Berhasil!\n\n" +
      "Total yang harus dibayar: " +
      totalHarga +
      "\n" +
      "Jumlah yang dibayarkan: " +
      jumlahBayar +
      "\n" +
      "Uang Kembalian: " +
      kembalian
  );
}

document.addEventListener("DOMContentLoaded", () => {
  tampilkanDataBarang();
});
