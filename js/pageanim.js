const logoSo= document.querySelector(`#logoSo`);
const tl= new TimelineMax();
tl.fromTo(logoSo,1,{opacity:0, left:30},{opacity:1, x:0})