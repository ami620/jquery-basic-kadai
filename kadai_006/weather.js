// jQueryでheadingクラスを追加して、「今日の天気予報」の文字色を赤にしてください。
// $(function() {
//   // id属性がaddの要素がクリックされたら
//   $('#add').on('click', function(){
//     // id属性がtargetの要素にclass属性'sample'を追加
//     $('#target').addClass('sample');
//   });
// });

 $(function() {
   // HTMLが読み込まれたら
   $('window').on('load', function(){
     // id属性がtargetの要素にclass属性'heading'を追加
     $('#target').addClass('heading');
   });
 });