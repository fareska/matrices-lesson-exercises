/* Write your code below */
const matrix = require('./Matrix.js')


class EmployeeMatrix extends matrix{
    constructor(rows, cols){
        super(rows, cols)
    }

    loadData(salaryData){
        for(let i=0; i<salaryData.length; i++){
            let valArr= Object.values(salaryData[i]) // what is the complexity of this method (object.keys/values)? 
            this.matrix.push(valArr)
        }
    }

    getEmployees(department){
        
        let employees = []
        this.matrix.forEach(row=> {
            if(row[2]===department){employees.push(row[1])}
        })
        return employees
    }

    getTotalSalary(department){
        let salaries = 0 
        this.matrix.forEach(row=> {
            if(row[2]===department){salaries += row[3] }
        })
        return salaries
    }

    findRichest(){
        let richest = this.matrix[0][3]
        this.matrix.forEach(e=> {
            if(e[3] > richest) {richest = e[1]}
        })
        return richest
    }
}

class TicTacToe extends matrix{
    constructor(rows,cols){
        super(rows,cols)
    }

    loadBoard(){
        for(let r=0; r<3; r++ ){
            this.matrix.push([])
            for(let c=0; c<3; c++){
                this.matrix[r][c] = '.'
            }
        }
    }
}



//You can paste the code from the lesson below to test your solution
let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
// m.print()
//prints

// e10021  Gillian Finance 2000
// e10725  Tibor   Design  1200
// e10041  Anisha  Finance 2300
// e10411  Jakub   Design  1600
// e11995  Mar     Design  1300
// e10732  Nisha   Design  1200

// console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
// console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

// console.log(m.getTotalSalary("Finance")) //prints 4300
// console.log(m.getTotalSalary("Design")) //prints 5300

// console.log(m.findRichest()) //prints Anisha

/////////////Exercise 7
let board = new TicTacToe()
board.loadBoard()
board.print()
//prints
// .       .       .
// .       .       .
// .       .       .



/* Do not remove the exports below */
module.exports = EmployeeMatrix