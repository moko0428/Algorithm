function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    return arr.length <= 1 ? [-1] : arr
}
function stackSolution(arr){
    let stack = arr.sort((a, b) => b - a).pop()
    return arr.length === 0 ? [-1] : arr
}
