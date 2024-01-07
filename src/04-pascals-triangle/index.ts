export function getPascalsTriangleRow(rowIndex:number) {
    if (rowIndex == 0) {
        return [1]
    }
    if (rowIndex == 1) {
        return [1, 1]
    }
    let row:number[] = [1, 1]
    for (let i = 2; i <= rowIndex; i++) {
        let newrow:number[] = []
        for (let k = 0; k <= row.length; k++){
            if(k==0 || k==row.length){
                newrow.push(1)
            }else{
                newrow.push(row[k]+row[k-1])
            }
        }
        row = newrow
    }

    return(row)
}