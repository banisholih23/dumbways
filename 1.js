		console.log("Uang Awal : Rp.2.921.690");
		console.log("Bunga per-Bulan = 2,1% ");
		console.log("\n");

		var jmlUang = 2921690;
		var bunga = 0.021;
		var hasil="";

		for (let i = 1; i <= 12; i++) {
			jmlUang = jmlUang + (jmlUang * bunga);
			hasil = hasil + "Total Bunga Bulan ke-" + i + " = Rp." + jmlUang + "\n" ;
		}
		console.log(hasil)