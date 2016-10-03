const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '/public/js/data.json');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const morgan = require('morgan');
const bodyParser = require('body-parser');

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname ,'public/index.html'));
});

app.get('/clients', (req, res) => {
  fs.readFile(dataPath, 'utf8', (readErr, customers) => {
    if (readErr) {
      console.error(readErr.stack);
      return res.sendStatus(500);
    }

    const mainData = JSON.parse(customers);
    res.send(mainData);
  });
});

app.post('/clients', (req, res) => {
  fs.readFile(dataPath, 'utf8', (readErr, data) => {
    if(readErr) {
      console.error(readErr.stack);
      return res.sendStatus(500);
    }

    const person = req.body;
    const mainData = JSON.parse(data);

    mainData.push(person);
    fs.writeFile(dataPath, JSON.stringify(mainData), (writeErr) => {
      if (writeErr) {
        console.error(writeErr.stack);
        return res.sendStatus(500);
      }

      res.set('Content-Type', 'application/json');
      res.send('Updated');
    });
  });
});

app.put('/clients/:id', (req, res) => {
  fs.readFile(dataPath, 'utf8', (readErr, data) => {
    const mainData = JSON.parse(data);
    const person = req.body;
    const id = parseInt(req.params.id);

    if (person !== null) {
      mainData[id] = person;
      fs.writeFile(dataPath, JSON.stringify(mainData), (writeErr) => {
        if (writeErr) {
          console.error(writeErr.stack);
          return res.sendStatus(500);
        }

        res.set('Content-Type', 'application/json');
        res.send('Updated');
      });
    } else {
      res.set('Content-Type', 'text/plain');
      res.sendStatus(400);
    }
  });
});

app.use((req, res) => {
  res.sendStatus(404);
})

app.listen(port,() => {
  console.log(`Listening on port ${port}`);
});
