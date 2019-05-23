// Creare un calendario dinamico con le festività.
// Partiamo dal gennaio 2018 dando la possibilità di cambiare mese,
// gestendo il caso in cui l’API non possa ritornare festività.
// Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018 (unici dati disponibili sull’API).
// Ogni volta che cambio mese dovrò:
// 1. Controllare se il mese è valido (per ovviare al problema che l’API non carichi holiday non del 2018)
// 2. Controllare quanti giorni ha il mese scelto formando così una lista

//API
//https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0.


$(document).ready(function(){

  var mese = moment().month(0).format('MMMM');

  var anno = moment().year(2018).format('YYYY');
  var mese__anno = mese + ' ' +  anno;
  //console.log(mese__anno);

  var giorni__mese = moment(mese__anno).daysInMonth();

  var contenuto = {
    'dato-1': mese__anno,
  }

  //TEMPLATE
  var template__calendario = $('#calendar').html();
  var template__function = Handlebars.compile(template__calendario);
  var html = template__function(contenuto);
  $('.container__calendar').append(html);

  for (var i = 1; i <= giorni__mese; i++) {
    //creo i giorni
    var giorno = i + ' ' + mese;

    var day = {
      'dato-2': giorno,
    }
    var template__days = $('#container__days').html();
    //console.log(template__calendario);
    var template__function = Handlebars.compile(template__days);
    var html1 = template__function(day)
    $('.container__calendar').append(html1);
  }






  $('#next').click(function(){

    var mese__suc = moment().add(1, 'M').format('MMMM');
    console.log(mese__suc);








    // var contenuto = {
    //   'dato-1': mese,
    // }
    //
    // //TEMPLATE
    // var template__calendario = $('#calendar').html();
    // var template__function = Handlebars.compile(template__calendario);
    // var html = template__function(contenuto);
    // $('.container__calendar').append(html);




  });





  // $('#prev').click(function(){
  //
  //   var mese__prec = moment().month(-1).format('MMMM');
  //
  // });




















});
