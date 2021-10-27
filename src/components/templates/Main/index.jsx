import React, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import CountUp from 'react-countup';
import 'styled-components';

export const Main = () => {

    // 변수생성
    // const [yOffset, setYOffset] = useState(0); // window.pageYOffset 대신 쓸 변수
    // const [prevScrollHeight, setPrevScrollHeight] = useState(0); // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
    // const [currentScene, setCurrentScene] = useState(0); // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)
    // const [enterNewScene, setEnterNewScene] = useState(false);
    // const [acc, setAcc] = useState(0.2);
    // const [delayedYOffset, setDelayedYOffset] = useState(0);
    // const [rafId, setRafId] = useState('');
    // const [rafState, setRafState] = useState('');
    // const [sceneInfo, setSceneInfo] = useState([]);

    const [accountDisplay, setAccountDisplay] = useState({});
    const [mDisplayStr, setMDisplayStr] = useState('신랑측 계좌번호 확인');
    const [mAccountShow, setMAccountShow] = useState(false);
    const [gDisplayStr, setGDisplayStr] = useState('신부측  계좌번호 확인');
    const [gAccountShow, setGAccountShow] = useState(false);
    const [winYoffset, setWinYoffset] = useState(0);

    const [preventScroll, setPreventScroll] = useState(true);
    const [scrollAble, setScrollAble] = useState(false);
    
    let yOffset = 0; // window.pageYOffset 대신 쓸 변수
    let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
    let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)
    let enterNewScene = false; // 새로운 scene이 시작된 순간 true
    let acc = 0.2;
    let delayedYOffset = 0;
    let rafId;
    let rafState;
    let lSceneInfo = [];

    const settingSceneInfo = () => {
        let sceneInfoList = [
            {
                // 0 스타일 세팅
                type: 'sticky',
                heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
                scrollHeight: 0,
                objs: {
                    container: document.querySelector('#scroll-section-0'),
                    messageA: document.querySelector('#scroll-section-0 .main-message.a'),
                    messageB: document.querySelector('#scroll-section-0 .main-message.b'),
                    messageC: document.querySelector('#scroll-section-0 .main-message.c'),
                    messageD: document.querySelector('#scroll-section-0 .main-message.d'),
                    videoElem: document.querySelector('.main-video'),
                    // canvas: document.querySelector('#video-canvas-0'),
                    // context: document.querySelector('#video-canvas-0').getContext('2d'),
                    videoImages: []
                },
                values: {
                    // videoImageCount: 659,
                    // imageSequence: [0, 658],
                    video_opacity: [1, 0, { start: 0.9, end: 1 }],
                    messageA_opacity_in: [0.6, 1, { start: 0, end: 0.25 }],
                    messageB_opacity_in: [0, 1, { start: 0.3, end: 0.5 }],
                    messageC_opacity_in: [0, 1, { start: 0.55, end: 0.8 }],
                    // messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
                    messageA_translateY_in: [90, 0, { start: 0.05, end: 0.25 }],
                    messageB_translateY_in: [90, 0, { start: 0.3, end: 0.5 }],
                    messageC_translateY_in: [90, 0, { start: 0.55, end: 0.8 }],
                    // messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
                    messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
                    messageB_opacity_out: [1, 0, { start: 0.5, end: 0.55 }],
                    messageC_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
                    // messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
                    messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
                    messageB_translateY_out: [0, -20, { start: 0.5, end: 0.55 }],
                    messageC_translateY_out: [0, -20, { start: 0.8, end: 0.9}],
                    // messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }]
                }
            },
            {
                // 1
                type: 'normal',
                // heightNum: 5, // type normal에서는 필요 없음
                scrollHeight: 0,
                objs: {
                    container: document.querySelector('#scroll-section-1'),
                    content: document.querySelector('#scroll-section-1 .description')
                }
            },
            {
                // 2
                type: 'sticky',
                heightNum: 5,
                scrollHeight: 0,
                objs: {
                    container: document.querySelector('#scroll-section-2'),
                    messageA: document.querySelector('#scroll-section-2 .a'),
                    messageB: document.querySelector('#scroll-section-2 .b'),
                    messageC: document.querySelector('#scroll-section-2 .c'),
                    videoElem: document.querySelector('.second-video'),
                    // canvas: document.querySelector('#video-canvas-1'),
                    // context: document.querySelector('#video-canvas-1').getContext('2d'),
                    videoImages: []
                },
                values: {
                    // videoImageCount: 620,
                    // imageSequence: [0, 619],
                    video_opacity_in: [0, 1, { start: 0, end: 0.1 }],
                    video_opacity_out: [1, 0, { start: 0.95, end: 1 }],
                    messageA_translateY_in: [70, 0, { start: 0.1, end: 0.3 }],
                    messageA_opacity_in: [0.4, 1, { start: 0.35, end: 0.75 }],
                    messageA_translateY_out: [0, -30, { start: 0.8, end: 0.9 }],
                    messageA_opacity_out: [1, 0, { start: 0.9, end: 0.95 }],
                }
            },
            {
                // 3
                type: 'sticky',
                heightNum: 4,
                scrollHeight: 0,
                objs: {
                    container: document.querySelector('#scroll-section-3'),
                    canvasCaption: document.querySelector('.canvas-caption'),
                    canvas: document.querySelector('.image-blend-canvas'),
                    context: document.querySelector('.image-blend-canvas').getContext('2d'),
                    imagesPath: [
                        '../images/blend-img-1.png',
                        '../images/blend-img-2.png'
                    ],
                    images: [],

                    // index2 추가 코드
                    messageA: document.querySelector('#scroll-section-3 .main-message.a')
                },
                values: {
                    rect1X: [0, 0, { start: 0, end: 0 }],
                    rect2X: [0, 0, { start: 0, end: 0 }],
                    blendHeight: [0, 0, { start: 0, end: 0 }],
                    canvas_scale: [0, 0, { start: 0, end: 0 }],
                    canvasCaption_opacity: [0, 1, { start: 0, end: 0 }],
                    canvasCaption_translateY: [20, 0, { start: 0, end: 0 }],
                    rectStartY: 0,

                    // index2 추가 코드
                    messageA_opacity_in: [0, 1, { start: 0, end: 0 }],
                    messageA_opacity_out: [1, 0, { start: 0, end: 0 }]
                }
            },
        ]
        lSceneInfo = sceneInfoList;
    };
    
    // 캔버스 이미지 생성
    const setCanvasImages = () => {
        let lScene = _.cloneDeep(lSceneInfo);
        // let imgElem;
        // let imgArry1 = [];

		// for (let i = 1; i < lScene[0].values.videoImageCount; i++) {
		// 	imgElem = new Image();
		// 	imgElem.src = `../video/001/MAIN_IMG (${i}).jpg`;
        //     imgArry1.push(imgElem);
        // }
        
        // lScene[0].objs.videoImages = imgArry1;

        // let imgElem2;
        // let imgArry2 = [];
		// for (let i = 1; i < lScene[2].values.videoImageCount; i++) {
		// 	imgElem2 = new Image();
		// 	imgElem2.src = `../video/002/SUB_IMG (${i}).jpg`;
        //     imgArry2.push(imgElem2);
        // }
        
        // lScene[2].objs.videoImages = imgArry2;

        let imgElem3;
        for (let i = 0; i < lScene[3].objs.imagesPath.length; i++) {
            imgElem3 = new Image();
            imgElem3.src = lScene[3].objs.imagesPath[i];
            lScene[3].objs.images.push(imgElem3);
        }
        // setSceneInfo(lScene);
        lSceneInfo = lScene;
    }

    const checkMenu = () => {
        if (yOffset > 44) {
			document.body.classList.add('local-nav-sticky');
		} else {
			document.body.classList.remove('local-nav-sticky');
		}
    }

    // 화면별 컨텐츠 레이아웃 세팅
    const setLayout = () => {
       
      // 각 섹션 스크롤 높이 세팅
      let lScene = _.cloneDeep(lSceneInfo);

      for (let i = 0; i < lScene.length; i++) {
			if (lScene[i].type === 'sticky') {
				lScene[i].scrollHeight = lScene[i].heightNum * window.innerHeight;
			} else if (lScene[i].type === 'normal')  {
                lScene[i].scrollHeight = lScene[i].objs.content.offsetHeight + window.innerHeight * 0.5;
			}
            lScene[i].objs.container.style.height = `${lScene[i].scrollHeight}px`;
		}

        yOffset = window.pageYOffset;
		// setWinYoffset(window.pageYOffset);

		let totalScrollHeight = 0;
		for (let i = 0; i < lScene.length; i++) {
			totalScrollHeight += lScene[i].scrollHeight;
            if (totalScrollHeight >= yOffset) {
                currentScene = i;
				// setCurrentScene(i);
				break;
			}
        }
        
		document.body.setAttribute('id', `show-scene-${currentScene}`);

        const heightRatio = window.innerHeight / 1080;
		// lScene[0].objs.videoElem.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
        // lScene[2].objs.videoElem.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
        // setSceneInfo(sceneInfo);
        lSceneInfo = lScene;
        
    };
    
    const calcValues = (values, currentYOffset) => {
       let rv;
		// 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
		const scrollHeight = lSceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;
        
		if (values.length === 3) {
			// start ~ end 사이에 애니메이션 실행
			const partScrollStart = values[2].start * scrollHeight;
			const partScrollEnd = values[2].end * scrollHeight;
			const partScrollHeight = partScrollEnd - partScrollStart;

			if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
				rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
			} else if (currentYOffset < partScrollStart) {
				rv = values[0];
			} else if (currentYOffset > partScrollEnd) {
				rv = values[1];
			}
		} else {
			rv = scrollRatio * (values[1] - values[0]) + values[0];
        }
        
		return rv;
    }
    
    const playAnimation = () => {
        const objs = lSceneInfo[currentScene].objs;
		const values = lSceneInfo[currentScene].values;
		const currentYOffset = yOffset - prevScrollHeight;
		const scrollHeight = lSceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;
        let progress = null;

        switch (currentScene) {
            case 0:
                // let sequence = Math.round(calcValues(values.imageSequence, currentYOffset));
                // objs.context.drawImage(objs.videoImages[sequence], 0, 0);
             
                objs.videoElem.style.opacity = calcValues(values.video_opacity, currentYOffset);
                
                if (scrollRatio <= 0.28) {
                    // in
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    // out
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
                }

                if (scrollRatio <= 0.57) {
                    // in
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    // out
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
                }

                if (scrollRatio <= 0.82) {
                    // in
                    objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
                    objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    // out
                    objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
                    objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
                }

                progress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);

                if (progress < 0) progress = 0;
                if (progress > 1) progress = 1;

                
                let time = Math.floor(objs.videoElem.duration * (progress * 3.3));
                objs.videoElem.currentTime = time;

				break;

            case 2:
                
				if (scrollRatio <= 0.6) {
					// in
                    objs.videoElem.style.opacity = calcValues(values.video_opacity_in, currentYOffset);
				} else {
					// out
                     objs.videoElem.style.opacity = calcValues(values.video_opacity_out, currentYOffset);
					// objs.canvas.style.opacity = calcValues(values.canvas_opacity_out, currentYOffset);
				}

				if (scrollRatio <= 0.25) {
					// in
					objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
					objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
				} else {
					// out
					objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
					objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
                }

                progress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
                
                if (progress < 0) progress = 0;
                if (progress > 1) progress = 1;

                let time2 = Math.floor(objs.videoElem.duration * (progress * 1.4));

                objs.videoElem.currentTime = time2;

				// currentScene 3에서 쓰는 캔버스를 미리 그려주기 시작
				if (scrollRatio > 0.9) {
					const objs = lSceneInfo[3].objs;
					const values = lSceneInfo[3].values;
					const widthRatio = window.innerWidth / objs.canvas.width;
					const heightRatio = window.innerHeight / objs.canvas.height;
					let canvasScaleRatio;

					if (widthRatio <= heightRatio) {
						// 캔버스보다 브라우저 창이 홀쭉한 경우
						canvasScaleRatio = heightRatio;
					} else {
						// 캔버스보다 브라우저 창이 납작한 경우
						canvasScaleRatio = widthRatio;
					}

					objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
					objs.context.fillStyle = 'white';
					objs.context.drawImage(objs.images[0], 0, 0);

					// 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
					const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;
					const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

					const whiteRectWidth = recalculatedInnerWidth * 0.15;
					values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
					values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
					values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
					values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

					// 좌우 흰색 박스 그리기
					objs.context.fillRect(
						parseInt(values.rect1X[0]),
						0,
						parseInt(whiteRectWidth),
						objs.canvas.height
					);
					objs.context.fillRect(
						parseInt(values.rect2X[0]),
						0,
						parseInt(whiteRectWidth),
						objs.canvas.height
					);
				}

				break;

			case 3:
				let step = 0;
				// 가로/세로 모두 꽉 차게 하기 위해 여기서 세팅(계산 필요)
				const widthRatio = window.innerWidth / objs.canvas.width;
				const heightRatio = window.innerHeight / objs.canvas.height;
				let canvasScaleRatio;

				if (widthRatio <= heightRatio) {
					// 캔버스보다 브라우저 창이 홀쭉한 경우
					canvasScaleRatio = heightRatio;
				} else {
					// 캔버스보다 브라우저 창이 납작한 경우
					canvasScaleRatio = widthRatio;
				}

				objs.canvas.style.transform = `scale(${canvasScaleRatio})`;
				objs.context.fillStyle = 'white';
				objs.context.drawImage(objs.images[0], 0, 0);

				// 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
				const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;
				const recalculatedInnerHeight = window.innerHeight / canvasScaleRatio;

				if (!values.rectStartY) {
					// values.rectStartY = objs.canvas.getBoundingClientRect().top;
					values.rectStartY = objs.canvas.offsetTop + (objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2;
					values.rect1X[2].start = (window.innerHeight / 2) / scrollHeight;
					values.rect2X[2].start = (window.innerHeight / 2) / scrollHeight;
					values.rect1X[2].end = values.rectStartY / scrollHeight;
					values.rect2X[2].end = values.rectStartY / scrollHeight;
				}

				const whiteRectWidth = recalculatedInnerWidth * 0.15;
				values.rect1X[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
				values.rect1X[1] = values.rect1X[0] - whiteRectWidth;
				values.rect2X[0] = values.rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
				values.rect2X[1] = values.rect2X[0] + whiteRectWidth;

				// 좌우 흰색 박스 그리기
				objs.context.fillRect(
					parseInt(calcValues(values.rect1X, currentYOffset)),
					0,
					parseInt(whiteRectWidth),
					objs.canvas.height
				);
				objs.context.fillRect(
					parseInt(calcValues(values.rect2X, currentYOffset)),
					0,
					parseInt(whiteRectWidth),
					objs.canvas.height
				);

				if (scrollRatio < values.rect1X[2].end) {
					step = 1;
					// console.log('캔버스 닿기 전');
					objs.canvas.classList.remove('sticky');
				} else {
					step = 2;

					// console.log('캔버스 닿은 후');
					// 이미지 블렌드
					// values.blendHeight: [ 0, 0, { start: 0, end: 0 } ]
					values.blendHeight[0] = 0;
					values.blendHeight[1] = objs.canvas.height;
					values.blendHeight[2].start = values.rect1X[2].end;
					values.blendHeight[2].end = values.blendHeight[2].start + 0.2;
					const blendHeight = calcValues(values.blendHeight, currentYOffset);

					objs.context.drawImage(objs.images[1],
						0, objs.canvas.height - blendHeight, objs.canvas.width, blendHeight,
						0, objs.canvas.height - blendHeight, objs.canvas.width, blendHeight
					);

					objs.canvas.classList.add('sticky');
					objs.canvas.style.top = `${-(objs.canvas.height - objs.canvas.height * canvasScaleRatio) / 2}px`;

					if (scrollRatio > values.blendHeight[2].end) {
						values.canvas_scale[0] = canvasScaleRatio;
						values.canvas_scale[1] = document.body.offsetWidth / (1.5 * objs.canvas.width);
						values.canvas_scale[2].start = values.blendHeight[2].end;
						values.canvas_scale[2].end = values.canvas_scale[2].start + 0.2;

						objs.canvas.style.transform = `scale(${calcValues(values.canvas_scale, currentYOffset)})`;
						objs.canvas.style.marginTop = 0;
					}

					if (scrollRatio > values.canvas_scale[2].end
						&& values.canvas_scale[2].end > 0) {
						objs.canvas.classList.remove('sticky');
						objs.canvas.style.marginTop = `${scrollHeight * 0.4}px`;

						values.canvasCaption_opacity[2].start = values.canvas_scale[2].end;
						values.canvasCaption_opacity[2].end = values.canvasCaption_opacity[2].start + 0.1;
						values.canvasCaption_translateY[2].start = values.canvasCaption_opacity[2].start;
						values.canvasCaption_translateY[2].end = values.canvasCaption_opacity[2].end;
						objs.canvasCaption.style.opacity = calcValues(values.canvasCaption_opacity, currentYOffset);
						objs.canvasCaption.style.transform = `translate3d(0, ${calcValues(values.canvasCaption_translateY, currentYOffset)}%, 0)`;
					} else {
						objs.canvasCaption.style.opacity = values.canvasCaption_opacity[0];
					}

					// index2 추가 코드
					// values.messageA_opacity_in[2].start = values.rect1X[2].end;
					// values.messageA_opacity_in[2].end = values.blendHeight[2].start + 0.1;
					// values.messageA_opacity_out[2].start = values.messageA_opacity_in[2].end + 0.1;
					// values.messageA_opacity_out[2].end = values.messageA_opacity_out[2].start + 0.1;

					// if (scrollRatio < values.messageA_opacity_in[2].end + 0.05) {
					// 	objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
					// } else {
					// 	objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
					// }
				}
				break;
		}
    }

    const scrollLoop = () => {
        enterNewScene = false;
        prevScrollHeight = 0;
        // setEnterNewScene(false);
        // setPrevScrollHeight(0);

        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight = prevScrollHeight + lSceneInfo[i].scrollHeight;
			// setPrevScrollHeight(prevScrollHeight + lSceneInfo[i].scrollHeight);
		}

		if (delayedYOffset < prevScrollHeight + lSceneInfo[currentScene].scrollHeight) {
			document.body.classList.remove('scroll-effect-end');
		}

		if (delayedYOffset > prevScrollHeight + lSceneInfo[currentScene].scrollHeight) {
            enterNewScene = true;
            // setEnterNewScene(true);
			if (currentScene === lSceneInfo.length - 1) {
				document.body.classList.add('scroll-effect-end');
			}
			if (currentScene < lSceneInfo.length - 1) {
				currentScene++;
			}
			document.body.setAttribute('id', `show-scene-${currentScene}`);
		}

        if (delayedYOffset < prevScrollHeight) {
            enterNewScene = true;
			// setEnterNewScene(true);
			// 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
            if (currentScene === 0) return;
            currentScene--;
			// setCurrentScene(currentScene--);
			document.body.setAttribute('id', `show-scene-${currentScene}`);
		}

		if (enterNewScene) return;

		playAnimation();
    }

    const loop = () => {
        delayedYOffset = delayedYOffset + (yOffset - delayedYOffset) * acc
        // setDelayedYOffset(delayedYOffset + (yOffset - delayedYOffset) * acc);
        let innerWidth = window.innerWidth;
        let innerHeight = window.innerHeight
		if (!enterNewScene) {
			// if (currentScene === 2) {
			// 	const currentYOffset = delayedYOffset - prevScrollHeight;
			// 	const objs = lSceneInfo[currentScene].objs;
			// 	const values = lSceneInfo[currentScene].values;
            //     let sequence = Math.round(calcValues(values.imageSequence, currentYOffset));
            //     let wh = innerWidth - innerHeight;
            //     let mobW = 0;
            //     let mobH = 0;
            //     let pxW = 0;
            //     let pxH = 0;

            //     if (wh < 0) {
            //         mobW = innerWidth * 1.3 ;
            //         mobH = innerHeight;
            //         pxW = innerWidth / 16;
            //         pxH = pxW * 14
            //     }

			// 	if (objs.videoImages[sequence]) {
            //         if (wh < 0) {
            //             if (innerWidth < 1080  && innerWidth > 650) {
            //                 objs.context.drawImage(objs.videoImages[sequence], 0, 0);
            //             } else {
            //                 objs.context.drawImage(objs.videoImages[sequence], 0 , mobH * 0.25 , mobW, pxH);
            //             }
            //         } else {
            //             objs.context.drawImage(objs.videoImages[sequence], 0, 0);
            //         }
                  
					
			// 	}
			// }
		}

        // 일부 기기에서 페이지 끝으로 고속 이동하면 body id가 제대로 인식 안되는 경우를 해결
        // 페이지 맨 위로 갈 경우: scrollLoop와 첫 scene의 기본 캔버스 그리기 수행
        let lScene = _.cloneDeep(lSceneInfo);
        if (delayedYOffset < 1) {
            scrollLoop();
            // lScene[0].objs.canvas.style.opacity = 1;
            // lScene[0].objs.context.drawImage(lScene[0].objs.videoImages[0], 0, 0);
        }
        // setSceneInfo(lScene);
        lSceneInfo = lScene;
        
        // 페이지 맨 아래로 갈 경우: 마지막 섹션은 스크롤 계산으로 위치 및 크기를 결정해야할 요소들이 많아서 1픽셀을 움직여주는 것으로 해결
        if ((document.body.offsetHeight - window.innerHeight) - delayedYOffset < 1) {
            let tempYOffset = yOffset;
            // scrollTo(0, tempYOffset - 1);
        }

        rafId = requestAnimationFrame(loop);
        // setRafId(requestAnimationFrame(loop));

		if (Math.abs(yOffset - delayedYOffset) < 1) {
            cancelAnimationFrame(rafId);
            rafState = false;
			// setRafState(false);
		}
    }

    function accountDp(type) {
        
        if (type === 'G') {
            if (gAccountShow) {
                setGDisplayStr('신부측 계좌번호 확인');
            } else {
                setGDisplayStr('닫기');
            }
            
            setGAccountShow(!gAccountShow);
        } else {
            if (mAccountShow) {
                setMDisplayStr('신랑측 계좌번호 확인');
            } else {
                setMDisplayStr('닫기');
            }
            setMAccountShow(!mAccountShow);
        }
    }

    function copyAccount(ac) {
        let area = document.createElement("textarea");
        document.body.appendChild(area);
        area.value = ac;
        area.select();
        document.execCommand("copy");
        document.body.removeChild(area);
        alert("계좌번호가 복사되었습니다.");
    }

    useEffect(() => {
        // setTimeout(() => document.querySelector('.before-load').classList.remove('before-load'), 2500);
        settingSceneInfo();
        setCanvasImages();
        setLayout();
    }, []);

    useEffect(() => {
        if (preventScroll) {
            // add listener to disable scroll
            window.addEventListener('scroll',  scrollTo(0, 0));
        } 
    }, [preventScroll]);


     useEffect(() => {
         window.onscroll = () => {
            
            if (yOffset > 50) {
                setScrollAble(false);
            } else {
                setScrollAble(true);
             }
             
            yOffset = window.pageYOffset;
            setWinYoffset(window.pageYOffset);
            scrollLoop();
            checkMenu();

            if (!rafState) {
                rafId = requestAnimationFrame(loop);
                rafState = true;
                // setRafId(requestAnimationFrame(loop));
                // setRafState(true);
            }
        }
    }, []);



    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                window.location.reload();
            }
        });
        return () => {
            window.removeEventListener('resize', window.location.reload());
      }
    }, []);

    useEffect(() => {
        window.addEventListener('orientationchange', () => {
            scrollTo(0, 0);
            setTimeout(() => {
                window.location.reload();
            }, 500);
        });
    }, []);

    const onEnd = () => {
        setScrollAble(true);
        setPreventScroll(false);
    }

    const sectionAni = {
        opacity: 0.6275,
    }

    const minus2Vh = {
        marginTop : "-2vh",
    }

    const cWidth =  (window.innerWidth > 1080 || window.innerWidth > window.innerHeight) ? 1920 : window.innerWidth;
    const cHeight = (window.innerWidth > 1080 || window.innerWidth > window.innerHeight) ? 1080 : window.innerHeight;

  return (
      <div>
          <div className="welcomeVideo">
            <video className={`${winYoffset > 50 ? `hide` : `show`}`} autoPlay muted playsInline width={cWidth} height={cHeight}>
                <source src="../video/couple.mp4#t=0.001" type="video/mp4"></source>
            </video>
            <CountUp className={`${winYoffset > 50 ? `hide` : `show`}`} end={1450} duration="16" onEnd={onEnd} />
              <h2 className={`scrolldown-desc ${scrollAble && winYoffset < 50 ? `show` : `hide`}`}>화면을 내려주세요.</h2>
              <div className={`mouse ${scrollAble && winYoffset < 50 ? `show` : `hide`}`}></div>
          </div>
          <section className="scroll-section" id="scroll-section-0">
              <div className="sticky-elem sticky-elem-canvas">
                  <video className="main-video" width={cWidth} height={cHeight} muted >
                       <source src="../video/fir.mp4#t=0.001" preload="metadata" type="video/mp4" />
                  </video>
              </div>
              <div className="sticky-elem main-message a story-message">
                <p> <strong className="dDay">1450</strong>일 동안 </p> 
              </div>
            <div className="sticky-elem main-message b story-message">
            <p>그리고, <br></br> 함께 만들어 갈</p>
            </div>
            <div className="sticky-elem main-message c story-message">
            <p>
               다음 이야기에 <br></br> 초대 합니다.
            </p>
            </div>
        </section>
        <section className="scroll-section" id="scroll-section-1">
            <p className="description">
                  <strong>안녕하세요. <br />박은아 <small>그리고</small> 문인호입니다.</strong>
            </p>
              
        </section>

        <section className="scroll-section" id="scroll-section-2">
              <div className="sticky-elem sticky-elem-canvas">
               <video className="second-video" width={cWidth} height={cHeight} muted >
                        <source src="../video/sec.mp4#t=0.001" preload="metadata" type="video/mp4" />
               </video>
            </div>
            <div className="sticky-elem main-message a">
            <p>
                <small>부모님의 아름다운 모습 그대로</small>
                서로 사랑하며 <br></br> 행복하겠습니다.
            </p>
            </div>
          </section>
          
          <section className="scroll-section" id="scroll-section-3">
              <p className="mid-message">
				<strong>2021년 11월 20일 16:40분</strong><br></br>
				보타닉파크웨딩 카라홀<br></br>
			 </p>
              <canvas className="image-blend-canvas" width="1920" height="1080"></canvas>
              <p className="canvas-caption" style={sectionAni}>
                    <strong>인</strong> 사드립니다<br></br>
                    <strong>호</strong> 기심 많던 젊은 날<br></br>
                    <strong>은</strong> 연중 서로를 알아보고,나아가<br></br>
                    <strong>아</strong> 름다운 시간들을 함께 쌓아가려 합니다.<br></br>
                    <strong>부</strong> 부가 되는 첫 걸음에 축하를 더해주세요.<br></br>
                    <strong>부</strong> 족하지만 늘 감사하며 잘 살겠습니다.<br></br>
			</p>
          </section>
              <div className="info-area">
                <h1 style={minus2Vh}>오시는 길</h1>
                <div className="location-area">
                    <div className="location-img">
                      <img src="../images/location.png" alt="." />
                      <p> 서울 강서구 보타닉파크웨딩 <br></br><small>서울특별시 강서구 마곡동 282-3</small></p>
                    
                    </div>
                    <div className="location-desc">
                        <p>자가용</p>
                        <small> "보타닉파크웨딩" 또는 "마곡동 282-2" <br></br> (지하3층 ~ 지하 8층 주차가능)</small>
                        <p>지하철</p>
                      <small> 9호선. 공항철도 마곡나루역 <br></br>
                          1,2번 출구 연결</small>
                        <p>버스</p>
                        <small> 마곡나루역 정류장 하차 <br></br> N65, 6645, 6648, 강서05-1, 강서07 </small>
                    </div>
                </div>
                </div>
              <div className="info-area">
              <h1>마음 전하실 곳</h1>
                <div className="account-area">
                    <div className="account-info">
                        <button type="button" className="accountBtn" 
                        onClick={() => accountDp('M')}>
                        {mDisplayStr}</button>
                        <div className={`account-box ${
                            mAccountShow? 'show' : 'hide'
                          }`}>
                          <div className="bank-info">
                                <p>혼주 계좌 </p>
                                <p> 농협 166-12-036481 (문치경)</p>
                                <button type="button" className="copyBtn" onClick={() => copyAccount('166-12-036481')}> 복사하기 </button>
                            </div>
                            <div className="bank-info">
                                  <p>신랑 계좌 </p>
                                <p> 우리은행 1002-454-550025 (문인호)</p>
                                <button type="button" className="copyBtn" onClick={() => copyAccount('1002-454-550025')}> 복사하기 </button>
                            </div>
                        </div>
                    </div>
                    <div className="account-info">
                        <button type="button" className="accountBtn" 
                        onClick={() => accountDp('G')}>
                        {gDisplayStr}</button>
                        <div className={` account-box ${
                            gAccountShow? 'show' : 'hide'
                          }`}>
                            <div className="bank-info">
                              <p>혼주 계좌 </p>
                              <p> 국민은행 756002-00-087043 (박상민)</p>
                              <button type="button" className="copyBtn" onClick={() => copyAccount('756002-00-087043')}> 복사하기 </button>
                            </div>
                           <div className="bank-info">
                            <p><strong> 혼주 계좌</strong></p>
                              <p> 국민은행 215-21-0720-081 (김현숙)</p>
                              <button type="button" className="copyBtn" onClick={() => copyAccount('215-21-0720-081')}> 복사하기 </button>
                            </div>
                            <div  className="bank-info">
                              <p><strong> 신부 계좌</strong></p>
                              <p> 국민은행 756002-00-035114 (박은아)</p>
                          <button type="button" className="copyBtn" onClick={() => copyAccount('756002-00-035114')}> 복사하기 </button>
                            </div>
                        </div>
                    </div>
              </div>
              <footer className="footer">
                  <small>우리가족 및 지인 모두 행복이 가득한 하루가 되길 바랍니다.
                      <br></br>문인호 그리고 박은아 두손모아 올림
                  </small>
              </footer>
          </div>
       </div>
  );
};
