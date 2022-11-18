let a,
  b,
  awal = 1,
  batas = 100,
  nilai;

nilai = 70;

if (nilai <= 100 && nilai >= 90) {
  console.log("A");
} else if (nilai <= 90 || nilai >= 80) {
  console.log("B");
} else if (nilai <= 80 || nilai >= 70) {
  console.log("C");
} else if (nilai <= 70 || nilai >= 60) {
  console.log("D");
} else if (nilai <= 60 || nilai >= 0) {
  console.log("B");
}

for (awal; awal < batas; awal++) {
  if (awal % 2 == 0) {
    console.log(awal);
  }
}
