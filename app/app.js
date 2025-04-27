'use strict'
const fs = require("fs").promises;
const pathData = '../ajax/data.json'
const path = "../product_sales/product_shipment.txt"
const cleanedData = []
const formatJson = {}

async function readJson(path) {
    
    try {
       
        const dataJson = await fs.readFile(path , 'utf-8');

        const products = JSON.parse(dataJson)

        return products;

    }
    catch(e){
        console.log(e.message)
    }
    
    
}

async function readFile(filePath) {

    try {
        const data = await fs.readFile(filePath, "utf-8")

        return data;
      
    }
    catch(err){
        console.log(err.message)
    }
    
}
const startClean = (value) => (/^([12]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(value))

// const transformData = arr => arr.forEach(value => formatJson[value[2]] = value)
const  productExists = () => {}

const validateDate = (data) =>  {

    let cleanData = data.replace(/\|/g, ",").split(/\n/)
    cleanData.forEach(value => cleanedData.push(value.split(",")))
   


}

const validateProduct = (dataJson) =>{

    
    dataJson.forEach(value => {
        console.log(cleanedData[0][2])
    }
    )
  

   
}

const validateStock = () =>{}







readFile(path)
            .then(validateDate)
readJson(pathData)
            .then(validateProduct)