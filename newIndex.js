const { error } = require('console');
const fs = require('fs');
fs.readFile("nodejs_architecture.txt", (err, data)=>{
    if(err){
        console.error("Error in reading the file", err);
    }
    else{
        console.log("Data: "+ data);
    }
})

const advt = "Node.js architecture, known for its event-driven, non-blocking, and single-threaded design, excels in handling concurrent connections for real-time applications. Leveraging the V8 JavaScript engine, it ensures fast code execution. CommonJS modules enhance code organization, while the libuv library supports efficient asynchronous I/O operations, contributing to scalability. With built-in modules for HTTP and HTTPS, Node.js simplifies server-side development, ensuring responsive and efficient web applications. The Node Package Manager (NPM) further streamlines package management, solidifying Node.js as a widely adopted and versatile platform in modern web development."

fs.appendFile("nodejs_architecture.txt", advt,(err)=>{
    if(err){
        console.error("Error in Appending", err);
    }
    else{
        console.log("Successfully Appended");
    }
})

//Deleting nodejs_architecture
fs.unlink('nodejs_architecture.txt', (err)=>{
    if(err){
        console.error('Error in deleting the file',err);
    }
    else{
        console.log("File deleted successfully");
    }
})