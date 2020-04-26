window.onload = function () {
    /* ============================================
                          fig1
       ============================================*/
    let fig1Annot1 = document.getElementById('fig1-annot-1');
    let fig1SpArrow = document.getElementById('fig1-sp-arrow-g');
    let fig1SpNum = document.getElementById('fig1-sp-num');
    let fig1SpOutputLine = document.getElementById('fig1-sp-output-line');
    let fig1rvOutputLine = document.getElementById('fig1-rv-output-line');
    let fig1rv = document.getElementById('fig1-rv');
    let fig1rvNum = document.getElementById('fig1-rv-num');
    let fig1Annot2 = document.getElementById('fig1-annot-2');
    let fig1Annot3 = document.getElementById('fig1-annot-3');
    let fig1Annot4 = document.getElementById('fig1-annot-4');
    let fig1SpDensity = document.getElementById('fig1-sp-density');
    let fig1rvDensity = document.getElementById('fig1-rv-density');

    let fig1tl = anime.timeline({
        autoplay: false,
        loop: false,
        easing: 'linear',
        update: function (anim) {
            fig1controls.value = fig1tl.progress;
        }
    });

    var fig1controls = document.querySelector('#fig1 .animejs-controls .progress');


    document.querySelector('#fig1 .animejs-controls .play').onclick = fig1tl.play;
    document.querySelector('#fig1 .animejs-controls .pause').onclick = fig1tl.pause;
    document.querySelector('#fig1 .animejs-controls .restart').onclick = fig1tl.restart;

    fig1controls.addEventListener('input', function () {
        fig1tl.seek(fig1tl.duration * (fig1controls.value / 100));
    });

    fig1controls.addEventListener('mousedown', function () {
        fig1tl.pause();
    });

    fig1controls.addEventListener('mouseup', function () {
        fig1tl.play();
    });

    fig1tl.add({ targets: fig1Annot1, duration: 300, opacity: 1 })
        .add({ targets: fig1SpArrow, duration: 300, opacity: 1, delay: 1500 })
        .add({ targets: fig1SpArrow, duration: 2500, translateX: '-29px', easing: "easeInOutElastic(1, 0.5)" })
        .add({ targets: fig1SpNum, duration: 300, opacity: 1 }, '-=300')
        .add({ targets: fig1SpArrow, duration: 300, opacity: .3 }, '-=300')
        .add({ targets: fig1Annot2, duration: 300, opacity: 1, delay: 1000 })
        .add({ targets: fig1Annot3, duration: 300, opacity: 1, delay: 1500 })
        .add({ targets: fig1SpOutputLine, duration: 300, opacity: 1, delay: 1500 })
        .add({ targets: fig1rv, duration: 300, opacity: 1, delay: 500 })
        .add({ targets: fig1rvOutputLine, duration: 300, opacity: 1, delay: 500 })
        .add({ targets: fig1rvNum, duration: 300, opacity: 1, delay: 500 })
        .add({ targets: fig1Annot4, duration: 300, opacity: 1, delay: 1500 })
        .add({ targets: fig1SpDensity, duration: 300, opacity: .3, delay: 3000 })
        .add({ targets: fig1rvDensity, duration: 300, opacity: .3, delay: 1500 });

    /* ============================================
                          fig2
       ============================================*/

    let fig2tl = anime.timeline({
        autoplay: false,
        loop: false,
        easing: 'linear',
        update: function (anim) {
            fig2controls.value = fig2tl.progress;
        }
    });

    var fig2controls = document.querySelector('#fig2 .animejs-controls .progress');


    document.querySelector('#fig2 .animejs-controls .play').onclick = fig2tl.play;
    document.querySelector('#fig2 .animejs-controls .pause').onclick = fig2tl.pause;
    document.querySelector('#fig2 .animejs-controls .restart').onclick = fig2tl.restart;

    fig2controls.addEventListener('input', function () {
        fig2tl.seek(fig2tl.duration * (fig2controls.value / 100));
    });

    fig2controls.addEventListener('mousedown', function () {
        fig2tl.pause();
    });

    fig2controls.addEventListener('mouseup', function () {
        fig2tl.play();
    });

    let fig2spevent = gget('fig2-sp-event');
    let fig2spnums = gget('fig2-sp-nums');
    let fig2eventaannot = gget('fig2-event-a-annot');
    let fig2rvevent = gget('fig2-rv-event');
    let fig2rvnums = gget('fig2-rv-nums');
    let fig2spdensity = gget('fig2-seg-sp-density');
    let fig2rvdensity = gget('fig2-seg-rv-density');
    let fig2spsegdensity1 = gget('fig2-sp-seg-density-1');
    let fig2spsegdensity2 = gget('fig2-sp-seg-density-2');
    let fig2spsegdensity3 = gget('fig2-sp-seg-density-3');
    let fig2rvsegdensity1 = gget('fig2-rv-seg-density-1');
    let fig2rvsegdensity2 = gget('fig2-rv-seg-density-2');
    let fig2rvsegdensity3 = gget('fig2-rv-seg-density-3');
    let fig2spptdensity1 = gget('fig2-sp-pt-density-1');
    let fig2spptdensity2 = gget('fig2-sp-pt-density-2');
    let fig2spptdensity3 = gget('fig2-sp-pt-density-3');
    let fig2rvptdensity1 = gget('fig2-rv-pt-density-1');
    let fig2rvptdensity2 = gget('fig2-rv-pt-density-2');
    let fig2rvptdensity3 = gget('fig2-rv-pt-density-3');
    let fig2densityannot1 = gget('fig2-density-annot-1');
    let fig2densityannot2 = gget('fig2-density-annot-2');
    let fig2annot2 = gget('fig2-annot-2-g');

    fig2tl.add({ targets: fig2eventaannot, duration: 300, opacity: 1 })
        .add({ targets: fig2spnums, duration: 300, opacity: 1, delay: 2000 })
        .add({ targets: fig2spevent, duration: 300, opacity: 1, delay: 1000 })
        .add({ targets: fig2rvnums, duration: 300, opacity: 1, delay: 1000 })
        .add({ targets: fig2rvevent, duration: 300, opacity: 1, delay: 1000 })
        .add({ targets: fig2spevent, duration: 500, opacity: 0, translateY: '-10px', delay: 1000 })
        .add({ targets: fig2rvevent, duration: 500, opacity: 0, translateY: '-10px', delay: 0 })
        .add({ targets: fig2spdensity, keyframes: [{ duration: 0, opacity: 0, translateY: '3px' }, { duration: 300, opacity: 1, translateY: '0px' }], delay: 500 })
        .add({ targets: fig2rvdensity, keyframes: [{ duration: 0, opacity: 0, translateY: '3px' }, { duration: 300, opacity: 1, translateY: '0px' }], delay: 500 })
        .add({ targets: [fig2spptdensity1, fig2spptdensity2, fig2spptdensity3], duration: 300, opacity: 1, delay: 500 })
        .add({ targets: [fig2rvptdensity1, fig2rvptdensity2, fig2rvptdensity3], duration: 300, opacity: 1, delay: 500 })
        .add({ targets: fig2densityannot1, duration: 300, opacity: 1, delay: 500 })
        .add({ targets: fig2densityannot2, duration: 300, opacity: 1, delay: 250 })
        .add({ targets: fig2annot2, duration: 300, opacity: 1, delay: 2000 })
        .add({
            targets: [fig2spptdensity1, fig2spptdensity3, fig2spsegdensity1, fig2spsegdensity3], keyframes: [{ duration: 0, translateY: '0px' }, {
                duration: 300, opacity: 0, translateY: '2px'
            }], delay: 2000
        })
        .add({
            targets: [fig2rvptdensity1, fig2rvptdensity3, fig2rvsegdensity1, fig2rvsegdensity3], keyframes: [{ duration: 0, translateY: '0px' }, {
                duration: 300, opacity: 0, translateY: '2px'
            }], delay: 500
        });
    /* ============================================
                          fig3
       ============================================*/

    let fig3annot1 = gget('fig3-annot-1');
    let fig3annot2 = gget('fig3-annot-2');
    let fig3linenums1 = gget('fig3-line-nums-1').children;
    let fig3linenums2 = gget('fig3-line-nums-2').children;
    let fig3linenums3 = gget('fig3-line-nums-3').children;
    let fig3rvptdensity1 = gget('fig3-rv-pt-density-1');
    let fig3rvptdensity2 = gget('fig3-rv-pt-density-2');
    let fig3rvptdensity3 = gget('fig3-rv-pt-density-3');
    let fig3rvsegdensity1 = gget('fig3-rv-seg-density-1');
    let fig3rvsegdensity2 = gget('fig3-rv-seg-density-2');
    let fig3rvsegdensity3 = gget('fig3-rv-seg-density-3');
    let fig3annot3 = gget('fig3-annot-3');
    let fig3annot4 = gget('fig3-annot-4');
    let fig3annot5 = gget('fig3-annot-5');
    let fig3annot6 = gget('fig3-annot-6');
    let fig3eg1num = gget('fig3-eg-1-num');
    let fig3eg1density = gget('fig3-eg-1-density');
    let fig3eg1cond = gget('fig3-eg-1-cond');
    let fig3eg1density2 = gget('fig3-eg-1-density-2');
    let fig3eg1cond2 = gget('fig3-eg-1-cond-2');
    let fig3eg1formula1 = gget('fig3-eg-1-formula-1');
    let fig3eg1formula2 = gget('fig3-eg-1-formula-2');
    let fig3eg1formula3 = gget('fig3-eg-1-formula-3');
    let fig3eg1formula4 = gget('fig3-eg-1-formula-4');
    let fig3eg1formula5 = gget('fig3-eg-1-formula-5');
    let fig3eg1formulaarrow = gget('fig3-eg-1-formula-arrow');

    let fig3annot7 = gget('fig3-annot-7');
    let fig3eg2num = gget('fig3-eg-2-num');
    let fig3eg2density = gget('fig3-eg-2-density');
    let fig3eg2cond = gget('fig3-eg-2-cond');
    let fig3eg2density2 = gget('fig3-eg-2-density-2');
    let fig3eg2cond2 = gget('fig3-eg-2-cond-2');
    let fig3eg2formula1 = gget('fig3-eg-2-formula-1');
    let fig3eg2formula2 = gget('fig3-eg-2-formula-2');
    let fig3eg2formula3 = gget('fig3-eg-2-formula-3');
    let fig3eg2formula4 = gget('fig3-eg-2-formula-4');
    let fig3eg2formulaarrow = gget('fig3-eg-1-formula-arrow');
    let fig3annot8 = gget('fig3-annot-8');
    let fig3annot9 = gget('fig3-annot-9');
    let fig3rvsegconddensity = gget('fig3-seg-rv-cond-density');

    let fig3tl = anime.timeline({
        autoplay: false,
        loop: false,
        easing: 'linear',
        update: function (anim) {
            fig3controls.value = fig3tl.progress;
        }
    });

    var fig3controls = document.querySelector('#fig3 .animejs-controls .progress');


    document.querySelector('#fig3 .animejs-controls .play').onclick = fig3tl.play;
    document.querySelector('#fig3 .animejs-controls .pause').onclick = fig3tl.pause;
    document.querySelector('#fig3 .animejs-controls .restart').onclick = fig3tl.restart;

    fig3controls.addEventListener('input', function () {
        fig3tl.seek(fig3tl.duration * (fig3controls.value / 100));
    });

    fig3controls.addEventListener('mousedown', function () {
        fig3tl.pause();
    });

    fig3controls.addEventListener('mouseup', function () {
        fig3tl.play();
    });
    // let fig3tl = gsap.timeline({ repeat: 2, repeatDelay: 3, paused: true });
    fig3tl.add({ targets: fig3annot1, duration: 300, opacity: 1 })
        .add({ targets: fig3annot2, duration: 300, opacity: 1 })
        .add({ targets: [fig3linenums1, fig3linenums3], duration: 300, stroke: '#622f93', delay: 3000 })
        .add({ targets: [fig3linenums3, fig3linenums1], duration: 300, stroke: '#ff2a7f' })
        .add({ targets: [fig3linenums1, fig3linenums3], duration: 300, stroke: '#622f93', delay: 300 })
        .add({ targets: [fig3linenums1, fig3linenums3], duration: 300, stroke: '#ff2a7f' })
        .add({ targets: [fig3linenums1, fig3linenums3], duration: 300, stroke: '#622f93', delay: 300 })
        .add({ targets: [fig3linenums1, fig3linenums3], duration: 300, stroke: '#ff2a7f' })
        .add({ targets: [fig3rvptdensity1, fig3rvsegdensity1, fig3rvptdensity3, fig3rvsegdensity3], duration: 300, opacity: 0, translateY: '3px' })
        .add({ targets: [fig3annot1, fig3annot2], duration: 300, opacity: 0 })
        .add({ targets: fig3annot3, duration: 300, opacity: 1 })
        .add({ targets: fig3annot5, duration: 300, opacity: 1, delay: 4000 })
        .add({ targets: fig3annot3, duration: 300, opacity: 0, delay: 4000 })
        .add({ targets: fig3annot4, duration: 300, opacity: 1 })
        .add({ targets: fig3rvptdensity2, duration: 300, opacity: 0, delay: 4000 })
        .add({ targets: [fig3annot4, fig3annot5], duration: 300, opacity: 0, delay: 1000 })
        //eg1
        .add({ targets: fig3annot6, duration: 300, opacity: 1 })
        .add({ targets: fig3eg1num, duration: 300, opacity: 1, delay: 2000 })
        .add({ targets: [fig3eg1cond, fig3eg1cond2], duration: 300, opacity: 1, delay: 1000 })
        .add({ targets: fig3eg1cond2, duration: 500, translateX: '15px', translateY: '-8px', delay: 1000, easing: 'cubicBezier(.5, .05, .1, .3)' })
        .add({ targets: fig3eg1cond2, duration: 100, opacity: 0 }, '-=100')
        .add({ targets: fig3eg1formula1, duration: 300, opacity: 1 }, '-=100')
        .add({ targets: [fig3eg1density, fig3eg1density2], duration: 300, opacity: 1, delay: 1000 })
        .add({ targets: fig3eg1density2, duration: 700, translateX: '45px', translateY: '-25px', delay: 1000, ease: 'cubicBezier(.5, .05, .1, .3)' })
        .add({ targets: fig3eg1density2, duration: 200, opacity: 0 }, '-=100')
        .add({ targets: fig3eg1formula2, duration: 300, opacity: 1 }, '-=100')
        .add({ targets: fig3eg1formulaarrow, duration: 300, opacity: 1 })
        .add({ targets: fig3eg1formula3, duration: 300, opacity: 1, delay: 300 })
        .add({ targets: fig3eg1formula4, duration: 300, opacity: 1, delay: 1000 })
        .add({ targets: fig3eg1formula5, duration: 300, opacity: 1, delay: 1000 })
        .add({ targets: [fig3annot6, fig3eg1formula1, fig3eg1formula2, fig3eg1formula3, fig3eg1formula4, fig3eg1formula5, fig3eg1formulaarrow, fig3eg1cond2, fig3eg1density2, fig3eg1cond, fig3eg1density, fig3eg1num], duration: 300, opacity: 0, delay: 2000 })
        //eg2
        .add({ targets: fig3annot7, duration: 300, opacity: 1 })
        .add({ targets: fig3eg2num, duration: 300, opacity: 1, delay: 2000 })
        .add({ targets: [fig3eg2cond, fig3eg2cond2], duration: 300, opacity: 1, delay: 1000 })
        .add({ targets: fig3eg2cond2, duration: 500, translateX: '0px', translateY: '-5px', delay: 1000, ease: 'cubicBezier(.5, .05, .1, .3)' })
        .add({ targets: fig3eg2cond2, duration: 100, opacity: 0 }, '-=100')
        .add({ targets: fig3eg2formula1, duration: 300, opacity: 1 }, '-=100')
        .add({ targets: [fig3eg2density, fig3eg2density2], duration: 300, opacity: 1, delay: 1000 })
        .add({ targets: fig3eg2density2, duration: 700, translateX: '35px', translateY: '-20px', delay: 1000, ease: 'cubicBezier(.5, .05, .1, .3)' })
        .add({ targets: fig3eg2density2, duration: 200, opacity: 0 }, '-=100')
        .add({ targets: fig3eg2formula2, duration: 300, opacity: 1 }, '-=100')
        .add({ targets: fig3eg2formulaarrow, duration: 300, opacity: 1 })
        .add({ targets: fig3eg2formula3, duration: 300, opacity: 1, delay: 300 })
        .add({ targets: fig3eg2formula4, duration: 300, opacity: 1, delay: 1000 })
        .add({ targets: [fig3annot7, fig3eg2formula1, fig3eg2formula2, fig3eg2formula3, fig3eg2formula4, fig3eg2formulaarrow, fig3eg2cond2, fig3eg2density2, fig3eg2cond, fig3eg2density, fig3eg2num], duration: 300, opacity: 0, delay: 2000 })
        .add({ targets: fig3annot8, duration: 300, opacity: 1 })
        .add({ targets: [fig3linenums2], duration: 300, stroke: '#622f93', delay: 4000 })
        .add({ targets: [fig3linenums2], duration: 300, stroke: '#ff2a7f' })
        .add({ targets: [fig3linenums2], duration: 300, stroke: '#622f93', delay: 300 })
        .add({ targets: [fig3linenums2], duration: 300, stroke: '#ff2a7f' })
        .add({ targets: [fig3linenums2], duration: 300, stroke: '#622f93', delay: 300 })
        .add({ targets: [fig3linenums2], duration: 300, stroke: '#ff2a7f' })
        .add({ targets: fig3rvsegconddensity, keyframes: [{ duration: 0, opacity: 0, translateY: '3px' }, { duration: 700, translateY: '0px', opacity: 1 }], delay: 1000 })
        .add({ targets: fig3annot9, duration: 300, opacity: 1, delay: 1000 })

    //reset
    // .to([fig3annot8, fig3annot9, fig3rvsegconddensity, fig3eg1formula1, fig3eg1formula2, fig3eg1formula3, fig3eg1formula4, fig3eg1formula5, fig3eg1formulaarrow, fig3eg1cond2, fig3eg1density2, fig3eg1cond, fig3eg1density, fig3eg1num, fig3annot1, fig3annot2, fig3annot3, fig3annot4, fig3annot5, fig3annot6], { duration: .3, opacity: 0, delay: 2 })
    // .to(fig3linenums1, { duration: .3, fill: '#ff2a7f' }, '-=.3')
    // .to([fig3rvptdensity2, fig3rvptdensity1, fig3rvsegdensity1, fig3rvptdensity3, fig3rvsegdensity3], { duration: .3, opacity: 1, transform: 'translateY(0px)' }, '-=.3')
    // .to([fig3eg2cond2, fig3eg2density2, fig3eg1cond2, fig3eg1density2, fig3rvsegconddensity], { duration: .3, transform: 'translate(0px, 0px)' });

    /* ============================================
                          fig4
       ============================================*/

    let fig4axis3 = gget('fig4-axis3'),
        fig4currentsp = gget('fig4-current-sp'),
        fig4annot0 = gget('fig4-annot-0'),
        fig4axis3label = gget('fig4-axis3-annot'),
        fig4jointdensity = gget('fig4-joint-density'),
        fig4annot1 = gget('fig4-annot-1'),
        fig4annot2 = gget('fig4-annot-2'),
        fig4a = gget('fig4-a'),
        fig4b = gget('fig4-b'),
        fig4c = gget('fig4-c'),
        fig4d = gget('fig4-d'),
        fig4eventc = gget('fig4-event-c'),
        fig4annot3 = gget('fig4-annot-3'),
        fig4annot4 = gget('fig4-annot-4'),
        fig4eventcdensity = gget('fig4-event-c-density'),
        fig4annot5 = gget('fig4-annot-5'),
        fig4annot6 = gget('fig4-annot-6'),
        fig4annot7 = gget('fig4-annot-7'),
        fig4eventcauc = gget('fig4-event-c-auc'),
        fig4annot8 = gget('fig4-annot-8'),
        fig4fulldensityauc = gget('fig4-full-density-auc'),
        fig4annot9 = gget('fig4-annot-9'),
        fig4eq1 = gget('fig4-eq-1'),
        fig4eq2 = gget('fig4-eq-2'),
        fig4eq31 = gget('fig4-eq-3-1'),
        fig4eq32 = gget('fig4-eq-3-2'),
        fig4eq4 = gget('fig4-eq-4'),
        fig4eq5 = gget('fig4-eq-5'),
        fig4eq6 = gget('fig4-eq-6'),
        fig4xy = gget('fig4-xy'),
        fig4xyc = gget('fig4-xyc'),
        fig4annot10 = gget('fig4-annot-10'),
        fig4eventcconddensity = gget('fig4-event-c-cond-density'),
        fig4xycdup = gget('fig4-xyc-dup'),
        fig4xydup = gget('fig4-xy-dup'),
        fig4eventcaucdup = gget('fig4-event-c-auc-dup');

    let fig4tl = anime.timeline({
        autoplay: false,
        loop: false,
        easing: 'linear',
        update: function (anim) {
            fig4controls.value = fig4tl.progress;
        }
    });

    var fig4controls = document.querySelector('#fig4 .animejs-controls .progress');

    document.querySelector('#fig4 .animejs-controls .play').onclick = fig4tl.play;
    document.querySelector('#fig4 .animejs-controls .pause').onclick = fig4tl.pause;
    document.querySelector('#fig4 .animejs-controls .restart').onclick = fig4tl.restart;

    fig4controls.addEventListener('input', function () {
        fig4tl.seek(fig4tl.duration * (fig4controls.value / 100));
    });

    fig4controls.addEventListener('mousedown', function () {
        fig4tl.pause();
    });

    fig4controls.addEventListener('mouseup', function () {
        fig4tl.play();
    });

    fig4tl
        .add({ targets: fig4currentsp, opacity: { value: .3 }, duration: 300, delay: 1000 })
        .add({ targets: fig4annot0, opacity: { value: 1 }, duration: 300, delay: 1000 })
        .add({ targets: fig4annot0, opacity: { value: 0 }, duration: 300, delay: 2000 })
        .add({ targets: fig4currentsp, opacity: { value: 0 }, duration: 300 }, '-=300')
        .add({ targets: fig4axis3, opacity: { value: 1 }, duration: 300 })
        .add({ targets: fig4axis3label, opacity: { value: 1 }, duration: 300 })
        .add({ targets: fig4jointdensity, opacity: { value: 1 }, duration: 300, delay: 500 })
        .add({ targets: fig4annot1, opacity: { value: 1 }, duration: 300, delay: 500 })
        .add({ targets: fig4annot2, opacity: { value: 1 }, duration: 300, delay: 1500 })
        .add({ targets: fig4fulldensityauc, opacity: { value: .3 }, duration: 300 }, '-=300')
        .add({ targets: [fig4annot1, fig4annot2, fig4fulldensityauc], opacity: { value: 0 }, duration: 300, delay: 2000 })
        .add({ targets: fig4jointdensity, opacity: { value: .4 }, duration: 300, delay: 500 })
        .add({ targets: fig4a, opacity: { value: 1 }, duration: 300, delay: 500 })
        .add({ targets: fig4b, opacity: { value: 1 }, duration: 300, delay: 300 })
        .add({ targets: fig4c, opacity: { value: 1 }, duration: 300, delay: 300 })
        .add({ targets: fig4d, opacity: { value: 1 }, duration: 300, delay: 300 })
        .add({ targets: fig4eventc, opacity: { value: 1 }, duration: 300, delay: 1000 })
        .add({ targets: fig4annot3, opacity: { value: 1 }, duration: 300 }, '-=300')
        .add({ targets: fig4annot3, opacity: { value: 0 }, duration: 300, delay: 4000 })
        .add({ targets: fig4annot4, opacity: { value: 1 }, duration: 300, delay: 500 })
        .add({ targets: fig4eventcdensity, opacity: { value: 1 }, duration: 300 }, '-=300')
        .add({ targets: fig4annot4, opacity: { value: 0 }, duration: 300, delay: 3000 })
        .add({ targets: fig4eventc, opacity: { value: .5 }, duration: 300, delay: 1000 })
        .add({ targets: fig4jointdensity, opacity: { value: 1 }, duration: 300 }, '-=300')
        .add({ targets: fig4annot5, opacity: { value: 1 }, duration: 300 })
        .add({ targets: fig4jointdensity, opacity: { value: 0 }, duration: 300, delay: 4000 })
        .add({ targets: fig4annot5, opacity: { value: 0 }, duration: 300, delay: 1000 })
        .add({ targets: fig4eventc, opacity: { value: 1 }, duration: 300 })
        .add({ targets: fig4annot6, opacity: { value: 1 }, duration: 300 })
        .add({ targets: fig4annot6, opacity: { value: 0 }, duration: 300, delay: 3000 })
        .add({ targets: fig4eventcauc, opacity: { value: .5 }, duration: 300, delay: 1000 })
        .add({ targets: fig4annot7, opacity: { value: 1 }, duration: 300 })
        .add({ targets: fig4annot7, opacity: { value: 0 }, duration: 300, delay: 2500 })
        .add({ targets: fig4annot8, opacity: { value: 1 }, duration: 300 })
        .add({ targets: fig4annot8, opacity: { value: 0 }, duration: 300, delay: 4000 })
        .add({ targets: fig4annot9, opacity: { value: 1 }, duration: 300 })
        .add({ targets: fig4xycdup, opacity: { value: 1 }, duration: 300 })
        .add({ targets: fig4xyc, opacity: { value: 1 }, duration: 300, delay: 1000 }, '-=300')
        .add({ targets: fig4xycdup, translateX: { value: '5px' }, translateY: { value: '25px' }, duration: 1000 })
        .add({ targets: fig4xycdup, opacity: { value: 0 }, duration: 300 })
        .add({ targets: fig4eq1, opacity: { value: 1 }, duration: 300 }, '-=300')
        .add({ targets: fig4xy, opacity: { value: 1 }, duration: 300, delay: 1000 })
        .add({ targets: fig4xydup, opacity: { value: 1 }, duration: 300 }, '-=300')
        .add({ targets: fig4xydup, opacity: { value: 1 }, translateX: { value: '22px' }, translateY: { value: '11px' }, duration: 1000 })
        .add({ targets: fig4xydup, opacity: { value: 0 }, duration: 300 })
        .add({ targets: [fig4eq2, fig4eq31], opacity: { value: 1 }, duration: 300 }, '-=300')
        .add({
            targets: fig4eventcaucdup,
            opacity: { value: 1 },
            d:
            {
                value: [
                    'm 136.6006,93.623768 c 0.29967,0.270148 0.41484,0.728891 0.6041,1.092978 0.67487,1.555727 1.28609,3.138286 1.88318,4.725206 0.72715,-0.666501 1.49036,-1.304373 2.33135,-1.82344 0.01,1.99997 0.0194,3.999938 0.0291,5.999908 -0.78681,0.51938 -1.57361,1.03876 -2.36042,1.55814 -0.81747,-0.81747 -1.63494,-1.63494 -2.45241,-2.45242 -0.0116,-3.033455 -0.0232,-6.066913 -0.0349,-9.100372 z',
                    'm 167.18404,109.99412 c -0.0552,0 -0.11015,0 -0.16535,0 0.15555,0.002 0.3191,-0.0129 0.46446,0.0529 0.0872,0.0379 0.15219,0.11866 0.17335,0.21101 0.0263,0.11299 0.0268,0.2399 -0.0359,0.34172 -0.0629,0.10757 -0.18573,0.16484 -0.30566,0.17954 -0.12588,0.0155 -0.26392,0.0181 -0.37492,-0.0534 -0.0869,-0.0526 -0.14446,-0.15374 -0.13285,-0.25641 0.005,-0.14755 0.0531,-0.30512 0.17232,-0.40033 0.0578,-0.0462 0.13027,-0.0751 0.20482,-0.0751 z'
                ]
            },
            easing: 'easeOutCubic',
            duration: 2000,
            delay: 1000
        }).add({ targets: fig4eventcaucdup, opacity: { value: 0 }, duration: 300 }, '-=250')
        .add({ targets: fig4eq32, opacity: { value: 1 }, duration: 300, }, '-=500')
        .add({ targets: fig4eq4, opacity: { value: 1 }, duration: 300, delay: 1000 })
        .add({ targets: [fig4eq5, fig4eq6], opacity: { value: 1 }, duration: 300, delay: 1000 })
        .add({ targets: [fig4xy, fig4xyc, fig4eventcauc], opacity: { value: 0 }, duration: 300, delay: 1000 })
        .add({ targets: fig4annot10, opacity: { value: 1 }, duration: 300, delay: 1000 })
        .add({
            targets: fig4eventcconddensity,
            keyframes: [
                { translateY: 8 },
                { opacity: 1, delay: 300, duration: 300 },
                { translateY: 0, duration: 1500 },
            ],
            easing: 'linear'
        })
        .add({ targets: '#fig4-cond-density-col', opacity: 1, duration: 300 })
        .add({ targets: fig4eventcdensity, opacity: { value: 0 }, duration: 300 })
        .add({ targets: [fig4annot9, fig4annot10], opacity: 0, duration: 300 })
        .add({ targets: '#fig4-cond-auc', opacity: 0.5, duration: 300, delay: 500 })
        .add({ targets: '#fig4-annot-11', opacity: 1, duration: 300, delay: 500 })

    /* ============================================
                          fig5
       ============================================*/
    let fig5tl = anime.timeline({
        autoplay: false,
        loop: false,
        easing: 'linear',
        update: function (anim) {
            fig5controls.value = fig5tl.progress;
        }
    });

    var fig5controls = document.querySelector('#fig5 .animejs-controls .progress');

    document.querySelector('#fig5 .animejs-controls .play').onclick = fig5tl.play;
    document.querySelector('#fig5 .animejs-controls .pause').onclick = fig5tl.pause;
    document.querySelector('#fig5 .animejs-controls .restart').onclick = fig5tl.restart;

    fig5controls.addEventListener('input', function () {
        fig5tl.seek(fig5tl.duration * (fig5controls.value / 100));
    });

    fig5controls.addEventListener('mousedown', function () {
        fig5tl.pause();
    });

    fig5controls.addEventListener('mouseup', function () {
        fig5tl.play();
    });

    fig5tl
        .add({ targets: ['#fig5 #fig5-joint-density', '#fig5 #fig5-annot-1'], opacity: { value: 1 }, duration: 300, delay: anime.stagger(500) })
        .add({ targets: '#fig5-annot-1', opacity: { value: 0 }, duration: 300, delay: 1500 })
        .add({ targets: '#fig5-annot-2', opacity: { value: 1 }, duration: 300, delay: 1000 })
        .add({ targets: ['#fig5-annot-2-1', '#fig5-annot-2-1-arrow'], keyframes: [{ opacity: 1, duration: 300 }, { opacity: 0, duration: 300, delay: 2000 }], delay: 2000 })
        .add({ targets: ['#fig5-annot-2-2', '#fig5-annot-2-2-arrow'], keyframes: [{ opacity: 1, duration: 300 }, { opacity: 0, duration: 300, delay: 5000 }] })
        .add({ targets: '#fig5-joint-slice', opacity: 1, duration: 300 }, '-=5600')
        .add({ targets: '#fig5-annot-3-arrows', opacity: { value: 1 }, duration: 300, delay: 1000 })
        .add({ targets: '#fig5-annot-3', opacity: { value: 1 }, duration: 300 })
        .add({
            targets: '#fig5-other-xs', keyframes: [
                { stroke: '#f00', strokeWidth: .3, duration: 400 }, { stroke: '#000', strokeWidth: .2, duration: 400 }, { stroke: '#f00', strokeWidth: .3, duration: 400 }, { stroke: '#000', strokeWidth: .2, duration: 400 },
                { stroke: '#f00', strokeWidth: .3, duration: 400 }, { stroke: '#000', strokeWidth: .2, duration: 400 }, { stroke: '#f00', strokeWidth: .3, duration: 400 }, { stroke: '#000', strokeWidth: .2, duration: 400 },
            ],
        })
        .add({ targets: ['#fig5-annot-3', '#fig5-annot-3-arrows'], opacity: { value: 0 }, duration: 300 })
        .add({ targets: '#fig5-annot-4', opacity: 1, duration: 300 })
        .add({ targets: ['#fig5-joint-density', '#fig5-annot-4'], opacity: 0, translateY: '2', duration: 300, delay: 2000 })
        .add({ targets: '#fig5-annot-5', keyframes: [{ opacity: 1, duration: 300, delay: 500 }, { opacity: 0, duration: 300, delay: 1500 }] })
        .add({ targets: '#fig5-annot-6', keyframes: [{ opacity: 1, duration: 300, delay: 500 }] }) //, { opacity: 0, duration: 300, delay: 5000 }] })
        .add({ targets: ['#fig5-density-slice-points'], keyframes: [{ opacity: 1, stroke: '#f00', duration: 300 }, { stroke: '#5500d4', duration: 300, delay: 2000 }], delay: 4000 })
        .add({ targets: ['#fig5-density-slice-points-annot path'], keyframes: [{ fill: '#f00', duration: 300 }, { fill: '#000', duration: 300, delay: 2000 }] }, '-=2600')
        .add({ targets: '#fig5-annot-6-eq-1', opacity: 1, delay: 1000, duration: 300 })
        .add({
            targets: '#fig5-joint-slice-dup', opacity: 1, strokeWidth: 0,
            d: {
                value: [
                    'm 14.864806,26.414849 c 1.331566,-0.565732 1.866852,-2.07374 2.486498,-3.274585 1.960795,-4.327825 3.080664,-9.044901 5.593197,-13.113714 0.788306,-1.203751 2.030067,-2.6548962 3.640831,-2.2422847 1.989002,0.6782887 3.247541,2.5101127 4.556104,4.0439527 2.328466,2.851543 4.373707,6.090774 7.511236,8.137982 1.210244,0.76392 2.721835,1.178868 4.131557,0.776994 -9.306474,1.890552 -18.612949,3.781103 -27.919423,5.671655 z',
                    'm 63.551281,34.587 c -0.118039,-0.03163 -0.288895,-0.01737 -0.447542,-0.292158 -0.158647,-0.274784 -0.103055,-0.483987 -0.0105,-0.631837 0.09256,-0.14785 0.276167,-0.285448 0.581966,-0.285448 0.305799,0 0.358988,0.108265 0.48582,0.235096 0.12683,0.12683 0.154712,0.338372 0.154712,0.452011 0,0.113639 -0.06325,0.31614 -0.18885,0.41669 -0.125601,0.100551 -0.457571,0.137275 -0.57561,0.105646 z'
                ]
            },
            duration: 1500,
            delay: 1000
        })
        .add({ targets: '#fig5-joint-slice-dup', opacity: 0, duration: 300 }, '-=200')
        .add({ targets: '#fig5-annot-6-eq-2', opacity: 1, duration: 300 }, '-=150')
        .add({ targets: ['#fig5-annot-6-eq-2', '#fig5-annot-6', '#fig5-annot-6-eq-1'], opacity: 0, duration: 300, delay: 3000 })
        .add({ targets: '#fig5-annot-7', opacity: 1, duration: 300, delay: 500 })
        .add({ targets: ['#fig5-y-y', '#fig5-y-circle'], opacity: 1, duration: 300, delay: 3000 })
        .add({ targets: ['#fig5-xyc-1', '#fig5-xyc-2',], opacity: 1, duration: 300, delay: 1000 })
        .add({
            targets: '#fig5-xyc-2', d: {
                value: [
                    'm 29.578911,5.8482563 c 0.01396,0.3676724 -0.387725,0.6631867 -0.734513,0.5416415 -0.355142,-0.095388 -0.519382,-0.566283 -0.300387,-0.8617736 0.196084,-0.311214 0.694447,-0.3288624 0.912054,-0.032298 0.07913,0.099196 0.123162,0.2255555 0.122846,0.3524301 z',
                    'm 59.944659,25.153177 c 0.01396,0.367672 -0.387725,0.663186 -0.734513,0.541641 -0.355142,-0.09539 -0.519382,-0.566283 -0.300387,-0.861773 0.196084,-0.311214 0.694447,-0.328863 0.912054,-0.0323 0.07913,0.0992 0.123162,0.225555 0.122846,0.35243 z'
                ], duration: 1000, delay: 1000
            }
        })
        .add({ targets: '#fig5-xyc-2', opacity: 0, duration: 300 })
        .add({ targets: '#fig5-words-eq1-1', opacity: 1, duration: 300 }, '-=200')
        .add({ targets: ['#fig5-xy-1', '#fig5-xy-2',], opacity: 1, duration: 300, delay: 500 })
        .add({
            targets: '#fig5-xy-2', d: {
                value: [
                    'm 29.623883,12.53663 a 0.56696427,0.56696427 0 0 1 -0.566964,0.566964 0.56696427,0.56696427 0 0 1 -0.566964,-0.566964 0.56696427,0.56696427 0 0 1 0.566964,-0.566965 0.56696427,0.56696427 0 0 1 0.566964,0.566965 z',
                    'm 82.142345,23.728541 a 0.56696427,0.56696427 0 0 1 -0.566964,0.566964 0.56696427,0.56696427 0 0 1 -0.566964,-0.566964 0.56696427,0.56696427 0 0 1 0.566964,-0.566965 0.56696427,0.56696427 0 0 1 0.566964,0.566965 z'
                ], duration: 1000, delay: 500
            }
        })
        .add({ targets: '#fig5-xy-2', opacity: 0, duration: 300 })
        .add({ targets: '#fig5-words-eq1-2', opacity: 1, duration: 300 }, '-=200')
        .add({ targets: ['#fig5-joint-slice-dup-2'], opacity: 1, duration: 300, delay: 500 })
        .add({
            targets: '#fig5-joint-slice-dup-2', d: {
                value: [
                    'm 14.864806,26.414849 c 1.331566,-0.565732 1.866852,-2.07374 2.486498,-3.274585 1.960795,-4.327825 3.080664,-9.044901 5.593197,-13.113714 0.788306,-1.203751 2.030067,-2.6548962 3.640831,-2.2422847 1.989002,0.6782887 3.247541,2.5101127 4.556104,4.0439527 2.328466,2.851543 4.373707,6.090774 7.511236,8.137982 1.210244,0.76392 2.721835,1.178868 4.131557,0.776994 -9.306474,1.890552 -18.612949,3.781103 -27.919423,5.671655 z',
                    'm 82.283958,23.161683 c -0.08911,-0.08911 -0.189383,-0.317586 -0.189383,-0.599916 0,-0.282331 0.168856,-0.553459 0.398386,-0.614961 0.229529,-0.0615 0.633515,-0.05085 0.767642,0.08327 0.134127,0.134127 0.194193,0.313044 0.242176,0.492123 0.04799,0.179079 -0.01169,0.404084 -0.102996,0.495385 -0.0913,0.0913 -0.186424,0.228101 -0.271916,0.27746 -0.08549,0.04936 -0.196563,0.07657 -0.388045,0.07657 -0.191482,0 -0.366758,-0.120831 -0.455864,-0.209937 z'
                ], duration: 1000, delay: 500
            }
        })
        .add({ targets: '#fig5-joint-slice-dup-2', opacity: 0, duration: 300 })
        .add({ targets: '#fig5-words-eq1-3', opacity: 1, duration: 300 }, '-=200')
        .add({ targets: ['#fig5-eq1-3', '#fig5-eq1-2', '#fig5-eq1-1'], opacity: 1, translateY: '-=100', duration: 1000, delay: 1000 })
        .add({ targets: ['#fig5-words-eq1-3', '#fig5-words-eq1-2', '#fig5-words-eq1-1', '#fig5-annot-7', '#fig5-xyc-1', '#fig5-xy-1', '#fig5-y-y', '#fig5-y-circle'], opacity: 0, duration: 300, delay: 5000 })
        .add({ targets: '#fig5-annot-8', opacity: 1, duration: 300, delay: 1000 })
        .add({ targets: ['#fig5-density-slice-points'], keyframes: [{ opacity: 1, stroke: '#f00', duration: 300 }, { stroke: '#5500d4', duration: 300, delay: 1000 }, { stroke: '#f00', duration: 300 }, { stroke: '#5500d4', duration: 300, delay: 1000 }], delay: 1000 })
        .add({ targets: '#fig5-cond-density', opacity: 1, duration: 300, delay: 1000 })
        .add({
            targets: '#fig5-cond-density', d: {
                value: [
                    'M 17.882392,31.038965 44.958863,25.372531 C 39.523965,26.225695 35.123356,15.883423 29.984157,12.826119 24.844958,9.7688145 22.823109,26.098248 17.882392,31.038965 Z',
                    'M 17.882392,31.038965 44.958863,25.372531 C 39.477193,25.196707 34.094368,8.6805094 28.487448,5.4361168 22.880527,2.1917241 21.419944,25.396666 17.882392,31.038965 Z'


                ], duration: 1000, delay: 500
            }
        })
        .add({ targets: '#fig5-annot-9', opacity: 1, duration: 300, delay: 1000 })
        .add({ targets: '#fig5-annot-10', opacity: 1, duration: 300, delay: 1000 })
};

function gget(id) {
    return document.getElementById(id);
}