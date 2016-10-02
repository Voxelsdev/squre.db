const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, 'data.json');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const morgan = require('morgan');
const bodyParser = require('body-parser');

function createValidObject(req) {
  const out = {};
  out.id = req.body.id,
  out.generalInfo = {
    company: req.body.generalInfo.company,
    cName: req.body.generalInfo.company,
    cTitle: req.body.generalInfo.cTitle,
    cDept: req.body.generalInfo.cDept,
    cEmail: req.body.generalInfo.cEmail,
    cPhoneO: req.body.generalInfo.cPhoneO,
    cPhoneM: req.body.generalInfo.cPhoneM,
    cPhoneD: req.body.generalInfo.cPhoneD,
    cFax: req.body.generalInfo.cFax,
    sAddr: req.body.generalInfo.sAddr,
    sCity: req.body.generalInfo.sCity,
    sState: req.body.generalInfo.sState,
    sCount: req.body.generalInfo.sCount,
    sZip: req.body.generalInfo.sZip,
    sName: req.body.generalInfo.sName,
    sTitle: req.body.generalInfo.sTitle,
    sDept: req.body.generalInfo.sDept,
    sEmail: req.body.generalInfo.sEmail,
    sPhoneO: req.body.generalInfo.sPhoneO,
    sPhoneM: req.body.generalInfo.sPhoneM,
    sPhoneD: req.body.generalInfo.sPhoneD,
    sFax: req.body.generalInfo.sFax,
    bAddr: req.body.generalInfo.bAddr,
    bCity: req.body.generalInfo.bCity,
    bState: req.body.generalInfo.bState,
    bCount: req.body.generalInfo.bCount,
    bZip: req.body.generalInfo.bZip,
    bName: req.body.generalInfo.bName,
    bTitle: req.body.generalInfo.bTitle,
    bDept: req.body.generalInfo.bDept,
    bEmail: req.body.generalInfo.bEmail,
    bPhoneO: req.body.generalInfo.bPhoneO,
    bPhoneM: req.body.generalInfo.bPhoneM,
    bPhoneD: req.body.generalInfo.bPhoneD,
    bfax: req.body.generalInfo.bFax
  };
  out.productInfo = {
    product1: {
      note: req.body.productInfo.product1.note,
      name: req.body.productInfo.product1.name,
      status: req.body.productInfo.product1.status
    },
    product2: {
      note: req.body.productInfo.product2.note,
      name: req.body.productInfo.product2.name,
      status: req.body.productInfo.product2.status
    },
    product3: {
      note: req.body.productInfo.product3.note,
      name: req.body.productInfo.product3.name,
      status: req.body.productInfo.product3.status
    },
    product4: {
      note: req.body.productInfo.product4.note,
      name: req.body.productInfo.product4.name,
      status: req.body.productInfo.product4.status
    },
    product5: {
      note: req.body.productInfo.product5.note,
      name: req.body.productInfo.product5.name,
      status: req.body.productInfo.product5.status
    },
    product6: {
      note: req.body.productInfo.product6.note,
      name: req.body.productInfo.product6.name,
      status: req.body.productInfo.product6.status
    },
    product7: {
      note: req.body.productInfo.product7.note,
      name: req.body.productInfo.product7.name,
      status: req.body.productInfo.product7.status
    },
    product8: {
      note: req.body.productInfo.product8.note,
      name: req.body.productInfo.product8.name,
      status: req.body.productInfo.product8.status
    },
    product9: {
      note: req.body.productInfo.product9.note,
      name: req.body.productInfo.product9.name,
      status: req.body.productInfo.product9.status
    },
    product10: {
      note: req.body.productInfo.product10.note,
      name: req.body.productInfo.product10.name,
      status: req.body.productInfo.product10.status
    },
    product11: {
      note: req.body.productInfo.product11.note,
      name: req.body.productInfo.product11.name,
      status: req.body.productInfo.product11.status
    },
    product12: {
      note: req.body.productInfo.product12.note,
      name: req.body.productInfo.product12.name,
      status: req.body.productInfo.product12.status
    },
    product13: {
      note: req.body.productInfo.product13.note,
      name: req.body.productInfo.product13.name,
      status: req.body.productInfo.product13.status
    },
    product14: {
      note: req.body.productInfo.product14.note,
      name: req.body.productInfo.product14.name,
      status: req.body.productInfo.product14.status
    },
    product15: {
      note: req.body.productInfo.product15.note,
      name: req.body.productInfo.product15.name,
      status: req.body.productInfo.product15.status
    },
    product16: {
      note: req.body.productInfo.product16.note,
      name: req.body.productInfo.product16.name,
      status: req.body.productInfo.product16.status
    },
    product17: {
      note: req.body.productInfo.product17.note,
      name: req.body.productInfo.product17.name,
      status: req.body.productInfo.product17.status
    },
    product18: {
      note: req.body.productInfo.product18.note,
      name: req.body.productInfo.product18.name,
      status: req.body.productInfo.product18.status
    },
    product19: {
      note: req.body.productInfo.product19.note,
      name: req.body.productInfo.product19.name,
      status: req.body.productInfo.product19.status
    },
    product20: {
      note: req.body.productInfo.product20.note,
      name: req.body.productInfo.product20.name,
      status: req.body.productInfo.product20.status
    },
    product21: {
      note: req.body.productInfo.product21.note,
      name: req.body.productInfo.product21.name,
      status: req.body.productInfo.product21.status
    },
    product22: {
      note: req.body.productInfo.product22.note,
      name: req.body.productInfo.product22.name,
      status: req.body.productInfo.product22.status
    },
    product23: {
      note: req.body.productInfo.product23.note,
      name: req.body.productInfo.product23.name,
      status: req.body.productInfo.product23.status
    },
    product24: {
      note: req.body.productInfo.product24.note,
      name: req.body.productInfo.product24.name,
      status: req.body.productInfo.product24.status
    },
    product25: {
      note: req.body.productInfo.product25.note,
      name: req.body.productInfo.product25.name,
      status: req.body.productInfo.product25.status
    },
    product26: {
      note: req.body.productInfo.product26.note,
      name: req.body.productInfo.product26.name,
      status: req.body.productInfo.product26.status
    },
    product27: {
      note: req.body.productInfo.product27.note,
      name: req.body.productInfo.product27.name,
      status: req.body.productInfo.product27.status
    },
    product28: {
      note: req.body.productInfo.product28.note,
      name: req.body.productInfo.product28.name,
      status: req.body.productInfo.product28.status
    },
    product29: {
      note: req.body.productInfo.product29.note,
      name: req.body.productInfo.product29.name,
      status: req.body.productInfo.product29.status
    },
    product30: {
      note: req.body.productInfo.product30.note,
      name: req.body.productInfo.product30.name,
      status: req.body.productInfo.product30.status
    },
    product31: {
      note: req.body.productInfo.product31.note,
      name: req.body.productInfo.product31.name,
      status: req.body.productInfo.product31.status
    },
    product32: {
      note: req.body.productInfo.product32.note,
      name: req.body.productInfo.product32.name,
      status: req.body.productInfo.product32.status
    },
    product33: {
      note: req.body.productInfo.product33.note,
      name: req.body.productInfo.product33.name,
      status: req.body.productInfo.product33.status
    },
    product34: {
      note: req.body.productInfo.product34.note,
      name: req.body.productInfo.product34.name,
      status: req.body.productInfo.product34.status
    },
    product35: {
      note: req.body.productInfo.product35.note,
      name: req.body.productInfo.product35.name,
      status: req.body.productInfo.product35.status
    }
  }
  return obj;
}

app.disable('x-powered-by');

app.use('/clients', express.static('index.html'));

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

    const person = createValidObject(req);
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
    const person = createValidObject(req);
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

/*
app.put('/pets/:id', (req, res) => {
  const pet = createValidObject(req);
  const id = parseInt(req.params.id);

  if (pet !== null) {
    pets[id] = pet;
    writeFile(pets, res, pet, 'application/json');
  } else {
    sendStat(res, 400);
  }
});

function sendStat(res, stat){
  res.set('Content-Type', 'text/plain');
  res.sendStatus(stat);
}
*/
