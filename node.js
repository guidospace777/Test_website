const http = require('http');
const fs = require('fs');
    

const hostname = '127.0.0.1';
const port = 3000;



// load data.json

let media = {
    "media": [
        {
            "file": "comp28.tiff",
            "type": "image",
            "tags": ["laser", "webcam"]
        },
        {
            "file": "comp29.tiff",
            "type": "image",
            "tags": ["laser", "webcam"]
        },
        {
            "file": "CubittVirilioNowprepubdraft.pdf",
            "type": "pdf",
            "tags": ["text"]
        },
        {
            "file": "Desktop 2021.06.10 - 21.32.07.01.mp4",
            "type": "movie",
            "tags": ["health"]
        }

    ]
}["media"];





const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');


    // console.log(media);
    
    
    // if (req.url.startsWith("/sort")) {
    //     res.end('sort');
    // }
    // else if (req.url == "/about") {
    //     res.end('Hello doeke');
    // }

    // else {
    //     res.end('Hello World');
    // }

    create_index_page(res);

    
    
    
});



const create_index_page = function(res) {
    
    let page = "";
    
    for (let i = 0; i < media.length; i++) {
        const m = media[i];
        if (m.type == "image") {
            page += `<img src="/Sort/${m.file}" >`;
            fs.readFile(__dirname + "/Sort/" + m.file, function (err, data) {
                // ...
            });
        }

        

    }

    page += "<h1>Hello</h1>";

    res.end(page);


}






server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});