import * as ExcelJS from 'exceljs'

const workbook = new ExcelJS.Workbook

workbook.xlsx.readFile('D:/download.xlsx').then(
    function () {
        const sheet = workbook.getWorksheet('Sheet1')

        sheet?.eachRow((row, rownumber) =>
            row.eachCell((cell, cellnumber) =>
                console.log(cell.value)
            )
        )
    }
)
