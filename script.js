function updateClock() {
    const now = new Date();

    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');

    document.getElementById("clock").textContent =
        `${h}:${m}:${s}`;
}

setInterval(updateClock,1000);
updateClock();

document.getElementById("searchForm")
.addEventListener("submit",e=>{
    e.preventDefault();

    const q =
        document.getElementById("searchInput").value;

    if(q.trim()){
        location.href =
            "https://www.google.com/search?q=" +
            encodeURIComponent(q);
    }
});
