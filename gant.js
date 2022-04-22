//1.Save クリックイベント
$("#save").on("click",function(){
    const key = $("#key").val()
    const memo = $("#memo").val()
    console.log(key)
    console.log(memo)
    localStorage.setItem(key,memo);
    //localStorageに保存されるものをオブジェクトにしたい
    // localStorage.setItem("myObject",JSON.stringify(memo))

    const html = `
    <tr>
        <th>${key}</th>
        <td>${memo}</td>
    </tr>
    `;

    // 画面に表示
    $("#list").append(html);


})
// localStorage.setItem(key,memo);

// const html=`
//     <tr>
//         <th>${key}</th>
//         <td>${memo}</td>        
//     </tr>
// `
// $("#list").append(html)





//2.clear クリックイベント
// let clear_name =  $("clear-name").val
// $("#clear").on("click",function(){
//     localStorage.removeItem(clear_name)
//     $("#list").empty()
// })

$("#clear").on("click",function(){
    const clear_name =  $("#clear-name").val()
    localStorage.removeItem(clear_name)
    $("#list").empty(clear_name)
})

//3.ページ読み込み：保存データ取得表示
for(let i = 0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key)
    // const value = JSON.parse(localStorage.getItem(key))
    // console.log(value)

    const html = `
        <tr>
            <th>${key}</th>
            <td>${value}</td>
    `
    $("#list").append(html)
}

//ガントチャートカレンダー部分
window.onload = function() {
    // タスクを用意(sample)
    //ログとして残したタスクに変更してください
    var tasks = [
      {
          name: 'テスト１',start: '2022-04-21',end: '2022-04-27',progress: 100,
      },
      {
          name: 'テスト２',start: '2022-04-21',end: '2022-04-28',progress: 100,
      },
      {
          name: 'cccc',start: '2022-04-25',end: '2022-04-29',progress: 40,
      },
    ];

    //localstrageの中身と連動させたい
    //Q.ここがうまくいかない理由を質問したいです。
    //おそらくlocalStrageの中身をオブジェクトにできてないので、上記のサンプルと同様の仕様に変換できてないのだと考えてます。
    // var tasks =[];
    // console.log(tasks)
    // for(let i = 0; i<localStorage.length; i++){
    //     const key = localStorage.key(i);
    //     console.log(key)
    //     tasks.push(JSON.parse(localStorage.getItem(key)))
    //     console.log(tasks)
    // }
    // gantt をセットアップ
    var gantt = new Gantt("#gantt", tasks, {
      // ダブルクリック時
      on_click: (task) => {
        console.log(task.description);
      },
      // 日付変更時
      on_date_change: (task, start, end) => {
        console.log(`${task.name}: change date`);
      }
    });
  };



