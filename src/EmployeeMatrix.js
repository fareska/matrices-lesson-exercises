/* Write your code below */
const matrix = require('./Matrix.js')


class EmployeeMatrix extends matrix{
    constructor(rows, cols){
        super(rows, cols)

    }

    loadData(salaryData){
        for(let i=0; i<salaryData.length; i++){
            let valArr= Object.values(salaryData[i])
            this.matrix.push(valArr)
        }
    }
}



//You can paste the code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = EmployeeMatrix