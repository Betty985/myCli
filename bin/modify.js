const fs = require('fs') 
const {resolve}=require('path')
const root = process.cwd()
module.exports=(name)=>{
    const path=resolve(root,`${name}/package.json`)
    const data = fs.readFileSync(path, 'utf8').split('\n')
    data[1]= `  "name": "${name}",`
    console.log(data)
    fs.writeFileSync(path, data.join('\n'), 'utf8')
}