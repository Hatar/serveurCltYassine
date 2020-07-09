//Vatiable
const
 ip_serveur = document.querySelector('#ip_serveur'),
 subnet_serveur = document.querySelector('#subnet_serveur'),
 getway_serveur = document.querySelector('#getway_serveur'),
 ip_clt = document.querySelector('#ip_client'),
 subnet_clt = document.querySelector('#subnet_client'),
 getway_clt = document.querySelector('#getway_client'),
 protocol = document.querySelector('#protocol'),
 port   = document.querySelector('#port'),
 interval = document.querySelector('#interval'),
 ssid = document.querySelector('#ssid'),
 password = document.querySelector('#password'),

 // Form
 btn_ser = document.querySelector('#form_serveur'),
 btn_clt = document.querySelector('#form_client'),
 btn_wifi = document.querySelector('#form_wifi');

//Function
EventListener()

function EventListener() {
 document.querySelector('#clrBtn_serveur').addEventListener('click', clearDataServ)
 document.querySelector('#clrBtn_Clt').addEventListener('click', clearDataClt)
 document.querySelector('#clrBtn_wifi').addEventListener('click', clearDataWifi)
 ip_serveur.addEventListener('blur', ValidateField)
 subnet_serveur.addEventListener('blur', ValidateField)
 getway_serveur.addEventListener('blur', ValidateField)
 ip_clt.addEventListener('blur', ValidateField)
 subnet_clt.addEventListener('blur', ValidateField)
 getway_clt.addEventListener('blur', ValidateField)
 protocol.addEventListener('blur', ValidateField)
 port.addEventListener('blur',ValidateField)
 interval.addEventListener('blur', ValidateField)
 ssid.addEventListener('blur', ValidateField)
 password.addEventListener('blur', ValidateField)


 btn_ser.addEventListener('submit',submitFromServ)
 //btn_clt.addEventListener('submit',submitFromClt)
 //btn_wifi.addEventListener('submit',submitFromWifi)

}
function clearDataServ() {
  btn_ser.reset();
}

function clearDataClt() {
  btn_clt.reset();
}

function clearDataWifi() {
 btn_wifi.reset();
}

function ValidateField() {
 let erreur;
 if (this.name == 'ip_serveur' || this.name == 'getway_serveur' || this.name == 'ip_client' || this.name == 'getway_client') {
  checkValidateIP(this)
 }
 if (this.name == 'subnet_serveur' || this.name == 'subnet_client') {
  checkSubnet(this)
 }
 if (this.name == 'getway_serveur' || this.name == 'getway_client') {
  checkValidateGetway(this)
 }
 if (this.name == 'ssid') {
  checkValidName(this)
 }
 if(this.name == 'port'){
   checkPort(this)
 }
}
function checkValidateIP(field) {
 var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
 if (field.value.length == 0) {
  field.style.borderColor = 'red'
  field.classList.add('error')
  setErreur(field, 'IP Adresse can\'t be empty');
 } else if (field.value.match(ipformat)) {
  field.style.borderColor = 'green'
  field.classList.remove('error')
  setSuccessFor(field);
 } else {
  field.style.borderColor = 'red'
  field.classList.add('error')
  setErreur(field, 'Please Insert Valide IP Adresse');
 }
}

function checkSubnet(field) {
 let  subnetFormat = /^(\d{1,3})$/,
      formIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
 if (field.value.length == 0) {
  field.style.borderColor = 'red'
  field.classList.add('error')
  setErreur(field, 'Subnet can\'t be empty');
 } else if (field.value.match(subnetFormat) || field.value.match(formIp)) {
  field.style.borderColor = 'green'
  field.classList.remove('error')
  setSuccessFor(field);
 } else {
  field.style.borderColor = 'red'
  field.classList.add('error')
  setErreur(field, 'Please Insert Valide Subnet');
 }
}

function checkValidateGetway(field) {
 var getwayFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
 if (field.value.length == 0) {
  field.style.borderColor = 'red'
  field.classList.add('error')
  setErreur(field, 'Getway can\'t be empty');
 } else if (field.value.match(getwayFormat)) {
  field.style.borderColor = 'green'
  field.classList.remove('error')
  setSuccessFor(field);
 } else {
  field.style.borderColor = 'red'
  field.classList.add('error')
  setErreur(field, 'Please Insert Valide Getway');
 }
}

