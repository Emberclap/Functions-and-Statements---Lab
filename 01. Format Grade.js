function solve(grade){
    if(grade < 3){
        return console.log(`Fail (${grade})`)
    }
    if(grade < 3.50){
        return console.log(`Poor (${grade.toFixed(2)})`)
    }
    if(grade < 4.50){
        return console.log(`Good (${grade.toFixed(2)})`)
    }
    if(grade < 5.50){
        return console.log(`Very good (${grade.toFixed(2)})`)
    }
    else{
        return console.log(`Excellent (${grade.toFixed(2)})`)
    }
}
solve(3.33)