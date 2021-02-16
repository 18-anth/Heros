
//mostrar más
let i = 0;
let button = document.querySelector('#buttonmore').addEventListener('click', function(){
    if(!i){
        document.getElementById('showmore').style.display = 'inline';
        document.getElementById('button').style.display = 'show less';
        i = 1;
    }else{
        document.getElementById('show-more').style.display = 'none';
        document.getElementById('button').style.display = 'show More';
        i = 0;
    }
})