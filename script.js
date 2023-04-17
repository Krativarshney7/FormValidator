const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const address = document.getElementById("Address");
const address1 = document.getElementById("Address1");
const address2 = document.getElementById("Address2");
const add = document.getElementsByClassName("add");
const city = document.getElementById("inputCity");
const state = document.getElementById("inputState");
const country = document.getElementById("inputCountry");
const zip = document.getElementById("inputZip");
const client = document.getElementsByName("client");
const mails = document.getElementsByClassName("mails");
const radio = document.getElementsByClassName("myRadio");
const primary = document.getElementsByName("Primary");
const phones = document.getElementsByClassName("phones");
const pradio = document.getElementsByClassName("phnRadio");
const phne = document.getElementsByName("Phone");

const Resetform = () => {
  form.reset();
  let elementsArray = [
    fname,
    lname,
    address,
    address1,
    address2,
    city,
    state,
    country,
    zip,
    ...mails,
    ...phones
  ];

  const resetEmail = () =>{
    while(mails.length!=1){
        removeInputField(mails.length);
    }
}
resetEmail();

const resetPhone = () =>{
    while(phones.length!=1){
        removePhoneField(phones.length);
    }
}
resetPhone();

  const setDefault = (element) => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector(".error");

    errorDisplay.innerText = "";
    element.classList.remove("alert-danger");
    element.classList.remove("is-invalid");
    element.classList.remove("is-valid");
  };

  elementsArray.forEach((element) => {
    setDefault(element);
  });

  document.getElementById("Update").style.display = "none";
  document.getElementById("Submit").style.display = "inline";
};

function showError(input, message) {
  const error = input.parentElement.parentElement;
  const errorElement = error.querySelector(".error");
  errorElement.classList.add("alert-danger");
  errorElement.innerText = message;
  errorElement.style.display = "inline";
}

function showSuccess(input) {
  const error = input.parentElement.parentElement;
  const errorElement = error.querySelector(".error");
  errorElement.classList.remove("alert-danger");
  input.classList.remove("is-invalid");
  errorElement.style.display = "none";
}

const validFname = () => {
  const reg = /^[a-zA-Z]{1,30}$/;
  const name1 = fname.value.trim();
  if (name1 == "") {
    showError(fname, "First Name cannot be empty!");
    return false;
  } else if (name1.length < 3 || name1.length > 30) {
    showError(fname, "First Name should lie in the range of 3-30!");
    return false;
  } else if (!reg.test(name1)) {
    showError(fname, "Name can only contain letters");
    return false;
  } else {
    showSuccess(fname);
    return true;
  }
};

const validLname = () => {
  const reg = /^[a-zA-Z]{1,30}$/;
  const name2 = lname.value.trim();
  if (name2 == "") {
    showError(lname, "Last Name cannot be empty!");
    return false;
  } else if (name2.length < 3 || name2.length > 30) {
    showError(lname, "Last Name should lie in the range of 3-30!");
    return false;
  } else if (!reg.test(name2)) {
    showError(lname, "Name can only contain letters");
    return false;
  } else {
    showSuccess(lname);
    return true;
  }
};

const validAdd = () => {
    const add = address.value.trim();
    if (add == "") {
        showError(address, "Address cannot be empty!");
        return false;
    }
    else if (add.length < 10) {
        showError(address, "Address length should be 10 characters long!");
        return false;
    }
    else {
        showSuccess(address);
        return true;
    }
}

const validCity = () => {
    const City = city.value.trim();
    if (City == "") {
        showError(city, "City cannot be empty!");
        return false;
    }
    else if (City.length < 3) {
        showError(city, "City length should be 3 characters long!");
        return false;
    }
    else {
        showSuccess(city);
        return true;
    }
}

const validState = () => {
    const State = state.value.trim();
    if (State == "") {
        showError(state, "State cannot be empty!");
        return false;
    }
    else if (State.length < 2) {
        showError(state, "State length should be 2 characters long!");
        return false;
    }
    else {
        showSuccess(state);
        return true;
    }
}

const validCountry = () => {
    const Country = country.value.trim();
    if (Country == "") {
        showError(country, "Country cannot be empty!");
        return false;
    }
    else if (Country.length < 3) {
        showError(country, "Country length should be 3 characters long!");
        return false;
    }
    else {
        showSuccess(country);
        return true;
    }
}

const validZip = () => {
    const Zip = zip.value.trim();
    if (Zip == "") {
        showError(zip, "Zip Code cannot be empty!");
        return false;
    }
    else if (Zip.length < 3) {
        showError(zip, "Zip Code length should be 3 characters long!");
        return false;
    }
    else {
        showSuccess(zip);
        return true;
    }
}

