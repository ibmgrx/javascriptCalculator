  	// warning !!! komen dihapus error

    function masukan(num){
  		document.form.tampilan.value = document.form.tampilan.value + num; //simpan nilai
  	}
  	function hasil(){
  		var nilai = document.form.tampilan.value;
  		if(nilai) document.form.tampilan.value = eval(nilai); // cari hasil
  	}
  	function reset(){
  		document.form.tampilan.value = ""; // kosongkan tampilan
  	}
  	function hapus(){
  		var nilai = document.form.tampilan.value;
  		document.form.tampilan.value = nilai.substring(0,nilai.length-1); // hapus satu karakter
  	}
    // ibmgrx
