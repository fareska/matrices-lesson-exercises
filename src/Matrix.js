/* Write your code below */
class Matrix{
    constructor(rows, cols){
        this.matrix=[]
        this.counter=1
        this.generateMatrix(rows, cols)
    }

    print(){
        for(let r=0; r<this.matrix.length; r++){
            let line = ""
            for(let c=0; c<this.matrix[r].length; c++){
                line += this.matrix[r][c] + '\t'
            }
            console.log(line)
        }
    }

    generateMatrix(rows, cols){
        for(let r=0; r<rows; r++){
            this.matrix.push([])
            for(let c=0; c<cols; c++){
                this.matrix[r].push(this.counter++)
            }
        }
    }

    alter(r, c, v){
        this.matrix[r][c] = v
    }

    get(rowNum,colNum){
        return this.matrix[rowNum][colNum]
    }

    printColumn(c){
        for(let i=0; i<this.matrix.length; i++){
            console.log(this.matrix[i][c])
        }
    }

    printRow(r){
        for(let i=0; i<this.matrix[r].length; i++){
            console.log(this.matrix[r][i])
        }
    }

    findCoordinate(value){
        for(let r=0; r<this.matrix.length; r++){
            for(let c=0; c<this.matrix[r].length; c++){
                if (this.matrix[r][c]===value){
                    return {x: c, y: r}
                }
            }
        }
    }
}


//You can paste the code from the lesson below to test your solution
/*
let m = new Matrix(3, 4)
m.print()
//prints
1       2       3       4
5       6       7       8
9       10      11      12
m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)
*/

let m = new Matrix(3, 4)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}
/* Do not remove the exports below */
module.exports = Matrix