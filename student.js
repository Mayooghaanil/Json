   function button2() {
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               var response1 = JSON.parse(this.responseText);
               console.log(response1)
               var jstudent=response1.details;
               
                   var out=""
                   for( var i=0;i<jstudent.length;i++){
                    out+="<li>"+jstudent[i].name+"</li>"
                 }
                   document.getElementById("demo").innerHTML=out
                   console.log(out)

           }
       }
       xhttp.open("GET", "student.json", true)
       xhttp.send()
   }