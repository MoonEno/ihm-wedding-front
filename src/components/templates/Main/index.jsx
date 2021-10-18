import React, { useState, useEffect } from 'react';
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

    const [footerMsg, setFooterMsg] = useState('const 20211120 = (2) => { return 1 }');
    
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
                // 0
                type: 'sticky',
                heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
                scrollHeight: 0,
                objs: {
                    container: document.querySelector('#scroll-section-0'),
                    messageA: document.querySelector('#scroll-section-0 .main-message.a'),
                    messageB: document.querySelector('#scroll-section-0 .main-message.b'),
                    messageC: document.querySelector('#scroll-section-0 .main-message.c'),
                    messageD: document.querySelector('#scroll-section-0 .main-message.d'),
                    canvas: document.querySelector('#video-canvas-0'),
                    context: document.querySelector('#video-canvas-0').getContext('2d'),
                    videoImages: []
                },
                values: { // 기본 300, img [0, 299]
                    videoImageCount: 120,
                    imageSequence: [0, 120],
                    canvas_opacity: [1, 0, { start: 0.9, end: 1 }],
                    messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
                    messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
                    messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
                    messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
                    messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
                    messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
                    messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
                    messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
                    messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
                    messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
                    messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
                    messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
                    messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
                    messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
                    messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
                    messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }]
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
                    pinB: document.querySelector('#scroll-section-2 .b .pin'),
                    pinC: document.querySelector('#scroll-section-2 .c .pin'),
                    canvas: document.querySelector('#video-canvas-1'),
                    context: document.querySelector('#video-canvas-1').getContext('2d'),
                    videoImages: []
                },
                values: {
                    videoImageCount: 960,
                    imageSequence: [0, 959],
                    canvas_opacity_in: [0, 1, { start: 0, end: 0.1 }],
                    canvas_opacity_out: [1, 0, { start: 0.95, end: 1 }],
                    messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
                    messageB_translateY_in: [30, 0, { start: 0.5, end: 0.55 }],
                    messageC_translateY_in: [30, 0, { start: 0.72, end: 0.77 }],
                    messageA_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
                    messageB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
                    messageC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
                    messageA_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
                    messageB_translateY_out: [0, -20, { start: 0.58, end: 0.63 }],
                    messageC_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
                    messageA_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
                    messageB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
                    messageC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
                    pinB_scaleY: [0.5, 1, { start: 0.5, end: 0.55 }],
                    pinC_scaleY: [0.5, 1, { start: 0.72, end: 0.77 }],
                    pinB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
                    pinC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
                    pinB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
                    pinC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }]
                }
            },
            {
                // 3
                type: 'sticky',
                heightNum: 5,
                scrollHeight: 0,
                objs: {
                    container: document.querySelector('#scroll-section-3'),
                    canvasCaption: document.querySelector('.canvas-caption'),
                    canvas: document.querySelector('.image-blend-canvas'),
                    context: document.querySelector('.image-blend-canvas').getContext('2d'),
                    imagesPath: [
                        '../images/blend-image-1.jpg',
                        '../images/blend-image-2.jpg'
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
            }
        ]
        lSceneInfo = sceneInfoList;
    };
    
    // 캔버스 이미지 생성
    const setCanvasImages = () => {
        let imgElem;
        let lScene = _.cloneDeep(lSceneInfo);
        let imgArry1 = [];
		for (let i = 0; i < lScene[0].values.videoImageCount; i++) {
			imgElem = new Image();
			imgElem.src = `../video/001/IMG_MAIN (${1 + i}).JPG`;
            imgArry1.push(imgElem);
        }
        
        console.log(lScene, imgArry1, lScene[0].objs.videoImages, lScene[0]);
        lScene[0].objs.videoImages = imgArry1;

        let imgElem2;
        let imgArry2 = [];
		for (let i = 0; i < lScene[2].values.videoImageCount; i++) {
			imgElem2 = new Image();
			imgElem2.src = `../video/002/IMG_${7027 + i}.JPG`;
            imgArry2 = [];
        }
        
        lScene[2].objs.videoImages = imgArry2;

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
		// setYOffset(window.pageYOffset);

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
		lScene[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
        lScene[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
        
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

		switch (currentScene) {
			case 0:
				// console.log('0 play');
				// let sequence = Math.round(calcValues(values.imageSequence, currentYOffset));
				// objs.context.drawImage(objs.videoImages[sequence], 0, 0);
				objs.canvas.style.opacity = calcValues(values.canvas_opacity, currentYOffset);

				if (scrollRatio <= 0.22) {
					// in
					objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
					objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
				} else {
					// out
					objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
					objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
				}

				if (scrollRatio <= 0.42) {
					// in
					objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
					objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
				} else {
					// out
					objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
					objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
				}

				if (scrollRatio <= 0.62) {
					// in
					objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
					objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
				} else {
					// out
					objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
					objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
				}

				if (scrollRatio <= 0.82) {
					// in
					objs.messageD.style.opacity = calcValues(values.messageD_opacity_in, currentYOffset);
					objs.messageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_in, currentYOffset)}%, 0)`;
				} else {
					// out
					objs.messageD.style.opacity = calcValues(values.messageD_opacity_out, currentYOffset);
					objs.messageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_out, currentYOffset)}%, 0)`;
				}

				break;

			case 2:
				// console.log('2 play');
				// let sequence2 = Math.round(calcValues(values.imageSequence, currentYOffset));
				// objs.context.drawImage(objs.videoImages[sequence2], 0, 0);

				if (scrollRatio <= 0.5) {
					// in
					objs.canvas.style.opacity = calcValues(values.canvas_opacity_in, currentYOffset);
				} else {
					// out
					objs.canvas.style.opacity = calcValues(values.canvas_opacity_out, currentYOffset);
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

				if (scrollRatio <= 0.57) {
					// in
					objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
					objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
					objs.pinB.style.transform = `scaleY(${calcValues(values.pinB_scaleY, currentYOffset)})`;
				} else {
					// out
					objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
					objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
					objs.pinB.style.transform = `scaleY(${calcValues(values.pinB_scaleY, currentYOffset)})`;
				}

				if (scrollRatio <= 0.83) {
					// in
					objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
					objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
					objs.pinC.style.transform = `scaleY(${calcValues(values.pinC_scaleY, currentYOffset)})`;
				} else {
					// out
					objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
					objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
					objs.pinC.style.transform = `scaleY(${calcValues(values.pinC_scaleY, currentYOffset)})`;
				}

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
				// console.log('3 play');
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
					values.messageA_opacity_in[2].start = values.rect1X[2].end;
					values.messageA_opacity_in[2].end = values.blendHeight[2].start + 0.1;
					values.messageA_opacity_out[2].start = values.messageA_opacity_in[2].end + 0.1;
					values.messageA_opacity_out[2].end = values.messageA_opacity_out[2].start + 0.1;

					if (scrollRatio < values.messageA_opacity_in[2].end + 0.05) {
						objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
					} else {
						objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
					}
				}

				// index2 추가 코드
				if (scrollRatio <= values.messageA_opacity_in[2].start) {
					objs.messageA.style.opacity = values.messageA_opacity_in[0];
				}
				if (scrollRatio >= values.messageA_opacity_out[2].end) {
					objs.messageA.style.opacity = values.messageA_opacity_out[1];
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

		if (!enterNewScene) {
			if (currentScene === 0 || currentScene === 2) {
				const currentYOffset = delayedYOffset - prevScrollHeight;
				const objs = lSceneInfo[currentScene].objs;
				const values = lSceneInfo[currentScene].values;
				let sequence = Math.round(calcValues(values.imageSequence, currentYOffset));
				if (objs.videoImages[sequence]) {
					objs.context.drawImage(objs.videoImages[sequence], 0, 0);
				}
			}
		}

        // 일부 기기에서 페이지 끝으로 고속 이동하면 body id가 제대로 인식 안되는 경우를 해결
        // 페이지 맨 위로 갈 경우: scrollLoop와 첫 scene의 기본 캔버스 그리기 수행
        let lScene = _.cloneDeep(lSceneInfo);
        if (delayedYOffset < 1) {
            scrollLoop();
            lScene[0].objs.canvas.style.opacity = 1;
            lScene[0].objs.context.drawImage(lScene[0].objs.videoImages[0], 0, 0);
        }
        // setSceneInfo(lScene);
        lSceneInfo = lScene;
        
        // 페이지 맨 아래로 갈 경우: 마지막 섹션은 스크롤 계산으로 위치 및 크기를 결정해야할 요소들이 많아서 1픽셀을 움직여주는 것으로 해결
        if ((document.body.offsetHeight - window.innerHeight) - delayedYOffset < 1) {
            let tempYOffset = yOffset;
            scrollTo(0, tempYOffset - 1);
        }

        rafId = requestAnimationFrame(loop);
        // setRafId(requestAnimationFrame(loop));

		if (Math.abs(yOffset - delayedYOffset) < 1) {
            cancelAnimationFrame(rafId);
            rafState = false;
			// setRafState(false);
		}
    }
    
    useEffect(() => {
        settingSceneInfo();
        setCanvasImages();
        setLayout();
    }, []);


    useEffect(() => {
        window.onscroll = () => {
            yOffset = window.pageYOffset;
            // setYOffset(window.pageYOffset)
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
            console.log("event resize");
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
            console.log("orientationchange");
            scrollTo(0, 0);
            setTimeout(() => {
                window.location.reload();
            }, 500);
        });
    }, []);


  return (
      <>
            <section className="scroll-section" id="scroll-section-0">
            <h1>우리 가족입니다.</h1>
            <div className="sticky-elem sticky-elem-canvas">
            <canvas id="video-canvas-0" width="1920" height="1080"></canvas>
            </div>
            <div className="sticky-elem main-message a">
            <p>주체할 수 없는 끼</p>
            </div>
            <div className="sticky-elem main-message b">
            <p>어울리는 두 사람의 만남<br />매력 발산 모드</p>
            </div>
            <div className="sticky-elem main-message c">
            <p>
                온종일 편안한<br />
                가족같은 분위기
            </p>
            </div>
            <div className="sticky-elem main-message d">
            <p>나를 <br />찾아온 매혹</p>
            </div>
        </section>
        <section className="scroll-section" id="scroll-section-1">
            <p className="description">
            <strong>안녕하세요. <br/ >박은아 그리고 문인호입니다. <br/ ></strong>
            </p>

            <div className="sticky-elem main-message e">
            <p>인사드립니다</p>
            </div>
            <div className="sticky-elem main-message f">
            <p>호기심 많던 젊은 날</p>
            </div>
            <div className="sticky-elem main-message g">
            <p>은연중 서로를 알아보고,나아가</p>
            </div>
            <div className="sticky-elem main-message h">
            <p>아름다운 시간들을 함께 쌓아가려 합니다.</p>
            </div>
        </section>

        <section className="scroll-section" id="scroll-section-2">
            <div className="sticky-elem sticky-elem-canvas">
            <canvas id="video-canvas-1" width="1920" height="1080"></canvas>
            </div>
            <div className="sticky-elem main-message a">
            <p>
                <small>편안한 촉감</small>
                입과 하나 되다
            </p>
            </div>
            <div className="sticky-elem desc-message b">
            <p>
                편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
                하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
                AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
                오롯이 당신과 음료만 남게 되죠.
            </p>
            <div className="pin"></div>
            </div>
            <div className="sticky-elem desc-message c">
            <p>디자인 앤 퀄리티 오브 스웨덴,<br />메이드 인 차이나</p>
            <div className="pin"></div>
            </div>
        </section>
        <section className="scroll-section" id="scroll-section-3">
            <p className="mid-message">
            <strong>Retina 머그</strong><br />
            아이디어를 광활하게 펼칠<br />
            아름답고 부드러운 음료 공간.
            </p>
            <canvas className="image-blend-canvas" width="1920" height="1080"></canvas>
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

            <div className="sticky-elem main-message a">
            <p>index2에 추가된 텍스트</p>
            </div>
        </section>
          <footer className="footer"><p>{footerMsg}</p></footer>
    </>
  );
};
