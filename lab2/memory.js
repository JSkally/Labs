/*
 * Memory - classic card game
 * (C) 2012 by Gavriel Fleischer
 * http://neswork.com/javascript/js1k/2012/
 */
 
 window.onload = function() {
    var divs = document.getElementsByClassName("c");
    for(var i=0; i<divs.length; i++) {
        divs[i].onclick = setAudio
    }
}

var setAudio = function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://upload.wikimedia.org/wikipedia/commons/8/83/Alien_technology_scanning_device.ogg');
    audioElement.load()
    audioElement.play(); 
}

    var winElement = document.createElement('audio');
    winElement.setAttribute('src', 'http://upload.wikimedia.org/wikipedia/commons/5/5b/Applause_i.ogg');
    winElement.load()
     
  
// constants we use a lot of time
var A ="position:absolute;";
var W ="width:99px;height:99px;";
var v, b, q, c, p, i, d, h, x, y;

// set class; we only use it on the element that always should have "w", so just add the rest
function C(e,c){e.className="w "+c}

// add css3 prefixes
function P(s){return";-webkit-"+s+";-moz-"+s+";-o-"+s}

// get out a random element from an array
function R(a){return a.splice(0|a.length*Math.random(),1)[0]}

// set up styles
// 1st I tried 3d transitions, but opera doesn't support hem yet
document.querySelector("head").innerHTML="<style>\
    /* wrapper for the border of the card */\
    .w{"
        +W
        +"border:1px solid #777\
        ;text-align:center\
        ;margin:5px\
        ;float:left"
        +"\
    }\
    \
    .v .b,.p .b{"
        +P("transform:scale(0)") +"\
    }\
    /* card */\
    .c{"
        +W
        +A
        +"font-size:80px\
    }\
    /* â™¥â™ â™¦â™£ on the card */\
    b{"
        +A
        +"font-size:24px\
        ;left:5px\
    }\
    /* back of the card and â™¥â™¦ are red */\
    .b,.r{\
        color:red\
    }\
    /* back of the card */\
    .b{\
        background:#ddf"
        +P("transition:1s") +"\
    }\
</style>";

/*
 * Flip the card
 *
 * We use classes to be able to count some group of cards:
 * "p" is used for "paired" cards that stay visible forever
 * "v" is used for the 1 or 2 cards that we turned on and are currently "visible"
 */
function F(t){
    // get the visible cards
    v=b.querySelectorAll(".v");
    x=v[0];
    y=v[1];
    // if 2 cards are visible we need to turn them back /*v.length==2*/
    if(y)
        C(x,""),
        C(y,"");
    // if one card was visible we need to compare it with the one we just turned /* v.length==1 */
    if(x&&!y&&x!=t&&x.innerHTML==t.innerHTML)
    {
        // if they match we sign them as "paired"
        C(x,"p"),
        C(t,"p"),
        l--;
    }
    else C(t,"v");
    
    // otherwise we set the currently turned card to visible

    // see if we finished the whole pack
    if(!l)
    {
        winElement.play();
        alert("Thanks!!!");
        
    }
}

// Counter for the number of pairs left
var l=8;

// Fill in p array that represents the pack of cards.
q="0A23456789JQK♥♠♦♣".split("");
q[0]=10;
p=[];
for(c=13;c<17;c++)
    for(i=0;i<13;i++)
        p.push([c%2?' r':'',c,q[i]]);

// Pull out a card and put it on the deck twice. Those will be the pairs.
d=[];
for(i=0;i<8;i++)
    d[i]=d[i+8]=R(p);

// start to draw the screen
h='<div style="width:450px">';
// we need to create 16 cards
for(i=16;i;i--)
    // take out a random element from the cards on the deck
    c=R(d),
    h+='<div class="w" onclick="F(this)"><div class="c f'
        +c[0]
        +'"><b>'
        +q[c[1]]
        +'</b>'
        +c[2]
        +'</div><div class="c b">ӝ</div></div>';
// add it to the DOM
b.innerHTML=h+'</div>';