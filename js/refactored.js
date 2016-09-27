let mainData = [] ;
let currentID = 0;
// http://snpy.in/q8xEpR
function Customer() {
  this.id = mainData.length,
  this.generalInfo = {
    company: null,
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
  },
  this.productInfo = {
    state: null
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
  currentID = mainData.length;
  new Customer();
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
});

function makeModals() {
  let currentIDM = 0;

  for (let i = 1; i <= 7; i++) {
    let $row = $('<div class="row"></div>');

    for (let j = 1; j <= 5; j++) {
      currentIDM++;
      if (j === 1) {
        var $mainCol = $(`<div class="col s1 offset-s3">`);
      } else {
        var $mainCol = $(`<div class="col s1">`);
      }
      const $modalFooter = $(`<div class="modal-footer">`);
      const $modalFooterRow = $(`<div class="row">`);
      const $inputCol = $(`<div class="col s3 offset-s1">`);
      const $input = $(`<input type="text" class="answer-submit" placeholder="Add a note here" autofocus>`);
      const $checkCol = $(`<div class="col s3">`);
      const $checkAnswer = $(`<a class="modal-action modal-close waves-effect waves-light btn blue-grey darken-1">\u2705</a>`);
      const $modalContainer = $(`<div class="modal-button-container">`);
      const $modalActivator = $(`<a class="modal-trigger waves-effect waves-light btn col${j}" href="#divArt${currentIDM}">${currentIDM}</a>`);
      const $modalType = $(`<div id="divArt${currentIDM}" class="modal modal-fixed-footer">`);
      const $modalContent = $(`<div class="modal-content">`);
      const $articleQuestion = $(`<p class="article-question" id="row${i}col${j}">Loading...</p>`);

      $checkCol.append($checkAnswer);
      $inputCol.append($input);
      $modalFooterRow.append($inputCol);
      $modalFooterRow.append($checkCol);
      $modalFooter.append($modalFooterRow);
      $modalContent.append($articleQuestion);
      $modalType.append($modalContent);
      $modalType.append($modalFooter);
      $modalContainer.append($modalActivator);
      $modalContainer.append($modalType);
      $mainCol.append($modalContainer);
      $row.append($mainCol);
    }
    $('#squares-container').append($row);
  }
}

$('#contact-toggle').on('change', () => {
  $('.contact').toggleClass('hidden');
});

$('#shipto-toggle').on('change', () => {
  $('.shipto').toggleClass('hidden');
});

$('#shipcontact-toggle').on('change', () => {
  $('.shipcontact').toggleClass('hidden');
});

$('#billto-toggle').on('change', () => {
  $('.billto').toggleClass('hidden');
});

$('#billcontact-toggle').on('change', () => {
  $('.billcontact').toggleClass('hidden');
});

(function init() {
  loadInfo();
  makeModals();
})();
