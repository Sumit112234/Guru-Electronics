export function fetchallProducts() {
  return new Promise(async (resolve) =>{
   
    const res = await fetch('http://localhost:8000/products');
    

    const data = await res.json();
    // console.log(data);
    
      resolve({data});
    })
}

export function fetchProductsByFilter(filter) {


  // filter = {"category" : "smartPhones"}

  let queryString = '';
  for(let key in filter)
  {
    queryString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) =>{
   
    const res = await fetch('http://localhost:8000/products?'+queryString);
    const data = await res.json();
    resolve({data});
    })
}
