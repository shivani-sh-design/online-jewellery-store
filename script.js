var menuBtn = document.getElementById("menuBtn");
var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menu");
const banner = document.getElementById("banner");
const productContainer = document.getElementById("details");
const detailedPage = document.getElementById("detailedPage");
const backButton = document.querySelector('.fa-arrow-alt-circle-left');
let imgSrc,product_name,product_price;
backButton.addEventListener('click',()=>{
 document.location.reload();
 console.log('clicked');
 backButton.classList.add('toggle');
})
const showDescription = (e)=>{
  let imgSrc = document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('src');
  let price = document.activeElement.previousElementSibling.innerHTML;
  let description = document.activeElement.previousElementSibling.previousElementSibling.innerHTML;
  let div = document.createElement("div");
  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let buyBtn = document.getElementById('buy-now-btn'); 
  img.setAttribute("src", `${imgSrc}`);
  img.classList.add('img');
  h2.classList.add('h2');
  p.classList.add('para');
  h2.innerText = price;
  p.innerText = `If you are a solitaire lover there is the Frele ${description} and Vanilla ${description} for those who prefer more traditional Kadas, there is the openable bracelet – Stars and Stripes ${description} and the Kalamkari Diamond Kada. For the minimalists we have a series of delicate bracelets like the New Leaf ${description}, charm bracelets like The Forest Fairy ${description},  Friends Forever ${description}, Joy ${description}-cum-Pendant that is open to customization too.There are beautiful, pretty, very feminine and dainty designer diamond bangles on Candere, the styling suited to match your personalities or make your selection easier based on your moods or the likes & tastes of the one you are going to gift them to.`;
  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(p);
  detailedPage.appendChild(div);
  banner.classList.add("toggle");
  productContainer.classList.add("toggle");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
   backButton.style.display='block'; 
   buyBtn.style.display = 'block';  
}
function getPrice(imgSrc)
{
  switch (imgSrc) {
    case './images/bracelete.jpeg':
      product_price = 300;
      product_name = 'Bracelet';
      break;
    case './images/necklace-2.jpg':
    product_price =800;
    product_name = 'Necklace';
    break;
    case './images/nose-ring.jpeg':
      product_price =400;
      product_name = 'EARRINGS';
    break;
    case './images/earrings.jpg':
      product_price =100;
      product_name = 'Nose Ring';
    break;
    case './images/earrings-2-img.jpg':
      product_price =600;
      product_name = 'Golden Earrings';
    break;
    case './images/long-nacklace.jpg':
      product_price =600;
      product_name = 'Long Necklace';
    break;
        
    default:
      break;
  }
}
const checkout = ()=>{
  console.log('button clicked');
  // console.log(document.activeElement.parentElement.lastElementChild.firstElementChild);
  imgSrc = document.activeElement.parentElement.lastElementChild.firstElementChild.getAttribute('src');
  console.log(imgSrc);
  getPrice(imgSrc);
  console.log(product_price);
  console.log(product_name);
  document.getElementById('checkout-item').innerText = product_name;
  document.getElementById('checkout-item-price').innerHTML = product_price;
  let gst = (product_price*28)/100;
  document.getElementById('gst').innerHTML= gst;
  document.getElementById('checkout-total').innerHTML = product_price + gst;
  document.getElementById('billing-section').style.display = 'block';
  document.getElementById('form-container').style.display = 'block';
  document.getElementById('detailedPage').style.display = 'none';
  document.getElementById('feature').style.display = 'none';
  document.getElementById('service').style.display = 'none';
  document.getElementById('testimonial').style.display = 'none';
}

menuBtn.addEventListener("click", () => {
  sidenav.classList.toggle("toggle");
});



