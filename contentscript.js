let s=document.getElementById('sb_form_q');
if((s.value[0]+s.value[1])=='+1'||(s.value[0]+s.value[1])=='+2')
   {
   try{
    if(s.value.length<36){
        let d=document.getElementById('sb_form_go');
        s.value=s.value+"1";
        d.click();
    }
        
    }
    catch{
     console.log("sad");
    }
}