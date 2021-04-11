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
        <style>
        #root{
          width: 60%;
          margin: auto;
          text-align: center;
        }
      </style>

        <title>${title}</title>
      </head>
      <body>
        
        <div id="root">
        

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