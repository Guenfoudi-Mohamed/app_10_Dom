// app_11

const li = document.querySelectorAll('body .container .navBar .list li');
const article = document.querySelectorAll('body .container .contents .main .article');

for(let i = 0;i<li.length;i++){
    li[i].addEventListener('click',function(){
        for(let x = 0;x<article.length;x++){
            if(i==x){
                article[x].style.cssText = `display:block;`;   
            }
            else{
                article[x].style.cssText = `display:none;`;
            }   
        }
    });
}
