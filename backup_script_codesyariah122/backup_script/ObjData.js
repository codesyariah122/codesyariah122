const ObjData = {
	'hasil': $('.hasil'),
	'ViewAyat': $('.view-ayat'),
	'cari': $('#cari'),
	'selectSurah': $('#select-surah'),
	'pilihSurah': $('#pilih-surah'),
	'loader': $('.loader'),
	'loaderDua': $('.loader2'),
	'Error': $('.error'),
	'Pagination': $('.pagination'),
	'Next': $('#next'),
	'Prev': $('#prev'),
	'prop': 'surah',
	'selectElementFetch': {
		'selectorId': document.getElementById('select-surah'),
		'createOptionElement': document.createElement('option'),
	},
	'api': {
		'proxy': 'https://cors-anywhere.herokuapp.com/',
		'quran': 'https://api.quran.sutanlab.id/surah/',
		'ayat': 'https://api.quran.sutanlab.id/surah/',
		'quranSelect': 'https://api.quran.sutanlab.id',
	}
}
