var userType = 0;

function setUserType()
{
    if(getElementById())
}
function checkUserType() {
    if (UserType == 0)
        return 0;
}

function changeUserChip (UserType)
{
    if (UserType == 1) //admin
    {
        document.getElementById("profile-chip").innerHTML = '<div class="chip"><div class="dropdown"style="float:right;"><img class="user_logo" src="resources/css/images/guest_logo.png" alt="avatar" class="avatar"><span><b>Trần Vinh Hiển</b></span><div class="dropdown-content"><a href="./personalAreaAdmin.html"><button type="button" class="btn btn-primary">Infomation</button></a><a href="./index.html"><button type="button" class="btn btn-primary">Logout</button></a></div></div></div>';
    }
    else if (UserType == 2) //bidder
    {
        document.getElementById("profile-chip").innerHTML = '<div class="chip"><div class="dropdown"style="float:right;"><img class="user_logo" src="resources/css/images/guest_logo.png" alt="avatar" class="avatar"><span><b>Trần Vinh Hiển</b></span><div class="dropdown-content"><a href="./personalAreaAdmin.html"><button type="button" class="btn btn-primary">Infomation</button></a><a href="./index.html"><button type="button" class="btn btn-primary">Logout</button></a></div></div></div>';
    }
    else if (UserType == 3) //customer
    {
        document.getElementById("profile-chip").innerHTML = '<div class="chip">' +
        '<div class="dropdown"style="float:right;">'+
            '<img class="user_logo" src="resources/css/images/guest_logo.png" alt="avatar" class="avatar">'+
            '<span><b>Trần Vinh Hiển</b></span>'+
            '<div class="dropdown-content">'+
                '<a href="./personalArea.html">'+
                '<button type="button" class="btn btn-primary">Infomation</button></a>'+
                '<a href="./favourite.html">'+
                '<button type="button" class="btn btn-primary">Favourite</button></a>'+
                '<a href="./biddingProducts.html">'+
                '<button type="button" class="btn btn-primary">Bidding Products</button></a>'+
                '<a href="./wonProducts.html">'+
                '<button type="button" class="btn btn-primary">Won Products</button></a>'+
                '<a href="./index.html">'+
                '<button type="button" class="btn btn-primary">Logout</button></a>'+
            '</div></div></div>';
    }
}
