const canvas=document.getElementById("canvas");
const context=canvas.getContext("2d");
a=canvas.width;
b=canvas.height;
const rand1 = function(num) {
return Math.floor(Math.random() * num) + num/3;
};
const rand2 = function(num) {
return Math.floor(Math.random() * num) + 100;
};
const rand = function(num) {
return Math.floor(Math.random() * num) + 1;
};
const backgroundimage=new Image();
backgroundimage.src="https://img-aws.ehowcdn.com/877x500p/cache.gettyimages.com/xc/78433556.jpg?v=1&c=EWSAsset&k=2&d=82EB172C4407816CD6AD124853FC35B367FD1F53CCB839E48E7735103CFC9933";
const sharkimage=new Image();
sharkimage.src="https://cdn.pixabay.com/photo/2017/05/16/10/10/shark-2317422_960_720.png"
const diverimage1=new Image();
diverimage1.src="https://vignette4.wikia.nocookie.net/vsbattles/images/4/43/Shark-PNG-File.png/revision/latest?cb=20161009232414";
const diverimage2=new Image();
diverimage2.src="https://cdn.pixabay.com/photo/2013/07/13/12/46/shark-160289_640.png";
const dolphineimage1=new Image();
dolphineimage1.src="http://pngimg.com/uploads/dolphin/dolphin_PNG9117.png";
const dolphineimage2=new Image();
dolphineimage2.src="https://orig00.deviantart.net/c0fe/f/2012/258/1/3/dolphin__digital__33_by_wolverine041269-d5esmcr.png";
const nemoimage=new Image();
nemoimage.src="https://vignette.wikia.nocookie.net/pixar/images/8/8d/Nemo_Promo_1.png/revision/latest?cb=20160710221424";
const gamedata={
levelstart:0,
shark: {
x:88,
y:245,
width:75,
height:98,
xdelta:22,
ydelta:0,
firstp:0
},
diver: {
width: 55,
height: 82,
x: rand1(a)-100,
y: rand2(b)-100,
xdelta: 6,
ydelta:2,
imageing: diverimage1
},
dolphine: {
width: 55,
height: 82,
x: rand1(a)-101,
y: rand2(b)-98,
xdelta: 7,
ydelta:4,
imageing: dolphineimage1
},
nemo: {
width: 55,
height: 82,
x: rand1(a)-101,
y: rand2(b)-98,
xdelta: 8,
ydelta:5,
imageing: nemoimage
}
};
const shark=gamedata.shark;
const diver=gamedata.diver;
const dolphine=gamedata.dolphine;
const nemo=gamedata.nemo;
const draw=function()
{
context.drawImage(backgroundimage, 0, 0, a, b);
context.drawImage(sharkimage, shark.x, shark.y, shark.width, shark.height);
context.drawImage(diver.imageing,diver.x, diver.y, diver.width, diver.height);
if(gamedata.levelstart>=5)
context.drawImage(dolphine.imageing ,dolphine.x, dolphine.y, dolphine.width, dolphine.height);
if(gamedata.levelstart>=10)
context.drawImage(nemo.imageing, nemo.x, nemo.y, nemo.width, nemo.height);

if(diver.x<=shark.x+shark.width && diver.x+diver.width>=shark.x && diver.y+diver.height>=shark.y && shark.y+shark.height>=diver.y)
alert("GAME IS OVER");
if(gamedata.levelstart>=5 && (dolphine.x<=shark.x+shark.width && dolphine.x+dolphine.width>=shark.x && dolphine.y+dolphine.height>=shark.y && shark.y+shark.height>=dolphine.y))
alert("GAME IS OVER");
if(gamedata.levelstart>=10 && (nemo.x<=shark.x+shark.width && nemo.x+nemo.width>=shark.x && nemo.y+nemo.height>=shark.y && shark.y+shark.height>=nemo.y))
alert("GAME IS OVER");
};
const updateing=function()
{
if(diver.x<=0)
{
gamedata.levelstart=gamedata.levelstart+1;
diver.imageing=diverimage2;
diver.xdelta=-rand(17);
}
if(diver.x>=a-diver.width)
{
diver.imageing=diverimage1;
diver.x=a-diver.width;
diver.xdelta=rand(16);
}
if(diver.y>=b-diver.height)
{
diver.y=b-diver.height;
diver.ydelta=-diver.ydelta;
}
if(diver.y<=0)
{
diver.y=0;
diver.ydelta=-diver.ydelta;
};
diver.x=diver.x-diver.xdelta;
diver.y=diver.y-diver.ydelta;
}
const updateing2=function()
{
if(dolphine.x<=0)
{
dolphine.imageing=dolphineimage2;
dolphine.xdelta=-rand(16);
}
if(dolphine.x>=a-dolphine.width)
{
dolphine.imageing=dolphineimage1;
dolphine.x=a-dolphine.width;
dolphine.xdelta=rand(17);
}
if(dolphine.y>=b-dolphine.height)
{
dolphine.y=b-dolphine.height;
dolphine.ydelta=-dolphine.ydelta;
}
if(dolphine.y<=0)
{
dolphine.y=0;
dolphine.ydelta=-dolphine.ydelta;
};
dolphine.x=dolphine.x-dolphine.xdelta;
dolphine.y=dolphine.y-dolphine.ydelta;
}
const updateing3=function()
{
if(nemo.x<=0)
{
nemo.xdelta=-rand(14);
}
if(nemo.x>=a-nemo.width)
{
nemo.x=a-nemo.width;
nemo.xdelta=rand(13);
}
if(nemo.y>=b-nemo.height)
{
nemo.y=b-nemo.height;
nemo.ydelta=-nemo.ydelta;
}
if(nemo.y<=0)
{
nemo.y=0;
nemo.ydelta=-nemo.ydelta;
};
nemo.x=nemo.x-nemo.xdelta;
nemo.y=nemo.y-nemo.ydelta;
}
const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;

document.addEventListener('keydown', function(event) {
if(event.keyCode === upKey)
{
shark.firstp=shark.y
shark.ydelta=10;
}
if(event.keyCode===downKey)
{
shark.y=b-shark.height;
shark.ydelta=0;
}
if(event.keyCode===rightKey)
{
shark.x=shark.x+shark.xdelta;
if(shark.x>=a-shark.width)
shark.x=a-shark.width;
}
if(event.keyCode===leftKey)
{
shark.x=shark.x-shark.xdelta;
if(shark.x<=0)
shark.x=0;
}
}, false);
const update=function()
{
shark.y=shark.y-shark.ydelta;
if(shark.y<=0)
{
shark.y=0;
shark.ydelta=-shark.ydelta;
}
if(shark.y<shark.firstp-shark.height)
shark.ydelta=-shark.ydelta;
if(shark.y>=b-shark.height)
{
shark.y=b-shark.height;
shark.ydelta=0;
}
};
const loop=function()
{
draw();
update();
updateing();
updateing2();
updateing3();
requestAnimationFrame(loop);
};

loop();

