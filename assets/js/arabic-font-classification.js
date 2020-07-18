window.onload = () => {

    var fontA = new FontFaceObserver('ArefRuqaa');
    var fontB = new FontFaceObserver('WebNastaliq');

    var GL_model = null
    var GL_resultDiv = null
    var GL_resultDiv = document.getElementById('prediction-container')
    var GL_canvas = document.getElementById('canvas');
    var GL_ctx = GL_canvas.getContext('2d');
    GL_ctx.font = '40px ArefRuqaa';
    var GL_letters = ["أ", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي"]
    var GL_fontSizeList = ['30px', '40px', '50px', '60px', '70px']
    var GL_fontList = ['ArefRuqaa', 'WebNastaliq']

    Promise.all([fontA.load(), fontB.load()]).then(
        initDemo
        , function (e) {
            console.log(e, 'Error loading fonts, trying again...');
            Promise.all([fontA.load(), fontB.load()]).then(
                initDemo
                , function (err) {
                    console.log(err);
                });
        });

    function initDemo() {

        drawText(document.getElementById('input-text').value)

        document.querySelectorAll('#sample-images-container img').forEach(function (el) {
            el.addEventListener('click', function () {
                predict(el)
            })
        })
        document.getElementById('upload-image').addEventListener('input', function () {
            if (this.files && this.files[0]) {
                let img = document.createElement('img');
                img.width = 100
                img.height = 100
                img.src = URL.createObjectURL(this.files[0]);
                img.onload = () => predict(img);
            }
        });

        document.getElementById('synthesize-btn').addEventListener('click', function () {
            // random bg
            // random bg opacity
            // random bg text
            // random bg text opacity
            // random bg text font
            // random bg text font size
            // random bg text position
            // random num words
            // random font size
            // random font opacity
            // random font position
            // noise = tf.random.normal(shape=tf.shape(image), mean=0.0, stddev=0.015, dtype=tf.float32)
            // image = tf.add( image, noise)
            // image = tf.clip_by_value(image, 0.0, 1.0)
            // image = tf.image.adjust_jpeg_quality(image, 90)

            GL_ctx.fillStyle = 'white'
            GL_ctx.fillRect(0, 0, 100, 100)

            let text = document.getElementById('input-text').value
            let font = document.getElementById('font-select').value
            let ctxfont = 'ArefRuqaa'
            switch (font) {
                case 'ruqaa':
                    ctxfont = "ArefRuqaa";
                    break;
                case 'farsi':
                    ctxfont = "WebNastaliq";
                    break;
                default:
                    ctxfont = "ArefRuqaa";
                    break;
            }
            let randomBg = getRandomInt(48) + 1
            let randomAlpha = () => (getRandomInt(26) + 75) / 100 // [0.75, 1.]
            let randomBgTextSize = getRandomInt(5) + 3
            let randomBgTextAlpha = (getRandomInt(2) + 3) / 100
            let randomFont = () => getRandomInt(2)
            let randomFontSize = () => getRandomInt(5)
            let randomColor = (getRandomInt(26) + 75) / 100
            let randomPosition = () => getRandomInt(51) + 25

            randomBgImg = document.createElement('img');
            randomBgImg.src = '../assets/imgs/arabic-font-classification/bgs/bg' + randomBg + '.jpg'
            randomBgImg.width = 100
            randomBgImg.height = 100
            randomBgImg.onload = () => {
                GL_ctx.globalAlpha = randomAlpha()
                GL_ctx.drawImage(randomBgImg, 0, 0, 100, 100)
                if (randomBg <= 15) {
                    let word = ''
                    for (let i = 0; i <= randomBgTextSize; i++) {
                        word += GL_letters[getRandomInt(28)]
                    }
                    GL_ctx.fillStyle = 'black'
                    GL_ctx.globalAlpha = randomBgTextAlpha
                    GL_ctx.font = GL_fontSizeList[randomFontSize()] + ' ' + GL_fontList[randomFont()]
                    GL_ctx.fillText(word, randomPosition(), randomPosition())
                }

                GL_ctx.globalAlpha = 1
                GL_ctx.font = GL_fontSizeList[randomFontSize()] + ' ' + ctxfont
                GL_ctx.fillStyle = "rgba(0, 0, 0, " + randomAlpha() + ")"
                GL_ctx.fillText(text, randomPosition(), randomPosition())
            }
        })

        document.getElementById('font-select').addEventListener('input', function () {
            var text = document.getElementById('input-text').value
            drawText(text)
        })
        document.getElementById('predict-btn').addEventListener('click', function () {
            let imgData = GL_canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            let image = document.createElement('img')
            image.src = imgData
            image.width = 100
            image.height = 100
            image.onload = () => predict(image);
        })

        document.getElementById('input-text').oninput = function (e) {
            var text = e.target.value
            drawText(text)
        }
    }

    function drawText(text) {
        GL_ctx.fillStyle = "white"
        GL_ctx.fillRect(0, 0, 100, 100);
        GL_ctx.fillStyle = "rgba(0, 0, 0, 1)"
        let ctxfont = 'ArefRuqaa'
        switch (document.getElementById('font-select').value) {
            case 'ruqaa':
                ctxfont = "ArefRuqaa";
                break;
            case 'farsi':
                ctxfont = "WebNastaliq";
                break;
            default:
                ctxfont = "ArefRuqaa";
                break;
        }
        GL_ctx.font = '40px' + ' ' + ctxfont

        GL_ctx.textAlign = "center"
        GL_ctx.fillText(text, 50, 60)
    }

    function loadModel() {
        document.getElementById('loading-model-text').innerText = 'Loading model...'
        var promise = tf.loadLayersModel('../../assets/jsmodels/fontmodel/model.json')
        return promise.then(res => {
            GL_model = res
            document.getElementById('loading-model-text').classList.add('success')
            document.getElementById('loading-model-text').innerText = 'Model loaded'
            setTimeout(() =>
                document.getElementById('loading-model-text').classList.add('hidden'), 1500)

            console.log('model loaded')
        })
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function predict(img) {
        GL_resultDiv.innerHTML = ' '
        document.querySelector('.prediction-container-wrapper .prediction-icon svg').classList.add('predict')
        if (GL_model == null) {
            loadModel().then(() => {
                predict_()
            })
        } else {
            predict_()
        }
        function predict_() {
            GL_ctx.drawImage(img, 0, 0, 100, 100)
            let imgData = GL_canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            let localImage = document.createElement('img')
            localImage.width = 100
            localImage.height = 100
            localImage.src = imgData //img.src
            localImage.onload = () => {
                imgtensor = tf.browser.fromPixels(localImage)
                    .mean(2)
                    .toFloat()
                    .expandDims(-1)
                imgtensor = tf.image.resizeNearestNeighbor(imgtensor, [100, 100])
                imgtensor = imgtensor.reshape([1, 100, 100, 1])
                imgds = tf.data.array([imgtensor])
                imgds = imgds.batch(1)
                GL_model.predict(imgtensor).data().then((e) => {
                    document.querySelector('.prediction-container-wrapper .prediction-icon svg').classList.remove('predict')
                    GL_resultDiv.innerHTML = parseFloat(e.toString()) > 0.5 ? 'Ruqaa' : 'Nastaliq (Farsi)'
                    // console.log(e)
                })
            }
        }
    }

    var fig3BgOpacity = {
        value: '51%'
    }
    var fig3WordCount = {
        value: 105702
    }
    var fig3BgFontSize = {
        value: 20
    }
    var fig3BgTextPos = {
        x: 100,
        y: 50
    }
    var fig3BgTextOpacity = {
        value: 100
    }
    var fig3NumWords = {
        value: 2
    }
    var fig3FontSize = {
        value: 30
    }
    var fig3TextOpacity = {
        value: 100
    }
    var fig3TextPos = {
        x: 50,
        y: 60
    }
    var fig3NoiseOpacity = {
        value: 50
    }

    var fig3tl = anime.timeline({
        autoplay: false,
        loop: false,
        easing: 'linear',
        update: function (anim) {
            fig3controls.value = fig3tl.progress;
        },
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

    //fig3-annot1
    //fig3-bgs-container
    //fig3-gen-bg
    //fig3-annot2
    //fig3-bg-opacity-container
    //fig3-bg-opacity



    fig3tl
        .add({
            targets: ['#fig3-annot1', '#fig3-bgs-container'], duration: 300, opacity: 1, delay: anime.stagger(500)
        })
        .add({
            targets: '#fig3-bgs', duration: 2500, translateX: '-288px', easing: 'easeInOutBack', delay: 2000
        })
        .add({
            targets: '#fig3-gen-bg', duration: 200, opacity: 1, delay: 200
        })
        .add({
            targets: ['#fig3-annot2', '#fig3-bg-opacity-container'], duration: 300, opacity: 1, delay: 1000
        })
        .add({
            targets: fig3BgOpacity, duration: 5000, value: '79%', delay: 1000, round: 1, easing: 'spring(1.5, 20, 6, 0)', update: function () {
                document.querySelector('#fig3-bg-opacity-container tspan').textContent = fig3BgOpacity.value
                document.getElementById('fig3-gen-bg').style.opacity = Number((fig3BgOpacity.value).substring(0, 2)) / 100
            }
        })
        .add({
            targets: ['#fig3-annot1', '#fig3-bgs-container', '#fig3-annot2', '#fig3-bg-opacity-container'], opacity: 0, delay: 700, duration: 300
        })

        //fig3-annot3
        //fig3-wordlist-container
        //fig3-wordlist
        //fig3-wordlist-word1
        //fig3-annot4
        //fig3-wordlist-count
        //fig3-gen-bg-text
        //fig3-gen-bg-text2
        //fig3-bg-text-size
        //fig3-bg-text-pos
        //fig3-bg-text-opacity
        //fig3-bg-text-font-container
        //fig3-bg-text-size-container
        //fig3-bg-text-pos-container
        //fig3-bg-text-opacity-container
        //fig3-wordlist-word2

        .add({
            targets: ['#fig3-annot3', '#fig3-wordlist-container', '#fig3-annot4'], duration: 300, opacity: 1, delay: anime.stagger(700)
        })
        .add({
            targets: '#fig3-wordlist', duration: 3500, translateX: '-220px', easing: 'easeInOutBack', delay: 4000
        })
        .add({
            targets: '#fig3-gen-bg-text', duration: 200, opacity: 1, delay: 200
        })
        .add({
            targets: '#fig3-wordlist-word1', duration: 200, opacity: .7, fill: '#f00', delay: 500
        })
        .add({
            targets: fig3WordCount, duration: 500, value: 105701, round: 1, delay: 500, update: () => {
                document.getElementById('fig3-wordlist-count').textContent = fig3WordCount.value
            }
        })
        .add({
            targets: '#fig3-bg-text-font-container', duration: 300, opacity: 1, delay: 500
        })
        .add({
            targets: '#fig3-gen-bg-text', duration: 10, opacity: 0, delay: 10
        })
        .add({
            targets: '#fig3-gen-bg-text2', duration: 10, opacity: 1, delay: 10
        })
        .add({
            targets: '#fig3-bg-text-size-container', duration: 300, opacity: 1, delay: 1000
        })
        .add({
            targets: fig3BgFontSize, duration: 2000, value: 50, round: 1, delay: 700, easing: 'easeInOutBack', update: () => {
                document.querySelector('#fig3-bg-text-size tspan').textContent = fig3BgFontSize.value
            }
        })
        .add({
            targets: '#fig3-gen-bg-text2', duration: 10, opacity: 0, delay: 10
        })
        .add({
            targets: '#fig3-gen-bg-text3', duration: 10, opacity: 1, delay: 10
        })
        .add({
            targets: '#fig3-bg-text-pos-container', duration: 300, opacity: 1, delay: 500
        })
        .add({
            targets: fig3BgTextPos, duration: 2000, x: 80, y: 150, round: 1, delay: 700, easing: 'easeInOutBack', update: () => {
                document.querySelector('#fig3-bg-text-pos tspan').textContent = 'x: ' + fig3BgTextPos.x + 'px, y: ' + fig3BgTextPos.y + 'px'
                anime({ targets: '#fig3-gen-bg-text3', duration: 1000, translateX: -(fig3BgTextPos.x - 75), translateY: (fig3BgTextPos.y / 2 - 45) })
            }
        })
        .add({
            targets: '#fig3-bg-text-opacity-container', duration: 300, opacity: 1, delay: 500
        })
        .add({
            targets: fig3BgTextOpacity, duration: 2000, value: 10, round: 1, delay: 700, easing: 'easeInOutBack', update: () => {
                document.querySelector('#fig3-bg-text-opacity tspan').textContent = (fig3BgTextOpacity.value > 100 ? 100 : fig3BgTextOpacity.value) + '%'
                anime({ targets: '#fig3-gen-bg-text3', duration: 1000, opacity: fig3BgTextOpacity.value / 100 })
            }
        })
        .add({ targets: '#fig3-annot3', opacity: 1, duration: 2500, delay: 100 })//pause
        .add({
            targets: ['#fig3-bg-text-opacity-container', '#fig3-bg-text-pos-container', '#fig3-bg-text-size-container', '#fig3-bg-text-font-container', '#fig3-annot3'],
            duration: 300, delay: anime.stagger(300), opacity: 0
        })

        //fig3-annot5-1
        //fig3-annot5-2
        //fig3-annot5-3
        //fig3-num-words-container
        //fig3-num-words
        //fig3-wordlist-word2
        //fig3-gen-text
        //fig3-gen-text2
        //fig3-text-size-container
        //fig3-text-size
        //fig3-text-opacity-container
        //fig3-text-opacity
        //fig3-text-pos-container
        //fig3-text-pos
        .add({ targets: '#fig3-annot3', opacity: 0, duration: 500, delay: 100 })//pause
        .add({
            targets: ['#fig3-annot5-1', '#fig3-num-words-container'], opacity: 1, duration: 300, delay: anime.stagger(2000)
        })
        .add({
            targets: fig3NumWords, duration: 200, delay: 1800, round: 1, value: 3, update: () => {
                document.querySelector('#fig3-num-words tspan').textContent = fig3NumWords.value
            }
        })
        .add({
            targets: fig3NumWords, duration: 200, delay: 200, round: 1, value: 1, update: () => {
                document.querySelector('#fig3-num-words tspan').textContent = fig3NumWords.value
            }
        })
        .add({
            targets: fig3NumWords, duration: 200, delay: 200, round: 1, value: 3, update: () => {
                document.querySelector('#fig3-num-words tspan').textContent = fig3NumWords.value
            }
        })
        .add({
            targets: fig3NumWords, duration: 200, delay: 200, round: 1, value: 1, update: () => {
                document.querySelector('#fig3-num-words tspan').textContent = fig3NumWords.value
            }
        })
        .add({
            targets: '#fig3-annot5-2', duration: 300, opacity: 1, delay: 1500
        })
        .add({
            targets: '#fig3-wordlist', duration: 3500, translateX: '-54px', easing: 'easeInOutBack', delay: 2500
        })
        .add({
            targets: '#fig3-gen-text', opacity: 1, duration: 300, delay: 500
        })
        .add({
            targets: '#fig3-wordlist-word2', duration: 200, opacity: .7, fill: '#f00', delay: 500
        })
        .add({
            targets: fig3WordCount, duration: 500, value: 105700, round: 1, delay: 500, update: () => {
                document.getElementById('fig3-wordlist-count').textContent = fig3WordCount.value
            }
        })
        .add({
            targets: '#fig3-annot5-3', duration: 300, opacity: 1, delay: 1500
        })
        .add({
            targets: '#fig3-text-size-container', opacity: 1, duration: 300, delay: 2000
        })
        .add({
            targets: fig3FontSize, duration: 2000, value: 75, round: 1, delay: 700, easing: 'easeInOutBack', update: () => {
                document.querySelector('#fig3-text-size tspan').textContent = fig3FontSize.value
            }
        })
        .add({
            targets: '#fig3-gen-text', duration: 10, opacity: 0, delay: 10
        })
        .add({
            targets: '#fig3-gen-text2', duration: 10, opacity: 1, delay: 10
        })
        .add({
            targets: '#fig3-text-opacity-container', duration: 300, opacity: 1, delay: 500
        })
        .add({
            targets: fig3TextOpacity, duration: 2000, value: 70, round: 1, delay: 700, easing: 'easeInOutBack', update: () => {
                document.querySelector('#fig3-text-opacity tspan').textContent = (fig3TextOpacity.value > 100 ? 100 : fig3TextOpacity.value) + '%'
                anime({ targets: '#fig3-gen-text2', duration: 300, opacity: fig3TextOpacity.value / 100 })
            }
        })
        .add({
            targets: '#fig3-text-pos-container', duration: 300, opacity: 1, delay: 500
        })

        .add({
            targets: '#fig3-text-pos-container', duration: 300, opacity: 1, delay: 500//pause
        })
        .add({
            targets: fig3TextPos, duration: 2000, x: 10, y: 75, round: 1, delay: 100, easing: 'easeInOutBack', update: () => {
                document.querySelector('#fig3-text-pos tspan').textContent = 'x: ' + fig3TextPos.x + 'px, y: ' + fig3TextPos.y + 'px'
                anime({ targets: '#fig3-gen-text2', duration: 1000, translateX: -(fig3TextPos.x - 27), translateY: (fig3TextPos.y / 2 - 45) })
            }
        })
        .add({ targets: '#fig3-annot5-1', opacity: 1, duration: 2500, delay: 100 })//pause
        .add({
            targets: ['#fig3-text-pos-container', '#fig3-text-opacity-container', '#fig3-text-size-container', '#fig3-num-words-container', '#fig3-annot4', '#fig3-wordlist-container'],
            duration: 300, delay: anime.stagger(300), opacity: 0
        })
        .add({
            targets: ['#fig3-annot5-3', '#fig3-annot5-2', '#fig3-annot5-1'], duration: 300, opacity: 0, delay: 300

        })

        //fig3-annot6
        .add({
            targets: ['#fig3-annot6'], duration: 300, delay: 1000, opacity: 1
        })
        .add({
            targets: fig3NoiseOpacity, duration: 1000, delay: 1000, value: 100, round: 1, easing: 'easeInOutBack', update: () => {
                document.getElementById('fig3-gen-noise').style.opacity = Number(fig3NoiseOpacity.value)
            }
        })
        .add({
            targets: ['#fig3-annot6'], duration: 300, delay: 300, opacity: 1//pause
        })
        .add({
            targets: ['#fig3-annot7', '#fig3-real-gs', '#fig3-gen-gs'], opacity: 1, delay: anime.stagger(500), duration: 300
        })
};