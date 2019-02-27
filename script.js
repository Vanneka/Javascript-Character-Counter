//Function to reset the words in the text section
function resetWords() {
    var theText = document.getElementById('input-text');
    var theCount = document.getElementById('word-count');

    theText.value= "";
    theCount.value= "";
}

function countWords() {
    var theText = document.getElementById('input-text'); 
    var theCount = document.getElementById('word-count');

    theCount.value = theText.value.length;
}