const validEmail = (val) => {
    const reg = /\S+@\S+\.\S+/;
    const email = document.getElementById(`email${val}`);
    const Email = email.value;
    if (Email == "") {
        showError(email, "Email cannot be empty!");
        return false;
    }
    else if (!reg.test(Email)) {
        showError(email, "Invalid email format");
        return false;
    } 
    else if(validDuplicate(Email)){
        showError(email, "Email already exists!");
        return false;
    }
    else {
        showSuccess(email);
        return true;
    }
}

const validDuplicate = (data) => {
    let ecount=0;
    for (let v = 0; v < mails.length; v++) {
      if (data == mails[v].value) {
        ecount++;
      }
    }
    if(ecount>1){
        return true;
    }
  };

const validPhone = (eve) => {
    const reg = /^[6-9]\d{9}$/;
    const phone = document.getElementById(`phone${eve}`);
    const Phone = phone.value.trim();
    if (Phone == "") {
        showError(phone, "Phone Number cannot be empty!");
        return false;
    }
    else if (!reg.test(Phone)) {
        showError(phone, "Invalid phone format");
        return false;
    }
    else if(validDuplicacy(Phone)){
        showError(phone, "Phone already exists!");
        return false;
    }
    else {
        showSuccess(phone);
        return true;
    }
}

const validDuplicacy = (xyz) => {
    let pcount=0;
    for (let u = 0; u < phones.length; u++) {
        if (xyz == phones[u].value) {
          pcount++;
        }
      }
      if(pcount>1){
        return true;
    }
  };

// Function to show data 
function showData() {

    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    var abc = "";
    peopleList.forEach(function (element, index) {
        abc += "<tr>";
        abc += "<td>" + element.firstname + "</td>";
        abc += "<td>" + element.lastname + "</td>";
        abc += "<td>" + element.addresses + "</td>";
        abc += "<td>" + element.userCity + "</td>";
        abc += "<td>" + element.userState + "</td>";
        abc += "<td>" + element.userCountry + "</td>";
        abc += "<td>" + element.userZip + "</td>";
        abc += "<td>" + element.userClient + "</td>";
        abc += "<td>" + element.userEmail[element.userEmailRadio-1] + "</td>";
        abc += "<td>" + element.userPhone[element.userPhoneRadio-1] + "</td>";
        abc +=
            '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
        abc += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = abc;
}

// Loads all data from local storage when document or page loads 
document.onload = showData();

// Function to add data to local storage
function AddData() {
    if (validFname() && validLname() && validAdd() && validCity() && validState() && validCountry() && validZip() && validmail() && validPhn() && mailradio() && phnradio()) {

        var peopleList;
        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];
        }
        else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"))
        }

        const clientValue = () => {
            if(client[0].checked) return "Indivisual";
            if(client[1].checked) return "Organization";
            else return "All";
        }

        var values = [];
        for (let i = 0; i < add.length; i++) {
            if (add[i].value != "")
                values.push(add[i].value);
        }

        var arr = [];
        for (let p = 0; p < mails.length; p++) {
            if (mails[p].value != "")
                arr.push(mails[p].value);
        }

        var vector = [];
        for (let q = 0; q < phones.length; q++) {
            if (phones[q].value != "")
                vector.push(phones[q].value);
        }
        
        var ee=1;
        for(let w=0;w<mails.length;w++){
            if(primary[w].checked){
            ee+=w;
            }
        }

        var pp=1;
        for(let x=0;x<phones.length;x++){
            if(phne[x].checked){
            pp+=x;
            }
        }

        peopleList.push({
            firstname: fname.value,
            lastname: lname.value,
            addresses: values,
            userCity:city.value,
            userState:state.value,
            userCountry:country.value,
            userZip:zip.value,
            userClient: clientValue(),
            userEmail: arr,
            userEmailRadio: ee,
            userPhone: vector,
            userPhoneRadio: pp
        });
        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        Resetform();

        return true;
    }

    else {
        return false;
    }
}

// function to delete data from local storage
function deleteData(index) {
    function ConfirmDelete() {
      if (confirm("Are you sure to want to Delete?") == true) return true;
      else return false;
    }
  
    if (ConfirmDelete()) {
      var peopleList;
      if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
      } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
      }
      peopleList.splice(index, 1);
      localStorage.setItem("peopleList", JSON.stringify(peopleList));
      showData();
      form.reset();
  
      document.getElementById("Submit").style.display = "inline";
      document.getElementById("Update").style.display = "none";
    }
    Resetform();
  }

