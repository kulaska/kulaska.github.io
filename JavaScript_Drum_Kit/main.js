var down = false;

const keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];
const sources = ['boom', 'clap', 'hihat', 'kick', 'openhat', 'ride', 'snare', 'tink', 'tom'];
       
document.addEventListener('keydown', evt => {
    if (down) return;
    down = true;        
    for (let i = 0; i < keys.length; i++) {
        let str = `[data-key="${keys[i]}"]`;            
        if (evt.which == keys[i]) {               
            document.querySelector(str).classList.add('playing');            
            let audio = new Audio('sounds/' + sources[i] + '.wav');
            audio.play();            
        };
        setTimeout(() => {
            document.querySelector(str).classList.remove('playing');
            down = false;
        }, 10)
    }       
});    



