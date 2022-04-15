// // app_5

// const li = document.querySelectorAll('body section .navBar ul.list li');
// const contents = document.querySelectorAll('body section .contents div.content');

// for(let i = 0;i<li.length;i++){
//     li[i].addEventListener('click',function(){display(i);});
//     contents[i].style.display='none';
// };

// let arr = [];
// let conteurClick = 0;  

//     //function display
// function display(index){
//         //fhalat drna click 3la same item myt3awdx function 
//     arr.push(index);
//     conteurClick++;
//     if(conteurClick>=2 && arr[arr.length-2] == arr[arr.length-1]){
//         return false;
//     };
//         // icon change
//     for(let y =0;y<li.length;y++){
//         if(index == y){
//             li[index].children[0].children[0].className = 'fa-solid fa-caret-right';
//             continue;
//         };
//         li[y].children[0].children[0].className = 'fa-solid fa-caret-down';
//     };
//         //remove animation for items
//     for(let i = 0;i<contents.length;i++ ){
//         if(i == index){
//             contents[index].style.display = 'block';
//             continue;
//         };
//         contents[i].style.display = 'none';
//             //remove style properties from items
//         for(let y = 0;y<contents[i].children.length;y++){
//             contents[i].children[y].style.removeProperty('opacity');
//             contents[i].children[y].style.removeProperty('animation');
//         };       
//     }
//         // add animation for items
//     let conteur = 0;
//     let stop = setInterval(function(){dis(index);},1000);
//     function dis(index){
//         if(conteur == contents[index].children.length){
//             clearInterval(stop);  
//             conteur=0;
//             return false;
//         };
//         contents[index].children[conteur].style.cssText = `animation:move 3s 0s 1;opacity:1;`;
//         conteur++;
//     };
// };