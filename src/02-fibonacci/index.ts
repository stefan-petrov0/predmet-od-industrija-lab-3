export function fibonacci(n:number) {
    if(n == 0){
        return []
    }
    if(n==1){
        return [0]
    }
    let first:number = 0
    let second:number = 1
    let niza:number[] = [0,1]
    n = n-2
    for(let i:number =0; i<n; i++){
        let temp:number = second
        second = first + second
        niza.push(second)
        first = temp
    }
    return niza
}