// function to update/edit data from local storage
function updateData(index) {
    Resetform();

    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "inline";    
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    fname.value = peopleList[index].firstname;
    lname.value = peopleList[index].lastname;

    for (let i = 0; i < peopleList[index].addresses.length; i++) {
        add[i].value = peopleList[index].addresses[i];
    }

    city.value = peopleList[index].userCity;
    state.value = peopleList[index].userState;
    country.value = peopleList[index].userCountry;
    zip.value = peopleList[index].userZip;

    for (let m = 0; m < client.length; m++) {
        if (client[m].value == peopleList[index].userClient) {
            client[m].checked = true;
            break;
        }
    }

    for(let a=0 ; a<peopleList[index].userEmail.length; a++){
        if(a>0 && count<peopleList[index].userEmail.length){
            addInput();
        }
        mails[a].value = peopleList[index].userEmail[a];
    }

    primary[peopleList[index].userEmailRadio-1].checked=true;
 
    for(let b=0 ; b<peopleList[index].userPhone.length; b++){
        if(b>0 && cnt<peopleList[index].userPhone.length){
          addPhone();
        }
        phones[b].value = peopleList[index].userPhone[b];
    }
 
    phne[peopleList[index].userPhoneRadio-1].checked=true;

    document.querySelector("#Update").onclick = function () {

        var valu = [];
        for (let i = 0; i < add.length; i++) {
            if (add[i].value != "")
                valu.push(add[i].value);
        }

        const cValue = () => {
            if(client[0].checked) return "Indivisual";
            if(client[1].checked) return "Organization";
            else return "All";
        }

        var arra = [];
        for (let p = 0; p < mails.length; p++) {
            if (mails[p].value != "")
                arra.push(mails[p].value);
        }

        var vec = [];
        for (let q = 0; q < phones.length; q++) {
            if (phones[q].value != "")
                vec.push(phones[q].value);
        }
        
        var eml=1;
        for(let w=0;w<mails.length;w++){
            if(primary[w].checked){
            eml+=w;
            }
        }

        var phe=1;
        for(let x=0;x<phones.length;x++){
            if(phne[x].checked){
            phe+=x;
            }
        }

        if (validFname() && validLname() && validAdd() && validCity() && validState() && validCountry() && validZip() && validmail() && validPhn()) {
            peopleList[index].firstname = fname.value;
            peopleList[index].lastname = lname.value;
            peopleList[index].addresses = valu;
            peopleList[index].userCity = city.value;
            peopleList[index].userState = state.value;
            peopleList[index].userCountry = country.value;
            peopleList[index].userZip = zip.value;
            peopleList[index].userClient = cValue();
            peopleList[index].userEmail = arra;
            peopleList[index].userEmailRadio = eml;
            peopleList[index].userPhone = vec;
            peopleList[index].userPhoneRadio = phe;

            localStorage.setItem("peopleList", JSON.stringify(peopleList));

            showData();

            document.getElementById("Submit").style.display = "inline";
            document.getElementById("Update").style.display = "none";

            return true;
        }
        else {
            return false;
        }
    }
}

let emailCount =1;
let count = 1;
function addInput() {
    if (validEmail(count)) {
      count++;
      emailCount++;
      const inputFields = document.getElementById("inputFields");
      const div1 = document.createElement("div");
      div1.setAttribute("class", "col-lg-6");
      div1.setAttribute("id", `mail${count}`);

      const div2 = document.createElement("div");
      div2.setAttribute("class","row");
      const div3 = document.createElement("div");
      div3.setAttribute("class","col-2");
      const btn = document.createElement("button");
      btn.setAttribute("type","button");
      btn.setAttribute("class","btn btn-outline-light border-0 text-dark");
      btn.innerHTML = `<i class="fas fa-2x fa-light fa-circle-minus"></i>`;
      btn.setAttribute("onclick",`removeInputField(${count})`);
      div3.appendChild(btn);

      const div4 = document.createElement("div");
      div4.setAttribute("class","col-6");
      const div5 = document.createElement("div");
      div5.setAttribute("class","row");
      const div6 = document.createElement("div");
      div6.setAttribute("class","col-auto");
      const lab1 = document.createElement("label");
      lab1.setAttribute("for",`email${count}`);
      lab1.setAttribute("class","form-label");
      lab1.innerHTML = "Email";
      div6.appendChild(lab1);
      const div7 = document.createElement("div");
      div7.setAttribute("class","col-auto");
      const input1 = document.createElement("input");
      input1.setAttribute("type","email");
      input1.setAttribute("class","form-control mails");
      input1.setAttribute("id",`email${count}`);
    //   input1.setAttribute("onblur","validEmail()");
      const spann = document.createElement("span");
      spann.setAttribute("class","error p-0 alert");
      div7.appendChild(input1)
      div7.appendChild(spann);
      div5.appendChild(div6);
      div5.appendChild(div7);
      div4.appendChild(div5);
      
      const div8 = document.createElement("div");
      div8.setAttribute("class","col-4");
      const input2 = document.createElement("input");
      input2.setAttribute("type","radio");
      input2.setAttribute("class","form-input myRadio");
      input2.setAttribute("value","Primary");
      input2.setAttribute("name","Primary");
      const lab2 = document.createElement("label");
      lab2.setAttribute("class","form-check-label");
      lab2.innerHTML = "Set as Primary Email";
      div8.appendChild(input2);
      div8.appendChild(lab2);
      
      div2.appendChild(div3);
      div2.appendChild(div4);
      div2.appendChild(div8);
      div1.appendChild(div2);
      inputFields.appendChild(div1);
  }}

  // Remove the input field from the form
  function removeInputField(id) {
    var xyz = document.getElementById("mail" + id);
    if(xyz!=null)
        xyz.remove();
    count--;
  }

