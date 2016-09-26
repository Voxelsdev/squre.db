let mainData;
let currentID = 0;

function Customer() {
  this.id = mainData.length;
  this.generalInfo = {
    company: null;
    cName: null,
    cTitle: null,
    cDept: null,
    cEmail: null,
    cPhoneO: null,
    cPhoneM: null,
    cPhoneD: null,
    cFax: null,
    sAddr: null,
    sCity: null,
    sState: null,
    sCount: null,
    sZip: null,
    sName: null,
    sTitle: null,
    sDept: null,
    sEmail: null,
    sPhoneO: null,
    sPhoneM: null,
    sPhoneD: null,
    sFax: null,
    bAddr: null,
    bCity: null,
    bState: null,
    bCount: null,
    bZip: null,
    bName: null,
    bTitle: null,
    bDept: null,
    bEmail: null,
    bPhoneO: null,
    bPhoneM: null,
    bPhoneD: null,
    bfax: null
  }
  this.productInfo = {
    someShit: null;
  }
}

function companySearch(str) {
  mainData.filter((e) => {
    return e.generalInfo.company.indexOf(str) > -1;
  },[]).forEach((e, i) => {
    $(`#result${i}`).text(e.generalInfo.company);
  });
}

function loadInfo() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      mainData = this.responseText;
    }
  }
  xhr.open('GET', 'http://localhost:8000/clients')
}


function saveCustomer() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `http://localhost:8000/clients/${currentID}`);
  xhr.send(JSON.stringify(mainData[currentID]));
}

function addInfo() {
  const currentCustomer = mainData[currentID];
  currentCustomer.generalInfo.company = $('#company').value;
  currentCustomer.generalInfo.cName = $('#name-c').value;
  currentCustomer.generalInfo.cTitle = $('#title-c').value;
  currentCustomer.generalInfo.cDept = $('#department-c').value;
  currentCustomer.generalInfo.cEmail = $('#email-c').value;
  currentCustomer.generalInfo.cPhoneO = $('#phone-co').value;
  currentCustomer.generalInfo.cPhoneM = $('#phone-cm').value;
  currentCustomer.generalInfo.cPhoneD = $('#phone-cd').value;
  currentCustomer.generalInfo.cFax = $('#fax-c').value;
  currentCustomer.generalInfo.sAddr = $('#address-s').value;
  currentCustomer.generalInfo.sCity = $('#address-city-s').value;
  currentCustomer.generalInfo.sState = $('#address-state-s').value;
  currentCustomer.generalInfo.sCount = $('#address-country-s').value;
  currentCustomer.generalInfo.sZip = $('#address-zip-s').value;
  currentCustomer.generalInfo.sName = $('#name-s').value;
  currentCustomer.generalInfo.sTitle = $('#title-s').value;
  currentCustomer.generalInfo.sDept = $('#department-s').value;
  currentCustomer.generalInfo.sEmail = $('#email-s').value;
  currentCustomer.generalInfo.sPhoneO = $('#phone-so').value;
  currentCustomer.generalInfo.sPhoneM = $('#phone-sm').value;
  currentCustomer.generalInfo.sPhoneD = $('#phone-sd').value;
  currentCustomer.generalInfo.sFax = $('#fax-s').value;
  currentCustomer.generalInfo.bAddr = $('#address-b').value;
  currentCustomer.generalInfo.bCity = $('#address-city-b').value;
  currentCustomer.generalInfo.bState = $('#address-state-b').value;
  currentCustomer.generalInfo.bCount = $('#address-country-b').value;
  currentCustomer.generalInfo.bZip = $('#address-zip-b').value;
  currentCustomer.generalInfo.bName = $('#name-b').value;
  currentCustomer.generalInfo.bTitle = $('#title-b').value;
  currentCustomer.generalInfo.bDept = $('#department-b').value;
  currentCustomer.generalInfo.bEmail = $('#email-b').value;
  currentCustomer.generalInfo.bPhoneO = $('#phone-bo').value;
  currentCustomer.generalInfo.bPhoneM = $('#phone-bm').value;
  currentCustomer.generalInfo.bPhoneD = $('#phone-bd').value;
  currentCustomer.generalInfo.bFax = $('#fax-b').value;
  const $newButton = $('<button id="new-customer">New Customer</button>');
  $sC.append($newButton);
  $add.remove();
  $cancel.remove();
  // Materialize.toast('Database Updated!', 2000);
}

$('#new-customer').on('click', () => {
  currentID = mainData.length;
  // saveCustomer(currentID);
  $('.form').removeAttr('value');
  $('#new-customer').remove();
  const $sC = $('#submit-container');
  const $add = $('<button>Add</button>');
  const $cancel = $('<button>Cancel</button>');
  $add.on('click', addInfo);
  $cancel.on('click', () => {
    const $newCustomer = $('<button id="new-customer">New Customer</button>');
    $sC.append($newCustomer);
    $('.form').removeAttr('value');
    $add.remove();
    $cancel.remove();
  });
  $sC.append($add);
  $sC.append($cancel);
  new Customer();
});

(function init() {
  loadInfo();
})();
