import * as ExcelJS from 'exceljs'
const workbook = new ExcelJS.Workbook()
workbook.xlsx.readFile('D:/download.xlsx')/*.then(
    function () {
        const sheet = workbook.getWorksheet('Sheet1')
        sheet?.eachRow((row, rownumber) =>
            row.eachCell((cell, coloumnumber) =>
                console.log(cell.value)
            )
        )
    }
)*/

// Another option to read the file


async function excelread(name: string) {
    console.log('----------------------****************-------------')
    let rowvalue = { row: -1, coloum: -1 }
    await workbook.xlsx.readFile('./download.xlsx')
    const sheet = workbook.getWorksheet();
    sheet?.eachRow((row, rownumber) =>
        row.eachCell((cell, coloumnumber) => {
            if(cell.value===name){
            rowvalue.row = rownumber,
                rowvalue.coloum = coloumnumber
                console.log(rowvalue.row + "  "+rowvalue.coloum)
            }
        }
        )
    )
    const cell=sheet?.getCell(rowvalue.row,rowvalue.coloum);
    console.log(rowvalue.row,rowvalue.coloum)
   if(cell){
    cell.value="iPhone"
   }
   //
  // if(!sheet)  throw new Error('Sheet not present')
   //const colum =sheet?.getCell(rowvalue.row,rowvalue.coloum)
   //colum.value="iphone";
    await workbook.xlsx.writeFile('./download.xlsx')
}

excelread("Kivi")
