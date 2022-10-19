function solution(order){
  return ('' + order).split(/[369]/g).length - 1;
}
