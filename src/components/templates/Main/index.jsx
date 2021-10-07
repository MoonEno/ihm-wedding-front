import React, { useEffect } from 'react';
import 'styled-components';
import { css } from 'styled-components';

export const Main = () => {

   let sceneSpec = [
          {
            type: "sticky",
            heightX: 3,
            scrollHeight: 0,
          
          },
          {
            type: "normal",
            heightX: 1,
            scrollHeight: 0,
           
          },
          {
            type: "sticky",
            heightX: 4,
            scrollHeight: 0,
          },
          {
            type: "sticky",
            heightX: 7,
            scrollHeight: 0,
          },
   ];

   let yOffset = 0;
   let totalYOffset = 0; // 페이지 토탈 스크롤 길이
   let prevScrollHeight = 0; // 현재 스크롤 위치 이정보다 위치한 스크롤 섹션의 총 합
   let currentScene = 0; // 현재 액티브중인 씬

   // 화면별 컨텐츠 레이아웃 세팅
   const setLayout = () => {
       let total = 0;
       let mArr = [];
       sceneSpec.map((i, idx) => {
          let cp = _.cloneDeep(i);
          cp.obj = {
              container: document.querySelector(`#scroll-section-${idx}`)
          }
          cp.scrollHeight = cp.heightX * window.innerHeight
          cp.obj.container.style.height = `${cp.scrollHeight}px`;
          total += cp.scrollHeight;
          mArr.push(cp);
       });
       sceneSpec = mArr;
       totalYOffset = total;
   };

   // 현재 스크롤 위치 확인
   const currentScroll = () => {
       yOffset = window.pageYOffset;
   }

   const curScene = () => {
       let prevHeight = 0;
       let cNum = currentScene;
       for (let i =0; i < currentScene; i++) {
           console.log("here1");
           prevHeight += sceneSpec[i].scrollHeight;
        }
       console.log(yOffset, prevHeight + sceneSpec[cNum].scrollHeight, currentScene);
       if (yOffset > prevHeight + sceneSpec[cNum].scrollHeight) {
           currentScene = cNum++;
           console.log("aaa", cNum, currentScene);
       }

       if (yOffset < prevHeight) {
           currentScene = cNum--;
           console.log("bbb", cNum, currentScene);
       }

   }

  
   useEffect(() => {
     setLayout();
     window.addEventListener('resize', setLayout);
     return () => window.removeEventListener('resize', setLayout);
   }, []);


   useEffect(()=> {
     window.addEventListener('scroll', () => {
        currentScroll();
        curScene();
     });
   }, [])

  return (
    <>
      <section className="scroll-section" id="scroll-section-0">
        <h1> Welcome Wedding</h1>
        <div className="sticky-element main-message">
          <p> 동해물과 백두산이 <br></br> 마르고 닳도록 </p>
        </div>
        <div className="sticky-element main-message">
          <p> 하느님이 보우하사 우리나라 만세 </p>
        </div>
        <div className="sticky-element main-message">
          <p> 무궁화 삼천리 화려강산 </p>
        </div>
        <div className="sticky-element main-message">
          <p> 대한사람 대한으로 길이 보전하세 </p>
        </div>
      </section>

      <section className="scroll-section" id="scroll-section-1">
        <p className="description">
          <strong> 강조 영역 </strong>
          Lorem ipsum dolor sit amet, consecture, test everythigs, in the
          miracle oh nol ra woe ra
        </p>
      </section>
      <section className="scroll-section" id="scroll-section-2">
        <div className="sticky-element main-message">
          <p>
            <small>편안한 촉감</small>
            입과 하나가 되다
          </p>
        </div>
        <div className="sticky-element desc-message">
          <p>
            파란하늘 하늘색 풍선은 우리 맘속에 영원할꺼야 너희들의 그 예쁜마음은
            우리가 항상 지켜줄꺼야
          </p>
          <p className="pin"></p>
        </div>
        <div className="sticky-element desc-message">
          <p>
            나 어쩌면 너에게 하고싶은 말은 긴긴밤을 지새도 아직 너를 너무
            사랑한다고 이아픈 시간이 어서 지나가기를 조금만 더 버텨볼께
          </p>
          <p className="pin"></p>
        </div>
      </section>
      <section className="scroll-section" id="scroll-section-3">
        <p className="mid-message">
          <strong>다비치 어쩌면 너에게</strong>
          SBS, KBS 3주연속 1위 감사합니다.
        </p>
        <p className="canvas-caption">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at
          fuga quae perspiciatis veniam impedit et, ratione est optio porro.
          Incidunt aperiam nemo voluptas odit quisquam harum in mollitia.
          Incidunt minima iusto in corporis, dolores velit. Autem, sit dolorum
          inventore a rerum distinctio vero illo magni possimus temporibus
          dolores neque adipisci, repudiandae repellat. Ducimus accusamus
          similique quas earum laborum. Autem tempora repellendus asperiores
          illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente
          rerum neque error deleniti quis, et, quibusdam, est autem voluptate
          rem voluptas. Ratione soluta similique harum nihil vel. Quas inventore
          perferendis iusto explicabo animi eos ratione obcaecati.
        </p>
      </section>
    </>
  );
};
