const express= require('express')
const fs= require('fs')

app.use('/static' , express static ('static'))
app.use(express.urlencoded())
app.get('view' , path.join(_dirname, 'view'))

const con = 'This is the best coder in the village manjhariya'

const press ={'bal niketan public school': con}
res.status(200).render('index2.html', params);
app.post('/',(req, res)=> { 
  name = req.body.name
  class1 = req.body.class1
  roll no. = req.body.roll no.
  
  let outputToWrite = 'the name of student is ${name}, $name reads in${class}, and ${name} roll no. is ${roll no}
  fs.writeFileSync('output.txt', outputToWrite)
const params = ('message' : 'your form is submited succesfully')
res.status(200).render('index2.html', params);

})