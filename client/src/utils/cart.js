export const addItemToCart = (itemToBeAdded, cartItems) => {
  const existingItem = cartItems.find(item => item.id === itemToBeAdded.id)

  const newCartItems = existingItem ?
    cartItems.map((item => {
      const newQuantity = existingItem.quantityInCart + 1;
      return (
        item.id === existingItem.id ? { ...item, quantityInCart: newQuantity } : item
      )
    }))
    :
    [...cartItems, { ...itemToBeAdded, quantityInCart: 1 }];

  return newCartItems
}

export const clearItemFromCart = (itemToBeClearId, cartItems) => {
  const newCartItems = cartItems.filter(item => item.id !== itemToBeClearId);
  return newCartItems;
}

export const reduceItemQty = (itemId, cartItems) => {
  const existingItem = cartItems.find(item => item.id === itemId);
  if (existingItem.quantityInCart === 1) {
    return cartItems.filter(item => itemId !== item.id)
  }
  const newCartItems = cartItems.map(item => {
    const newQuantity = existingItem.quantityInCart - 1;
    return (
      item.id === itemId ? { ...item, quantityInCart: newQuantity } : item
    )
  })
  return newCartItems;
}
