import * as ExcelJS from 'exceljs'
const workbook=new ExcelJS.Workbook()
workbook.xlsx.readFile('D:/download.xlsx').then(
    function(){
        const sheet=workbook.getWorksheet('Sheet1')
        sheet?.eachRow((row,rownumber)=>
            row.eachCell((cell,coloumnumber)=>
                console.log(cell.value)            
            )
        )
    }
)

// Another option to read the file

async function excelread(){
console.log('----------------------****************-------------')

   await  workbook.xlsx.readFile('D:/download.xlsx')
   const sheet= workbook.getWorksheet();
   sheet?.eachRow((row,rownumber)=>
    row.eachCell((cell,coloumnumber)=>
        console.log('****__'+cell.value)
    )
)
}

excelread()
