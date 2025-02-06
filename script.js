var current_section = "artwork";
var all_sections = document.querySelectorAll(".page");
var all_buttons = document.querySelectorAll("li");
function update_sections(){
    for(var i = 0;i<all_buttons.length;i++){
        if(all_buttons[i].id == current_section){
            all_buttons[i].style.fontSize = "1.7rem";
        }else{
            all_buttons[i].style.fontSize = "1.2rem";
        }
    }
    for(var i = 0;i<all_sections.length;i++){
        if(all_sections[i].id == current_section){
            all_sections[i].style = "display: block;";
        }else{
            all_sections[i].style = "display: none;";
        }
    }
}
function switch_section(id){
    console.log(id);
    current_section = id;
    update_sections();
}
update_sections();