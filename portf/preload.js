
const frames = [
  `            .,yS$$$Ii:..
        ,d$$$$$$$$SSSIIIi:-
       ,d$$Z$$$$S$SiiSSIiii:-
      d$$$$SS$$SSIb::?SSIiii:-
     i$$$$Z$$$$?Ii?:-iSIiiii:-
    -$$$$S?i$$SISSI:- :i?ii:--
   :$$$S7:?I$SII?:-  ;i777:--
   -S$$(:-:?I7'°'   ,dª'  -;
    ?'"°4b. ¨   _ ª'   .:?'
     \   ?$bu%d°¨- . . :7
      j$b,$SSª' . 'i: .
       ' ª$ '°'  .:;.-d:
          jSb;.' '?iIk-
          ??' \ ',$SIi:'
            ' ,p$$S7º'
              'S$S7°'
               ?ª'  
`,
  `          _.,odSippp¬,.
       .o$$$$$$$$SSIIII:::.
     d$$$$$$SIS$$SSSZZZIII:-
    J$$$$$7' :iS$$$$SSSSIII:-
   .d$$$7 .::iII$$$$$?SSSii:-
   '?ª$$L .::iIIS$$$$$b:SSSII:
   ,d, '?b -:id$$$$$$Si:?SII::
   4$?   i$: .:?S$$Sª' .-; ;?:
   ?b' '?p$Lp,._   ..ª'  , -:
    j$b:?$SIS$$7ª' j ?i::::/
    ?I$k. 'º'¨  ,._.d$.'?i: 
     .:^|.:-.' '4$S?::.
               '?$L:?.
             .\'j:$b:i:
          .• \',d$7:$?.
            'y$$$?i7°'
             ?$S7º'
              ..'
`
];

document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  let dotCount = 0;
  const loader = document.getElementById("loader");
  const bar = document.querySelector(".bar");
  const fillBar = document.querySelector(".fill");
  const loadingText = document.querySelector(".loading-text");
  const loadingSpan = document.querySelector(".loading-text span"); 
  const completeText = document.getElementById("completeText");

  if (loader) {
    setInterval(() => {
      loader.textContent = frames[index];
      index = (index + 1) % frames.length;
    }, 390);
  } else {
    console.error("Елемент з id 'loader' не знайдено!");
  }

  if (bar) {
    bar.style.display = "none";
  }
  if (loadingText) {
    loadingText.style.display = "none";
  }

  setTimeout(() => {
    if (bar) {
      bar.style.display = "block";
    }
    if (loadingText) {
      loadingText.style.display = "block";
    }
    if (fillBar) {
      fillBar.style.animation = "load 4s ease-in-out forwards";
    }

    const dotsInterval = setInterval(() => {
      dotCount = (dotCount % 3) + 1;
      if (loadingSpan) {
        loadingSpan.textContent = ".".repeat(dotCount);
      }
    }, 500);
    setTimeout(() => {
      clearInterval(dotsInterval);

      if (loadingText) {
        loadingText.style.display = "none";
      }
      if (completeText) {
        completeText.style.display = "block";
        completeText.hidden = false;
      }
    }, 4000);
  }, 490);

  const skipBtn = document.querySelector(".skipBtn");
  let finished = false;

  function finishIntro() {
    if (finished) return;
    finished = true;

    window.location.href = "index.html";
  }

  skipBtn?.addEventListener("click", finishIntro);
     setTimeout(() => {
          window.location.href = "index.html"; 
        }, 4800);
});


// END

