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
        document.getElementById("profile-chip").inner = '<div class="chip"><div class="dropdown"style="float:right;"><img class="user_logo" src="/css/images/guest_logo.png" alt="avatar" class="avatar"><span><b>Trần Vinh Hiển</b></span><div class="dropdown-content"><a href="./personalAreaAdmin."><button type="button" class="btn btn-primary">Infomation</button></a><a href="./index."><button type="button" class="btn btn-primary">Logout</button></a></div></div></div>';
    }
    else if (UserType == 2) //bidder
    {
        document.getElementById("profile-chip").inner = '<div class="chip"><div class="dropdown"style="float:right;"><img class="user_logo" src="/css/images/guest_logo.png" alt="avatar" class="avatar"><span><b>Trần Vinh Hiển</b></span><div class="dropdown-content"><a href="./personalAreaAdmin."><button type="button" class="btn btn-primary">Infomation</button></a><a href="./index."><button type="button" class="btn btn-primary">Logout</button></a></div></div></div>';
    }
    else if (UserType == 3) //customer
    {
        document.getElementById("profile-chip").inner = '<div class="chip">' +
        '<div class="dropdown"style="float:right;">'+
            '<img class="user_logo" src="/css/images/guest_logo.png" alt="avatar" class="avatar">'+
            '<span><b>Trần Vinh Hiển</b></span>'+
            '<div class="dropdown-content">'+
                '<a href="./personalArea.">'+
                '<button type="button" class="btn btn-primary">Infomation</button></a>'+
                '<a href="./favourite.">'+
                '<button type="button" class="btn btn-primary">Favourite</button></a>'+
                '<a href="./biddingProducts.">'+
                '<button type="button" class="btn btn-primary">Bidding Products</button></a>'+
                '<a href="./wonProducts.">'+
                '<button type="button" class="btn btn-primary">Won Products</button></a>'+
                '<a href="./index.">'+
                '<button type="button" class="btn btn-primary">Logout</button></a>'+
            '</div></div></div>';
    }
}
