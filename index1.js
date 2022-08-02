const header=document.getElementById("header-title");
header.style.border="solid 2px black";
const item=document.getElementsByClassName("list-group-item");
item[2].style.backgroundColor="green";
// item[2].style.fontWeight="bold";
//to make all in one code
for(var i=0;i<item.length;i++){
// item[i].style.color="green";
item[i].style.fontWeight="bold";

}