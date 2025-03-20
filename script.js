
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.amazon.com/b?node=16225007011&pf_rd_r=GJ25EXKE70608S61C1GM&pf_rd_p=e5b0c85f-569c-4c90-a58f-0c0a260e45a0&pd_rd_r=bff0657a-53cd-4be2-be2d-144d59e24bb4&pd_rd_w=M08us&pd_rd_wg=mfS1v&ref_=pd_gw_unkn", true);
xhr.send();
let html;
xhr.onload = function() {
  if (xhr.status === 200) {
    // retrieve the HTML source code from the response
     html  = xhr.responseText;
  }
}
setTimeout(()=>{
const parser = new DOMParser();
const doc = parser.parseFromString(html, "text/html");
console.log(doc)
setTimeout(()=>{
// select elements using DOM methods
const elements = doc.body.querySelectorAll(".a-section.a-spacing-medium _octopus-search-result-card_style_apbSearchResultsContainer__bCqjb");
console.dir(elements)
// extract data from elements
for (const element of elements) {
  console.log(element.textContent);
}
},3000)
},10000)