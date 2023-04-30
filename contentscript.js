
if(window.location.href.match("https://www.bing.com/")){

    let s=document.getElementById('sb_form_q');
    if((s.value[0]+s.value[1])=='+1'||(s.value[0]+s.value[1])=='+2')
       {
       try{
        if(s.value.length<40){
            let d=document.getElementById('sb_form_go');
            s.value=s.value+"1";
            d.click();
        }

        }
        catch{
         console.log("Sad");
        }
    }
}
if(window.location.href.match( "//rewards.bing.com/")){
    try{
    
        let x=document.querySelectorAll(".mee-icon-AddMedium");
        if(x.length>0){
            for(i=0;1<x.length;i++){
                x[i].click();
            }
        }
    }catch{
        console.log("Done");
        
    }
}
