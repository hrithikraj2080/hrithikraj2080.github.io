function result(){
    var r=0;
    var a1=document.quiz.q1.value;
    // var a2=document.quiz.q2.value;
    // var a3=document.quiz.q3.value;
    // var a4=document.quiz.q4.value;
    // var a4=document.quiz.q4.value;
    if(a1=="7"){
        r++;
    }
    else if(a1==""){
        r;
    }
    else if(a1!="7"){
        r--;
    }

    var a2=document.quiz.q2.value;
    if(a2=="Lotus"){
        r++;
    }
    else if(a2==""){
        r;
    }
    else if(a2!="Lotus"){
        r--;
    }
    
    var a3=document.quiz.q3.value;
    if(a3=="Karnataka"){
        r++;
    }
    else if(a3==""){
        r;
    }
    else if(a3!="Karnataka"){
        r--;
    }
    var a4=document.quiz.q4.value;
    if(a4=="Meghalaya"){
        r++;
    }
    else if(a4==""){
        r;
    }
    else if(a4!="Meghalaya"){
        r--;
    }
    var a5=document.quiz.q5.value;
    if(a5=="Uttar Pradesh"){
        r++;
    }
    else if(a5==""){
        r;
    }
    else if(a5!="Uttar Pradesh"){
        r--;
    }
    var a6=document.quiz.q6.value;
    if(a6=="Rajasthan"){
        r++;
    }
    else if(a6==""){
        r;
    }
    else if(a6!="Rajasthan"){
        r--;
    }
    var a7=document.quiz.q7.value;
    if(a7=="Meghalaya"){
        r++;
    }
    else if(a7==""){
        r;
    }
    else if(a7!="Meghalaya"){
        r--;
    }
    var a8=document.quiz.q8.value;
    if(a8=="Jharkhand"){
        r++;
    }
    else if(a8==""){
        r;
    }
    else if(a8!="Jharkhand"){
        r--;
    }
    var a9=document.quiz.q9.value;
    if(a9=="Telugu and Urdu"){
        r++;
    }
    else if(a9==""){
        r;
    }
    else if(a9!="Telugu and Urdu"){
        r--;
    }
    var a10=document.quiz.q10.value;
    if(a10=="Itanagar"){
        r++;
    }
    else if(a10==""){
        r;
    }
    else if(a10!="Itanagar"){
        r--;
    }
    
    
    
   
    var answer=document.getElementById("demo").innerHTML="The marks obtained is"+" " + r +" "+ "out of 10";

}