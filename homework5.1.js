

const canvas=document.getElementById("canvas");
const context=canvas.getContext("2d");
const a=canvas.width;
const b=canvas.height;
const z=58;
const color=["WHY SO RUDE,BABY","Never look back","violet", "pink","grey", "blue", "black", "yellow", "yellow", "brown"];
const rand = function(num) {
	return Math.floor(Math.random() * num) + 2;
};
const randwh=function(z) {
	return Math.floor(Math.random() * z) + 16;
};
const rect=function(n, a, b, c, d, e)
{
	if(n<=0)
		return;
	c=rand(a);
	d=rand(b);
	e=randwh(z)
	if(c+e>a)
		c=a-e;
	if(d+e>b)
		d=b-e;
	context.fillStyle=color[rand(5)];
	context.fillRect(c, d, e, e);
	rect(n-1, a, b);
};
rect(5, a, b);