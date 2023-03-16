/*
    Type Writer Effect On Text
*/

var  myText = 'youssef el khadir is the best one',

    i = 0,

    myButton = document.getElementById('btn');

myButton.onclick = function () {

    'use strict';

    var typeWriter = setInterval(function () {

        document.getElementById('type').textContent += myText[i];

        i = i + 1;

        if (i > myText.length - 1) {
            
            clearInterval(typeWriter);

        }

    }, 50);
};