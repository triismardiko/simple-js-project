class Mahasiswa {
  constructor(nama, nim, jurusan, tanggalLahir) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.tanggalLahir = new Date(tanggalLahir);
    this.mataKuliahList = []; // Menyimpan data mata kuliah
  }

  tambahMataKuliah(mataKuliah, dosen, nilaiUTS, nilaiUAS) {
    const nilaiAkhir = (nilaiUTS + nilaiUAS) / 2;
    const mataKuliahData = {
      mataKuliah,
      dosen,
      nilaiUTS,
      nilaiUAS,
      nilaiAkhir,
    };
    this.mataKuliahList.push(mataKuliahData);
  }

  tampilkanInfo() {
    console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}, Tanggal Lahir: ${this.formatTanggalLahir()}`);
    this.tampilkanNilaiAkhir();
  }

  hitungUmur() {
    const today = new Date();
    const birthDate = this.tanggalLahir;
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  formatTanggalLahir() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return this.tanggalLahir.toLocaleDateString('id-ID', options);
  }

  tampilkanNilaiAkhir() {
    if (this.mataKuliahList.length > 0) {
      console.log("Nilai Mata Kuliah:");
      this.mataKuliahList.forEach((mataKuliah) => {
        console.log(`
          Mata Kuliah: ${mataKuliah.mataKuliah}
          Dosen: ${mataKuliah.dosen}
          Nilai UTS: ${mataKuliah.nilaiUTS}
          Nilai UAS: ${mataKuliah.nilaiUAS}
          Nilai Akhir: ${mataKuliah.nilaiAkhir}
        `);
      });
    } else {
      console.log("Belum ada data nilai mata kuliah.");
    }
  }
}

// Contoh penggunaan
const mahasiswa1 = new Mahasiswa("John Doe", "12345", "Teknik Informatika", "1990-05-15");
const mahasiswa2 = new Mahasiswa("Jane Doe", "67890", "Sistem Informasi", "1995-12-20");

// Menambahkan data mata kuliah
mahasiswa1.tambahMataKuliah("Pemrograman Web", "Dosen A", 80, 85);
mahasiswa1.tambahMataKuliah("Basis Data", "Dosen B", 75, 90);

mahasiswa2.tambahMataKuliah("Jaringan Komputer", "Dosen C", 85, 88);
mahasiswa2.tambahMataKuliah("Algoritma dan Struktur Data", "Dosen D", 92, 78);

// Menampilkan informasi mahasiswa beserta nilai akhir
mahasiswa1.tampilkanInfo();
console.log("------------------------");
mahasiswa2.tampilkanInfo();
