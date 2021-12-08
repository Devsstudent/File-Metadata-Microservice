var express = require('express');
var cors = require('cors');
var multer = require('multer');
var upload = multer({dest: 'upload/'});

require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',  upload.single('upfile'),(req, res) => {
  let return_obj = {};
  return_obj['name']= req.file.originalname;
  return_obj['type']= req.file.mimetype;
  return_obj['size']= req.file.size;
  res.send(return_obj);
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
