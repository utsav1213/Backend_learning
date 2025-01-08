const fs = require('fs');
const { lchown } = require('fs/promises');


// -------------------------------------------------------------------------------------------
// Synchronous operations 
// -------------------------------------------------------------------------------------------


// 1. Create a folder space_project

// fs.mkdirSync('space_project')


// 2. Inside the folder, create a file log.txt and add the line "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft."

// let data = 'ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.'
// fs.writeFileSync('space_project/log.txt',data)


// 3. Now, replace the line in the log.txt file with "ISRO has started working on Gaganyaan."

// let d = 'ISRO has started working on Gaganyaan.'
// fs.writeFileSync('space_project/log.txt',d)


// 4. Append another line to the log.txt file " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission."

// let t = '\nThe current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.'
// fs.appendFileSync('space_project/log.txt',t)


// 5. Rename the log.txt file to update.txt
// fs.renameSync('space_project/log.txt','space_project/update.txt')


// 6. Read the update.txt file and display the data. Additionally print a line "We are excited" using console.log() after the read operation
// let a = fs.readFileSync('space_project/update.txt','utf-8')
// console.log(a)
// console.log('We are excited')


// 7. Delete the file update.txt
// fs.unlinkSync('space_project/update.txt')


// 8. Delete the folder space_project
// fs.rmdirSync('space_project')


// -------------------------------------------------------------------------------------------
// Asynchronous operations 
// -------------------------------------------------------------------------------------------


// 1. Create a folder space_project

// fs.mkdir('space_project',(err)=>{
//     if(err) throw err;
// })


// 2. 

// let data = 'ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.'
// fs.writeFile('space_project/log.txt',data,(err)=>{
//     if(err) throw err;
// })


// 3.

// let d = 'ISRO has started working on Gaganyaan.'

// fs.writeFile('space_project/log.txt', d,(err)=>{
//     if(err) throw err;
// })


// 4. Append another line to the log.txt file " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission."

// let t = '\nThe current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.'

// fs.appendFile('space_project/log.txt',t,(err)=>{
//     if(err) throw err;
// })



// 5. Rename the log.txt file to update.txt
// fs.rename('space_project/log.txt','space_project/update.txt',(err)=>{
//     if(err) {throw err;}
// })


// 6. Read the update.txt file and display the data. Additionally print a line "We are excited" using console.log() after the read operation

// fs.readFile('space_project/update.txt',(err,a)=>{
//     if(err){
//         throw err;
//     }
//     console.log(a.toString())
// console.log('We are excited')
// })
//     


// 7. Delete the file update.txt

// fs.unlink('space_project/update.txt',(err)=>{
//     if(err)
//     {
//         throw err;
//     }
// })


// 8. Delete the folder space_project

fs.rmdir('space_project',(err)=>{
 if(err){throw err}   
})