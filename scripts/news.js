let display_news=(data)=>{
    document.getElementById("displaynews").innerHTML="";

    let div=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",data.urlToImage);

    let title=document.createElement("h2");
    title.innerText=data.title;

    let p1=document.createElement("p");
    p1.innerText=p1.content;

    let desc=document.createElement("p");
    desc.innerText=data.description;

    let p2=document.createElement("p");
    p2.innerHTML=`for more details "${data.url}"`

    div.append(img,title,p1,desc,p2);
    document.getElementById("displaynews").append(div);
}

export default display_news;