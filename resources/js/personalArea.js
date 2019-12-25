function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formtable.mail.value))
  {
    return (true)
  }
    return (false)
}


function check()
{
    if(formtable.username.value=="")
    {
        alert("name dont just have only blank");
    }
    else if(formtable.pass.value=="")
    {
        alert("pass dont just have only blank");
    }
    else if(formtable.phone.value=="")
    {
        alert("phone number dont just have only blank");
    }
    else if(formtable.cmnd.value=="")
    {
        alert("social id dont just have only blank");
    }
    else if(formtable.diachi.value=="")
    {
        alert("address dont just have only blank");
    }
    else if(!ValidateEmail(document.getElementsByName("mail").values))
    {
        alert("wrong email form");
    }
    else{
        alert("updated");
    }
}
