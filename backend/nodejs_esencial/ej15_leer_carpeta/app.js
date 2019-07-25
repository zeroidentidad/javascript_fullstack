var fs = require("fs");

fs.readdir('./archivos', { withFileTypes:true } , (error, items )=>{
    console.log( items);
} );