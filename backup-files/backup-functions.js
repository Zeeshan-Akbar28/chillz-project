record_imgs = record.get("Original images") // getting data from Original images field, it returns an array

    record_imgs.forEach( img =>{
      data = img['url']     // TODO: send this url to the remove.bg app

      img_name = img['filename'] + "-bgRemoved.png"
      request(data).pipe(fs.createWriteStream(img_name))  /// converting the url image to image file

      // TODO: upload the removebg image back to the airtable
    
    })