window.setInterval(ClockCalculator,1000);
function ThemeChanger(){
    const chBox=document.getElementsByClassName("darkTheme")[0];
    if(chBox.checked){
        document.documentElement.style.setProperty('--bg-color', '#28334AFF');
        document.documentElement.style.setProperty('--main-color', '#FBDE44FF');
        document.documentElement.style.setProperty('--hover-color', '#F65058FF');
    }
    else{
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        document.documentElement.style.setProperty('--main-color', '#4e7e66');
        document.documentElement.style.setProperty('--hover-color', '#ffcc5c ');
    }

}
function ClockCalculator(){
    const time=new Date();
    document.getElementById("hour").innerText=(String(time.getHours()).length == 2)? time.getHours() : ("0" + time.getHours());
    document.getElementById("min").innerText=(String(time.getMinutes()).length == 2)? time.getMinutes() : ("0" + time.getMinutes());
    document.getElementById("sec").innerText=(String(time.getSeconds()).length == 2)? time.getSeconds() : ("0" + time.getSeconds());
}
function ShowDetail(Element){
    let type=Element.className;
    type=type.split(" ");
    let num=Element.getElementsByTagName("p")[0].innerText;
    let sym=Element.getElementsByTagName("h1")[0].innerText;
    let detail=Element.getElementsByTagName("div")[0].innerText;
    detail=detail.split(" ");
    document.getElementById("atomicNum").innerText=num;
    document.getElementById("symbol").innerText=sym;
    document.getElementById("detailText").innerText=`Name: ${detail[0]}\nGroup: ${detail[1]}\nPeroid: ${detail[2]}\nBlock: ${type[type.length-1]}`;
    
}
function ConvertToJson(){
    let collection=document.getElementsByClassName("element");
    let output='{\n\t"Elements":[';
    for(let i=0;i<collection.length;++i){
        let format="\t\t{";

        let detail=collection[i].getElementsByTagName("div")[0].innerText.split(' ');
        let name=detail[0];
        let group=detail[1];
        let period=detail[2];
        let atomicNum=collection[i].getElementsByTagName("p")[0].innerText;
        let symbol=collection[i].getElementsByTagName("h1")[0].innerText;
        let block=collection[i].classList[collection[i].classList.length - 1];

        format+=`"Name":"${name}", "AtomicNumber":"${atomicNum}", "Symbol":"${symbol}", "Group":"${group}", "Period":"${period}", "Block":"${block}"}`;
        if(i!=collection.length-1){
            format+=",";
        }
        output+="\n"+format;
    }
    output+='\n\t]\n}';
    
    let obj=JSON.parse(output);
    
    console.log(output);
    alert("All of data send to the console.\nHint: press f12 and then console section on your google chrome.");
}