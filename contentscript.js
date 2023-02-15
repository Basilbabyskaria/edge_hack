    try{
        let s=document.getElementById('sb_form_q');
        // alert(s);
        let d=document.getElementById('sb_form_go');
        s.value=s.value+"1";
        d.click();
        i+=1;
    }
    catch{
     console.log("sad");
    }