var phoneCount = 1;
var cnt = 1;
function addPhone() {
    if (validPhone(cnt)) {
      cnt++;
      phoneCount++;
      const inputPhones = document.getElementById("inputPhones");
      const div1 = document.createElement("div");
      div1.setAttribute("class", `col-lg-6`);
      div1.setAttribute("id", `phn${cnt}`);

      const div2 = document.createElement("div");
      div2.setAttribute("class","row");
      const div3 = document.createElement("div");
      div3.setAttribute("class","col-2");
      const btn = document.createElement("button");
      btn.setAttribute("type","button");
      btn.setAttribute("class","btn btn-outline-light border-0 text-dark");
      btn.innerHTML = `<i class="fas fa-2x fa-light fa-circle-minus"></i>`;
      btn.setAttribute("onclick",`removePhoneField(${cnt})`);
      div3.appendChild(btn);

      const div4 = document.createElement("div");
      div4.setAttribute("class","col-6");
      const div5 = document.createElement("div");
      div5.setAttribute("class","row");
      const div6 = document.createElement("div");
      div6.setAttribute("class","col-auto");
      const lab1 = document.createElement("label");
      lab1.setAttribute("for",`phone${cnt}`);
      lab1.setAttribute("class","form-label");
      lab1.innerHTML = "Phone No";
      div6.appendChild(lab1);
      const div7 = document.createElement("div");
      div7.setAttribute("class","col-auto");
      const input1 = document.createElement("input");
      input1.setAttribute("type","number");
      input1.setAttribute("class","form-control phones");
      input1.setAttribute("id",`phone${cnt}`);

    //   input1.setAttribute("onblur","validPhone()");
      const spann = document.createElement("span");
      spann.setAttribute("class","error p-0 alert");
      div7.appendChild(input1)
      div7.appendChild(spann);
      div5.appendChild(div6);
      div5.appendChild(div7);
      div4.appendChild(div5);
      
      const div8 = document.createElement("div");
      div8.setAttribute("class","col-4");
      const input2 = document.createElement("input");
      input2.setAttribute("type","radio");
      input2.setAttribute("class","form-input phnRadio");
      input2.setAttribute("value","Phone");
      input2.setAttribute("name","Phone");
      const lab2 = document.createElement("label");
      lab2.setAttribute("class","form-check-label");
      lab2.innerHTML = "Set as Primary Phone";
      div8.appendChild(input2);
      div8.appendChild(lab2);
      
      div2.appendChild(div3);
      div2.appendChild(div4);
      div2.appendChild(div8);
      div1.appendChild(div2);
      inputPhones.appendChild(div1);
  }}

  // Remove the input field from the form
  function removePhoneField(id) {
    let xyz = document.getElementById("phn" + id);
    if(xyz!=null)
        xyz.remove();
    cnt--;
  }

  const validmail = () => {
    const reg = /\S+@\S+\.\S+/;
    const email = document.getElementById("email1");
    const Email = email.value;
    if (Email == "") {
        showError(email, "Email cannot be empty!");
        return false;
    }
    else if (!reg.test(Email)) {
        showError(email, "Invalid email format");
        return false;
    } 
    else {
        showSuccess(email);
        return true;
    }
}

const validPhn = () => {
    const reg = /^[6-9]\d{9}$/;
    const phone = document.getElementById("phone1");
    const Phone = phone.value.trim();
    if (Phone == "") {
        showError(phone, "Phone Number cannot be empty!");
        return false;
    }
    else if (!reg.test(Phone)) {
        showError(phone, "Invalid phone format");
        return false;
    }
    else {
        showSuccess(phone);
        return true;
    }
}

var flag=false;
var f=false;

const mailradio = () =>{
    for(let i=0;i<mails.length;i++){
        if(primary[i].checked){
            flag = true;
            break;
        }
    }
    if(flag==true){
        return true;
    }else{
        alert("Select Primary Email!");
        return false;
    }
}



const phnradio = () =>{
    for(let l=0;l<phones.length;l++){
        if(phne[l].checked){
            f = true;
            break;
        }
    }
    if(f==true){
        return true;
    }else{
        alert("Select Primary Phone!");
        return false;
    }
}