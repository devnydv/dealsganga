
function notvisi() {

    let btn = document.getElementById('visible');

    btn.classList.toggle('notvisi');

}
// get para from url
let param = new URLSearchParams(document.location.search);
let sitename = param.get("site");
if (sitename==null) {
  sitename="home";
}
async function main() {
    let res = await fetch(`https://payme-bce76.firebaseio.com/deals/${sitename}.json`);
    let data = await res.json();
    console.log(data);

    let cat = document.getElementById("cat");
    let arr= Object.keys(data['category']);
    console.log(arr)
arr.forEach(catname => {
   let upcatname= catname[0].toUpperCase() +
    catname.slice(1);
    console.log(upcatname)
    let catdata =`<a href="/site.html?name=${catname}">${upcatname}</a>`
    cat.insertAdjacentHTML("beforeend", catdata)
});
    

}
main()
