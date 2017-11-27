tdNum = 0;
count = 0;
$("td").each(function(){
this.tdId = count++;
if(this.innerHTML=="About Emily"){
console.log("found");
tdNum = this.tdId+1
}
}
)
$("td")[tdNum].innerHTML="<a href='https://www.facebook.com/emarzofka'>Emily's facebook</a>"