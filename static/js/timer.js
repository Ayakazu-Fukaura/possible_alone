// ここは小松さんがJavaScriptをする場所(①・②)




// ここまで

// ここは村上さんがJavaScriptをする場所(③・④)

// ここはタイマーエリア

var timer1; //タイマーを格納する変数（タイマーID）の宣言


//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function cntStart()
{
  document.timer.elements[2].disabled=true;
  timer1=setInterval("countDown()",1000);
}

//タイマー停止関数
function cntStop()
{
  document.timer.elements[2].disabled=false;
  clearInterval(timer1);
}

//カウントダウン関数
function countDown()
{
  var min=document.timer.elements[0].value;
  var sec=document.timer.elements[1].value;
  
  if( (min=="") && (sec=="") )
  {
    alert("時刻を設定してください！");
    reSet();
  }
  else
  {
    if (min=="") min=0;
    min=parseInt(min);
    
    if (sec=="") sec=0;
    sec=parseInt(sec);
    
    tmWrite(min*60+sec-1);
  }
}

//残り時間を書き出す関数
function tmWrite(int)
{
  int=parseInt(int);
  
  if (int<=0)
  {
    reSet();
    alert("時間です！");
  }
  else
  {
    //残り分数はintを60で割って切り捨てる
    document.timer.elements[0].value=Math.floor(int/60);
    //残り秒数はintを60で割った余り
    document.timer.elements[1].value=int % 60;
  }
}

//フォームを初期状態に戻す（リセット）関数
function reSet()
{
  document.timer.elements[0].value="0";
  document.timer.elements[1].value="0";
  document.timer.elements[2].disabled=false;
  clearInterval(timer1);
}  

  // ここまで

  // はなまるをフワッと出させるエリア

    const targets = document.getElementsByClassName('fade');
    for(let i = targets.length; i--;){
    let observer = new IntersectionObserver((entries, observer) => {
      for(let j = entries.length; j--;){
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add('active');
      } else{
        entries[j].target.classList.remove('active');
      }
      }
    });
    observer.observe(targets[i]);
    }

  // ここまで


  // ハムスターのコメントを下から出すエリア

        /**
 * 到達したら要素を表示させる
 */
function showElementAnimation() {

  var element = document.getElementsByClassName('says');
  if(!element) return; // 要素がなかったら処理をキャンセル
  
  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

  // ここまで

// ここまで


// ここは深浦さんがJavaScriptをする場所(⑤・⑥・⑦)




// ここまで