// const quranApi = () =>{
//     const quranData = {
//       'jsonData': "quran.json"
//     };

//     $.ajax({
//         url: `${baseAPI.proxy}${baseAPI.quranMaster}${quranData.jsonData}`,
//         type: 'get',
//         dataType: 'json',
//         data: quranData.jsonData,
//         success: function(res){
//             // alert(res.length);
//             console.log(res);   
//             for(let i = 0; i<=res.length; i++){
//                 const number_surah = res[i].number_of_surah;
//                 const nama_surah = res[i].name;
//                 data.SelectSurah.append(`
//                      <option id="pilih" value="${number_surah}">${nama_surah}</option>
//                 `);
//             }
//         }

//     })
// }



// const showRecitations = () => {
//     data.ModalApi.modal('show');
//     data.ModalBodyApi.html('');
//     const recitation = {
//         'surah': $('#recitations').data('surah')
//     };

//     $.ajax({
//         url: `${baseAPI.proxy}${baseAPI.quran}${recitation.surah}.json`,
//         type: 'get',
//         dataType: 'json',
//         data: recitation.surah,
//         success: function(res){
//             if(res){
//                 const bacaan = {
//                     'name': 
//                     {
//                         'satu': `${res.recitations[0].name}`,
//                         'dua' : `${res.recitations[1].name}`,
//                         'tiga': `${res.recitations[2].name}`
//                     }, 
//                     'audio':
//                     {
//                         'satu': `${res.recitations[0].audio_url}`,
//                         'dua': `${res.recitations[1].audio_url}`,
//                         'tiga': `${res.recitations[2].audio_url}`
//                     }
//                 };

//                 data.ModaLabelApi.text(`${res.name} Recitations `);
//                 data.ModalBodyApi.append(`
//                      <ul>    
//                          <li>
//                              ${bacaan.name.satu} <br/>
//                              <audio controls>
//                                  <source src="${bacaan.audio.satu}" type="audio/mpeg">
//                                  <small class="text-danger">
//                                      Your browser does not support the audio element.
//                                  </small>
//                              </audio>
//                          </li>
//                          <li>
//                              ${bacaan.name.dua}<br/>
//                              <audio controls>
//                                  <source src="${bacaan.audio.dua}" type="audio/mpeg">
//                                  <small class="text-danger">
//                                      Your browser does not support the audio element.
//                                  </small>
//                              </audio>
//                          </li>
//                          <li>
//                              ${bacaan.name.tiga}<br/>
//                              <audio controls>
//                                  <source src="${bacaan.audio.tiga}" type="audio/mpeg">
//                                  <small class="text-danger">
//                                      Your browser does not support the audio element.
//                                  </small>
//                              </audio>
//                          </li>
//                      </ul>
//                 `);

//             }
//         }
//     });
// }


// const showVerses = () => {
//     data.ModalApi.modal('show');
//     data.ModalBodyApi.html('');
//     const verses = {
//         'surah': $('#verses').data('surah'),
//     };
    
//     $.ajax({
//         url: `${baseAPI.proxy}${baseAPI.quran}${verses.surah}.json`,
//         type: 'get',
//         dataType: 'json',
//         data: verses.surah,
//         success: function(res){
//             data.ModaLabelApi.html(`Surah - ${res.name}`);
//             const verses = res.verses;
//             for(let i = 0; i <= verses.length; i++){
//                 const show = (res.verses[i].number === 1) ? 'show' : '';
//                 data.ModalBodyApi.append(`
//                 <div class="accordion" id="accordionExample">
//                     <div class="card">
//                         <div class="card-header" id="heading${i}">
//                             <h2 class="mb-0">
//                                 <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapseOne">
//                                     Ayat ${verses[i].number}
//                                 </button>
//                             </h2>
//                         </div>

//                         <div id="collapse${i}" class="collapse ${show}" aria-labelledby="heading${i}" data-parent="#accordionExample">
//                         <div class="card-body">
//                             <h5><span class="circle">${verses[i].number}</span> &nbsp; <span style="font-size: 31px; font-weight:bold;">${verses[i].text}</span> </h5>
//                             <p>
//                                 Id = ${verses[i].translation_id}<br/><br/>
//                                 En = ${verses[i].translation_en}<br/>
//                             </p>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                     </div>
//                 `);
//             }
//         }
//     });

// }