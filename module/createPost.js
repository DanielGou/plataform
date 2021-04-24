const fs = require('fs')
const mongodb = require('mongodb')

let binary = mongodb.Binary



function createPost(name, title, post){

    return binary(`
    
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <script data-ad-client="ca-pub-8195627923230046" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');

        #bodyPost{
          width: 70%;
          margin: auto;
          text-align: center;
          margin-top: 130px;
          font-family: 'Open Sans Condensed', sans-serif;
        }
        h1{
          word-break: break-all;
        }
      </style>

        <title>${title}</title>
      </head>
      <body>
        
        <div id="bodyPost">
        

        <h1>
            ${title}
        </h1>

        ${post}
    
    
        </div>
    
    
      </body>
    </html>
    
       `)
}


module.exports = createPost;