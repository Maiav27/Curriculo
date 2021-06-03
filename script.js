const selected = (evt) =>{
    let target = evt.target
    let menu = document.getElementsByName('selected')
     for(let i = 0; i < menu.length ; i++){
         if(menu[i] == target){
             menu[i].className = "nav-link active"
         }else{
             menu[i].className = "nav-link"
         }
     }

    
}