function checkValidName(field) {
 let format = /[^a-zA-Z0-9\-]/.test(field)
 if (field.value == "") {
  setErreur(field, 'SSID Can\'t be Empty')
  field.style.borderColor = 'red'
  field.classList.add('error')
 } else if (field.value.length > 35) {
  setErreur(field, 'SSID name cannot be more than 35 characters')
  field.style.borderColor = 'red'
  field.classList.add('error')
 } else if (field.value.match(format)) {
  setErreur(field, 'SSID name can only contain alphanumeric characters a')
  field.style.borderColor = 'red'
  field.classList.add('error')
 } else {
  field.style.borderColor = 'green'
  field.classList.remove('error')
  setSuccessFor(field);
 }
}

function checkPort(field){
  let testPort = /^(\d{1,6})$/;
  if(field.value == ""){
  field.style.borderColor = 'red'
  field.classList.add('error')
  setErreur(field, 'Port can\'t be empty');
  }else if(field.value.match(testPort)){
  field.style.borderColor = 'green'
  field.classList.remove('error')
  setSuccessFor(field);
  } else {
  field.style.borderColor = 'red'
  field.classList.add('error')
  setErreur(field, 'Please Insert Valide Port');
  }
}

function setErreur(input, message) {
 const formGroup = input.parentElement;
 const span = formGroup.querySelector('span');
 span.innerText = message;
}

function setSuccessFor(input) {
 const formGroup = input.parentElement;
 const span = formGroup.querySelector('span');
 span.innerText = '';

}

//check Password
(function() {
 var helperText = {
  charLength: document.querySelector('.helper-text .length'),
  lowercase: document.querySelector('.helper-text .lowercase'),
  uppercase: document.querySelector('.helper-text .uppercase'),
  special: document.querySelector('.helper-text .special')
 };

 var pattern = {
  charLength: function() {
   if (password.value.length >= 8) {
    return true;
   }
  },
  lowercase: function() {
   var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

   if (regex.test(password.value)) {
    return true;
   }
  },
  uppercase: function() {
   var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

   if (regex.test(password.value)) {
    return true;
   }
  },
  special: function() {
   var regex = /^(?=.*[0-9_\W]).+$/; // Special character or number pattern

   if (regex.test(password.value)) {
    return true;
   }
  }
 };

 // Listen for keyup action on password field
 password.addEventListener('keyup', function() {
  // Check that password is a minimum of 8 characters
  patternTest(pattern.charLength(), helperText.charLength);

  // Check that password contains a lowercase letter
  patternTest(pattern.lowercase(), helperText.lowercase);

  // Check that password contains an uppercase letter
  patternTest(pattern.uppercase(), helperText.uppercase);

  // Check that password contains a number or special character
  patternTest(pattern.special(), helperText.special);

  // Check that all requirements are fulfilled
  if (hasClass(helperText.charLength, 'valid') &&
   hasClass(helperText.lowercase, 'valid') &&
   hasClass(helperText.uppercase, 'valid') &&
   hasClass(helperText.special, 'valid')
  ) {
   addClass(password.parentElement, 'valid');
  } else {
   removeClass(password.parentElement, 'valid');
  }
 });

 function patternTest(pattern, response) {
  if (pattern) {
   addClass(response, 'valid');
  } else {
   removeClass(response, 'valid');
  }
 }

 function addClass(el, className) {
  if (el.classList) {
   el.classList.add(className);
  } else {
   el.className += ' ' + className;
  }
 }

 function removeClass(el, className) {
  if (el.classList)
   el.classList.remove(className);
  else
   el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
 }

 function hasClass(el, className) {
  if (el.classList) {
   return el.classList.contains(className);
  } else {
   new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
 }

})();

function submitFromServ(e) {
  e.preventDefault()

  const spinner = document.querySelector('#spinner')
  spinner.style.display="block"
  //Create Element img
  const image = document.createElement('img')
  image.src="img/mail.gif"
  image.style.display="block"
  setTimeout(function(){
      spinner.style.display="none";
      document.querySelector('#loaders').appendChild(image)

      setTimeout(function(){
          btn_ser.reset()
          image.remove()
      },5000)
  },3000)
}
