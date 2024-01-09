export function fetchallProducts() {
  return new Promise(async (resolve) =>{
   
    const res = await fetch('http://localhost:8000/products');
    

    const data = await res.json();
    // console.log(data);
    
      resolve({data});
    })
}
export function fetchBrands() {
  return new Promise(async (resolve) =>{
   
    const res = await fetch('http://localhost:8000/Brands');
    

    const data = await res.json();
    // console.log(data);
    
      resolve({data});
    })
}
export function fetchCategories() {
  return new Promise(async (resolve) =>{
   
    const res = await fetch('http://localhost:8000/Categories');
    

    const data = await res.json();
    // console.log(data);
    
      resolve({data});
    })
}
export function selectedProductDetailById(id) {
  return new Promise(async (resolve) =>{
   
    const res = await fetch(`http://localhost:8000/products/?id=${id}`);
    

    const data = await res.json();
    // console.log(data);
    
      resolve({data});
    })
}

export function fetchProductsByFilter(filter, sort, pagination) {


  // filter = {"category" :[ "smartPhones"]}
console.log(filter, sort, pagination)
  let queryString = '';
  let cat;
  let val;
  for(let key in filter)
  {
    // val = filter[key];
    // cat = key;
    queryString += `${key}=${filter[key]}&`
    console.log("filter");
  }
  // queryString += `${cat}=${val}&`

  for(let key in sort)
  {
    queryString += `${key}=${sort[key]}&`
    console.log("sort");
  }
  for(let key in pagination)
  {
    queryString += `${key}=${pagination[key]}&`
    console.log("pagination");
  }
  console.log("Qs form productApI" ,queryString);

  return new Promise(async (resolve) =>{
   
    const res = await fetch('http://localhost:8000/products?'+queryString);
    const data = await res.json();
    const totalProducts = res.headers.get('X-Total-Count');
      resolve({data : {products : data, totalProducts}});
    })
}
