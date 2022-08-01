// Your function should return an array of product IDs that match all the attributes in the request. If there are no
// matches, return an empty array. Note that there can be any number of attributes and values in the inventory
// object. The request may also be a partial request (only contains some of the total attributes).

const Inventory = {
  color: {
    blue: [123,456,789],
    red: [234,567,890]
  },
  size: {
    small: [123,234],
    medium: [456,789],
    large: [567,890]
  }
}

 const R2 = {color: 'red ', size: 'small '} //→ Your function should return [234]
 const R3 = {color: 'red '} //→ Your function should return [234,567,890]
 const R4 = {color: 'green'} //→ Your function should return []


const checkInventory = (I, R) => {
  let productIds = [];

  let requestKeys = Object.keys(R)
  let requestValues = Object.values(R)
  console.log(requestKeys, requestValues)

  if(I[requestKeys]) {
    console.log(I[requestKeys])
    let inventoryObj = I[requestKeys]
    console.log(_.get(I, 'inventoryObj.requestValues')) 
  }
  return productIds;
};

console.log(checkInventory(Inventory, R3));
