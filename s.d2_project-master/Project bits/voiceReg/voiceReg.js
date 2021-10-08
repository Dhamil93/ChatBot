
const voice = document.querySelector("#mic");
const voice2text = document.querySelector('#voice2text');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const record = new SpeechRecognition();

record.onstart = () => {
    console.log('Recorder on');
}

record.onresult = (event) => {
    console.log(event);
    const resultIndex = event.resultIndex;
    voice2text.textContent = event.results[resultIndex][0].transcript;
}

voice.addEventListener('click', () => {
    record.start();
})
window.addEventListener('keypress', (key) => {
    if (key.key === 'Spacebar') {
        record.stop();
        console.log('Recorder stopped');
    }
});

