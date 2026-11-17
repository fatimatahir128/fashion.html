function showPage(pageId) {
  document.querySelectorAll('section').forEach(function(sec){
    sec.classList.add('hidden');
  });
  document.getElementById(pageId).classList.remove('hidden');
  window.scrollTo(0, 0);
  if (pageId === 'checkout') { document.getElementById('placeOrderBtn').textContent = 'PLACE ORDER - Rs ' + cartTotal; }
  if (pageId === 'wishlist') { showWishlist(); }
}

function changeImage(newSrc) {
  document.getElementById('mainImg').src = newSrc;
}

let cartCount = 0;
let cartTotal = 0;

function addToCart(name, price, img) {
  cartCount++;
  cartTotal = cartTotal + price;

  document.getElementById('cartCount').innerText = cartCount;
  document.getElementById('cart-subtotal').innerText = "Rs " + cartTotal;
  document.getElementById('cart-total').innerText = "Rs " + cartTotal;

  document.getElementById('cartItems').innerHTML += `
    <div style="display:flex; gap:10px; align-items:center; background:white; padding:10px; margin-bottom:10px; border:1px solid #ddd;">
      <img src="${img}" style="width:60px; height:70px; object-fit:cover;">
      <div>
        <p>${name}</p>
        <p>Rs ${price}</p>
      </div>
      <button onclick="removeItem(this, ${price})" style="border:none; background:none; font-size:20px; cursor:pointer;">×</button>
    </div>
  `;
  showPage('cart');
}
// let cartCount = 0;
// function addToCart(name, price, img) {
// cartCount++;
// document.getElementById('cartCount').innerText = cartCount;
// document.getElementById('cartItems').innerHTML = '<div class="bg-white border p-4 flex gap-4 items-center"><img src="'+img+'" class="w-[100px] h-[130px] object-cover"><div><p class="font-bold">'+name+'</p><p>Rs '+price+'</p></div></div>';
// showPage('cart');
// }


let wishCount = 0;
function addToWish() {
  wishCount++;
  document.getElementById('wishCount').innerText = wishCount;
}

// function addToCart() {
//   showPage('cart');
// }f

function buyNow() {
  showPage('cart');
}
function removeItem(btn, price) {
  btn.parentElement.remove();
  cartCount--;
  cartTotal = cartTotal - price;
  document.getElementById('cartCount').textContent = cartCount;
  document.getElementById('cart-subtotal').textContent = 'Rs ' + cartTotal;
  document.getElementById('cart-total').textContent = 'Rs ' + cartTotal;
}

// function removeItem(btn, price) {
//   btn.parentElement.remove();
//   cartCount--;
//   cartTotal = cartTotal - price;
//   document.getElementById('cartCount').textContent = cartCount;
//   document.getElementById('cart-subtotal').textContent = 'Rs ' + cartTotal;
//   document.getElementById('cart-total').textContent = 'Rs ' + cartTotal;
// }
// let cartTotal = 0;

// function addToCart(price) {
//   cartTotal = cartTotal + price;
//   document.getElementById("cart-subtotal").textContent = cartTotal;
//   document.getElementById("cart-total").textContent = cartTotal;
//   showPage('cart');
// }

// function addToWish(name, price, img){
//   document.getElementById("wishlist-items").innerHTML += '<div style="text-align:center; background:white; width:260px; margin:15px auto; padding:15px; border-radius:12px; box-shadow:0 0 10px #ddd"><img src="'+img+'" style="width:200px; height:250px; object-fit:cover; border-radius:10px"><p style="font-weight:bold; margin:8px 0 2px">'+name+'</p><p style="color:#888; margin:0 0 10px">Rs '+price+'</p><button onclick="addToCart(\''+name+'\',\''+price+'\',\''+img+'\')" style="background:black; color:white; border:none; padding:8px 18px; border-radius:20px; cursor:pointer">Add to Cart</button></div>';


function addToWish(name, price, img){
  wishlist.push({name: name, price: price, img: img});
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  showWishlist();
}

function showPage(pageId) {
  if(pageId == 'product'){ pageId = 'shop'; }
  document.querySelectorAll('section').forEach(function(s){ s.classList.add('hidden'); });
  let p = document.getElementById(pageId);
  if(p){ p.classList.remove('hidden'); }
  window.scrollTo(0,0);
}