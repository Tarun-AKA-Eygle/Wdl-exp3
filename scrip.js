function validate() {

    // validation code here ...
    const name = document.forms["theForm"]["Name"].value;
    const email = document.forms["theForm"]["EMAIL"].value;
    const descp = document.forms["theForm"]["Descrip"].value;

    if(name == "") {
        alert('Please correct the name in the form!');
        return false;
    }
    if(descp == "") {
        alert('Please correct the description in the form!');
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){ //Regular expression for Email
        alert("Please enter the correct Email");
        return false;
    } 
  
   
}
