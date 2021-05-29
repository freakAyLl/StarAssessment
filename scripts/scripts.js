$(document).ready(function(){
    let prom=0, votes=0, sum=0, module=0;
    for(let s=1;s<=5;s++){
        $('#s'+s).on('click', function(){ fnProm(s)});
        $('#s'+s).on('mouseover', function(){ fnAddColor(s)});
        $('#s'+s).on('mouseout', fnScore);
    };
    function fnAddColor(n){
        $('img').attr('src','img/ev_n.png');
        for(let i=0;i<=n;i++){$('#s'+i).attr('src','img/ep_n.png')};
    };
    function fnProm(n){
        sum+=n, votes+=1, prom=sum/votes, module=prom%1;
        fnScore();
    };
    function fnScore(){
        $('img').attr('src','img/ev_n.png');
        let i=0;
        for(i;i<=prom;i++){$('#s'+i).attr('src','img/ec_n.png')};
        if(module!==0){
            if(module>0.8){$('#s'+i).attr('src','img/ec_n.png'); 
            }else if(module<0.2){$('#s'+i).attr('src','img/ev_n.png');
            }else{$('#s'+i).attr('src','img/em_n.png')};
        };
        for(i+=1;i<=5;i++){$('#s'+i).attr('src','img/ev_n.png')};
    };
});