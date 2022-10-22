const btn= document.getElementById("btn");
const main = document.getElementById("main");
const project=document.getElementById("project");
const content=document.getElementById("content");
const close=document.getElementById("close");


const blue = ()=>{
    // main.className="blue";
    // project.className+=" blue";
    // content.className="modal-content"
    main.classList.toggle("blue");      
    project.classList.toggle("blue");      
    content.classList.toggle("none");      
}
btn.addEventListener("click",blue)

// const undo = ()=>{
// main.className="";
// project.className="modul-project"
// content.className="modal-content none"  
// }
close.addEventListener("click",blue)