export function sumOfMultiples(multiple:number, max:number) {
    if(multiple > max){
        return 0
    }
    let amount:number = 0
    let count:number=1
    while(max >= multiple){
        max -= multiple
        amount+=count*multiple
        count+=1
    }
    return amount
}
