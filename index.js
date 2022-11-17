let btn1=document.getElementById("bttn1");
let btn2=document.getElementById("bttn2");
let out=document.getElementById("output");


let final=()=>{
    let inp1=(document.getElementById("input1").value);
    let finalInp=inp1.toUpperCase();
    let inp2=(document.getElementById("input2").value)
    let inp3=(document.getElementById("input3").value)
    let obj={}
    obj[inp2]=inp3
    let first=Object.keys(obj)
    let second=Object.values(obj)
    let newli=document.createElement("li")
    newli.textContent=(`${finalInp} - ${first}: ${second}`)
    newli.className="simple"
    let newbtn=document.createElement("button")
    newbtn.className="del"
    newbtn.textContent="Delete"
    out.append(newli);
    newli.append("              ",newbtn);
    let remove=()=>{
        newli.remove();
    }
    newbtn.addEventListener("click",remove)
    // ----------------------------------------/Second Approach/--------------------------------------------
    // let newli=document.createElement("li")
    // newli.textContent=(`${finalInp} - ${inp2}: ${inp3}`)
    // newli.className="simple"
    // out.append(newli)
    // ------------------------------------------------------------------------------------------------------
}
let result=()=>{
let inp4=(document.getElementById("input4").value);
let filter=inp4.toUpperCase();
let list=document.getElementsByTagName("li")

for (let i of list){
    let a=i;
    let textValue=a.textContent || a.innerText;
    if(textValue.toUpperCase().indexOf(filter)>-1){
        i.style.display="block"
    }
    else{
        i.style.display="none"
    }
}
}

btn1.addEventListener("click",final)
btn2.addEventListener("click",result)

    
