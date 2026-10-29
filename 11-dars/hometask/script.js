const talabalar=[
    {ism: "Aziz", yosh:16, ball:85},
    {ism: "Madina", yosh:15, ball:92},
    {ism: "Jasur", yosh:17, ball:74},
    {ism: "Dilnoza", yosh:16, ball:88},
    {ism: "Sardor", yosh:15, ball:61},
    {ism: "Kamola", yosh:16, ball:79},
    
];
const barchaTalabalar=document.getElementById("barchaTalabalar");
for(let i=0; i<talabalar.length; i++){
    const li=document.createElement("li");
    li.innerHTML="<b>" + talabalar[i].ism + "</b>" + talabalar[i].yosh+ " yosh, ball: " +  talabalar[i].ball;
    barchaTalabalar.appendChild(li)
}
const yuqoriBallar=document.getElementById("yuqoriBallar");
for(let i=0; i<talabalar.length; i++){
    if(talabalar[i].ball>80){
        const li=document.createElement("li");
        li.innerHTML= "<b>" + talabalar[i].ism + "</b>, ball: " + talabalar[i].ball;
        yuqoriBallar.appendChild(li)
    }
}
const statistika=document.getElementById("Statistika");
let talabalarSoni=talabalar.length;
let umimiyBall=0;
for (let i=0; i<talabalar.length; i++){
    umimiyBall=umimiyBall+talabalar[i].ball;
}
let ortachaBall=( umimiyBall/talabalarSoni).toFixed(1);
statistika.innerHTML="<p>Talabalar soni: " + talabalarSoni + "</p>" +"<p>O'rtacha ball: " + ortachaBall + "</p>";
    