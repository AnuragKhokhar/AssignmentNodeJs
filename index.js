const fs = require('fs');

const fileContent = "Node.js is an event-driven, single-threaded runtime built on the V8 JavaScript engine. Its architecture revolves around an event loop that efficiently manages asynchronous operations, allowing Node.js to handle numerous connections concurrently. Utilizing the libuv library for asynchronous I/O and following the CommonJS module system, Node.js promotes modular code organization. Its non-blocking I/O model ensures high performance, making it suitable for building scalable web applications and APIs. The global object is `global`, and Node.js introduces Buffers for handling binary data directly. With built-in modules for HTTP and HTTPS, Node.js empowers developers to create server-side applications that excel in responsiveness and efficiency. The Node Package Manager (NPM) further facilitates package management, making Node.js a versatile and widely adopted platform for modern web development."

fs.writeFile("nodejs_architecture.txt", fileContent, (err)=>{
    if(err){
        console.error('Error creating file', err);
    }
    else{
        console.log('File Created Successfully:');
    }
})