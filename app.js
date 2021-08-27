window.onload=function(){
    //selector
    const article = document.body;
    
    // We could also add the  'touchend' event for touch devices, but since 
    // most iOS/Android browsers already show a dialog when you select 
    // text (often with a Share option) we'll skip that
    article.addEventListener('mouseup', handlerFunction, false);

    // Mouse up event handler function
    function handlerFunction(event) {
        if(window.getSelection().toString().length > 0) {
            speak(window.getSelection().toString());
        }
    }
    
    //convert text to speak
    function speak(speakText){
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'hi-IN';
        utter.text = speakText;
        utter.volume = 1;
        utter.rate = 1;
        utter.pitch = 0.4;
        
        window.speechSynthesis.speak(utter);
    }
}
