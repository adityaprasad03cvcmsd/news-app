let navbar=()=>{

    return`<ul type="none">
    <li><a href="Home.html">Home</a></li>
    <br><br><br>
    <li><form id="search">
        <input id="searchInput" placeholder="search">
        <button type="submit">Search</button>
    </form>
    <div id="searchDisplay"></div>
</li>
</ul>`
}

export {navbar};