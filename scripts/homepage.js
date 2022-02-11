let display=(arr)=>{
    document.getElementById("displaynews").innerHTML="";
    arr.map((el)=>{
        let div=document.createElement("div");

        let image=document.createElement("img");
        image.setAttribute("src",el.urlToImage);

        let h3=document.createElement("h3");
        h3.innerText=el.title;
        
        div.append(image,h3);
        div.addEventListener("click",()=>{
            news(el);
        })
        document.getElementById("displaynews").append(div);

    })
}

let news=(data)=>{
    localStorage.setItem("news",JSON.stringify(data));
    window.location.href="news.html";
}

export default display;