let id;
async function getdata(url){
    try{
        let res=await fetch(url);
        let data=await res.json();
        return data;
    }
    catch(err){
        console.log("err",err);
    }       
    
}

let getNews=(e)=>{
    e.preventDefault();
    let query=document.getElementById("searchInput").value;
    localStorage.setItem("query",query);
    window.location.href="search.html" 
    // console.log(query);      
}

let searching=()=>{
    let query=document.getElementById("searchInput").value;
    let url=`https://newsapi.org/v2/everything?q=${query}&apiKey=df8c7d1b8f054b3090e8be0335a0ab81`;
    let data=getdata(url)
    .then((res)=>{
        console.log(res.articles)
        display_search(res.articles);
    })
}

let debouncing=()=>{        
    clearTimeout(id);
    id=setTimeout(()=>{
        searching();
    },1000);
}

let display_search=(arr)=>{
    document.getElementById("searchDisplay").innerHTML="";

    arr.map((el)=>{
        let p=document.createElement("p");
        p.innerText=el.title;

        p.addEventListener("click",()=>{
            news(el);
        });
        document.getElementById("searchDisplay").append(p);
    })

}
let news=(data)=>{
    localStorage.setItem("news",JSON.stringify(data));
    window.location.href="news.html";
}

export {getdata,getNews,debouncing};