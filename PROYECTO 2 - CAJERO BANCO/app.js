/*** index ***/
// /*Objeto usuario */
let user = {
    userName: ["Miguel", "Juan", "Carlos"],
    password: ['8912', '9514', '7835'],
    accountValue: [500, 600, 700],
    idUser: [],
}
/*funcion para crear el idUser*/
function createUserId(userName1, password1) {
    return id = userName1 + password1
}
/*Asignar idUser a cada usuario registrado*/
for (let i = 0; i < user.userName.length; i++) {
    let id = createUserId(user.userName[i], user.password[i]);
    user.idUser.push(id);
}
/*Llamar al boton y mensaje de registro */
const checkButton = document.querySelector('#check-button');
const messageContainer = document.getElementById('message-login');
const messageName = document.getElementById('user-name');
//console.log(messageContainer.textContent);
let input = "";
let userLogin = "";
let password1 = 0;
let inputPassword = 0;
let combination = "";
let locationId = 0;
/*creamos un evento con .ddEventListener donde el boton va a escuchar que esta guardado en la caja de texto y la caja de password*/
checkButton.addEventListener('click', function () {
    //captar usuario
    input = document.querySelector('#floatingInput');
    userLogin = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    //captar contraseña
    password1 = document.querySelector('#floatingPassword');
    inputPassword = password1.value;
    combination = userLogin + inputPassword;
    console.log(`Usuario: ${userLogin} password: ${inputPassword}`);
    //Validar usuario y contraseña
    if (user.idUser.includes(combination)) {
        console.log("Bienvenido")
        messageContainer.textContent = 'Por favor, registrese'
        locationId = user.idUser.indexOf(combination)
        messageName.textContent = ' ' + user.userName[locationId]
        document.querySelector('#consult-user').style.display = "block"
        document.querySelector('#login-user').style.display = "none"

    } else {
        console.log("El usuario y/o contraseña son incorrectos")
        messageContainer.textContent = 'El usuario y/o contraseña son incorrectos'
    }
});
/*Consultar saldo*/
const checkConsult = document.querySelector('#consult-balance');
const messageBalance = document.getElementById('balance');
checkConsult.addEventListener('click', function () {
    messageBalance.textContent = user.accountValue[locationId];
});
/*Ingresar Dinero*/
const checkDeposit = document.querySelector('#deposit-money');
let calcBalance = 0;
let newBalance = 0;
let callMoney = 0;
let accountStatus = 0;
let updateBalance = 0;
const messageStatus = document.querySelector('#message-account');
/*boton para ingresar dinero*/
checkDeposit.addEventListener('click', function () {
    callMoney = document.querySelector('#load-money');
    newBalance = parseInt(callMoney.value);
    accountStatus = parseInt(user.accountValue[locationId]);
    calcBalance = newBalance + accountStatus;
    /*Validar regla de negocio*/
    if (calcBalance <= 990) {
        messageStatus.classList = "alert alert-success"
        messageStatus.textContent = 'Dinero ingresado: $' + newBalance + ', su nuevo saldo es: $' + calcBalance
        updateBalance = user.accountValue.splice(locationId, 1, calcBalance)
        messageBalance.textContent = user.accountValue[locationId]
    } else if (calcBalance > 990) {
        messageStatus.classList = "alert alert-danger"
        messageStatus.textContent = 'Transacción denegada, supera el monto permitido de ingreso'
    } else {
        messageStatus.textContent = 'Ingrese valor'
    }
})
/*retirar dinero*/
const checkDeposit2 = document.querySelector('#withdraw-cash');
let calcBalance2 = 0;
let newBalance2 = 0;
let callMoney2 = 0;
let accountStatus2 = 0;
let updateBalance2 = 0;
const messageStatus2 = document.querySelector('#message-account');
/*boton para retirar dinero */
checkDeposit2.addEventListener('click', function () {
    callMoney2 = document.querySelector('#load-money');
    newBalance2 = parseInt(callMoney2.value);
    accountStatus2 = parseInt(user.accountValue[locationId]);
    calcBalance2 = accountStatus2 - newBalance2;
    console.log(calcBalance2);
    /*Validar regla de negocio*/
    if (calcBalance2 >= 10) {
        messageStatus.classList = "alert alert-warning"
        messageStatus.textContent = 'Dinero retirado: $' + newBalance2 + ', su nuevo saldo es: $' + calcBalance2
        updateBalance2 = user.accountValue.splice(locationId, 1, calcBalance2)
        messageBalance.textContent = user.accountValue[locationId]
    } else if (calcBalance2 < 10) {
        messageStatus.classList = "alert alert-danger"
        messageStatus.textContent = 'Transacción denegada, supera el monto permitido de retiro'
    } else {
        messageStatus.textContent = 'Ingrese valor'
    }
})
/*Boton salir*/
const checkExit = document.querySelector('#exitAccount');
/*parametrizacion boton salir*/
checkExit.addEventListener('click', function () {
    document.querySelector('#consult-user').style.display = "none";
    document.querySelector('#login-user').style.display = "block";
    location.reload();
})
/*boton crear usuario */
const newUser = document.querySelector('#check-new-user');
/*activar boton */
newUser.addEventListener('click', function () {
    document.querySelector('#login-user').style.display = "none";
    document.querySelector('#new-user').style.display = "block";
})
/*Registrar informacio nuevo usuario */
const recordUser = document.querySelector('#record-new-user');
const rulerMessage = document.querySelector('#ruler-message');
let newNameUser = "";
let recordName = "";
let newPassworUser = 0;
let recordPasswor = 0;
let newBalanceUser = 0;
let recordBalance = 0;
let recordBalance2 = 0;
let newIdUser = "";
let recordId = "";
let newId = "";
let rulerBalance = 0;
/*activar boton */
recordUser.addEventListener('click', function () {
    newBalanceUser = document.querySelector('#balanceNewUser');
    recordBalance = newBalanceUser.value;
    if (recordBalance <= 990) {
        newNameUser = document.querySelector('#nameNewUser');
        recordName = user.userName.push(newNameUser.value);
        newPassworUser = document.querySelector('#passworNewUser');
        recordPasswor = user.password.push(newPassworUser.value);
        recordBalance2 = user.accountValue.push(parseInt(recordBalance));
        rulerBalance = newBalanceUser.value;
        newId = user.userName[user.userName.length - 1] + user.password[user.password.length - 1];
        recordId = user.idUser.push(newId);
        console.log(user);
        document.querySelector('#login-user').style.display = "block";
        document.querySelector('#new-user').style.display = "none";
    } else {
        document.querySelector('#ruler-message').style.display = "block";
    }
})

