function solution(s){
    const countP = [...s.matchAll(/p/gi)].length;
    const countY = [...s.matchAll(/y/gi)].length;
    return countP === countY;
}
function mySolution(s){
    const P = [...s].filter(i=>i==="p").length;
    const Y = [...s].filter(i=>i==="y").length;
    return P === Y ? true : false;
}

