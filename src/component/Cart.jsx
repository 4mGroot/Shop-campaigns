
function Cart({cart,baseTotal,finalTotal,userPoints}) {

  const discountAmount = baseTotal - finalTotal
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div>
      <h1>ตระกร้าสินค้า ({totalItems} ชิ้น)</h1>
      {cart.length ==0 ? (
        <p>ยังไม่มีสินค้า</p>
      ) : ( 
        <ul>
            {cart.map(item =>(
              <li key={item.id}>
                {item.name} - {item.price} จำนวน {item.quantity}
              </li>
            ))}
        </ul>
      )}
      <h3>แต้มที่มี: {userPoints} คะแนน</h3>
      <h3>ราคาก่อนลด: {baseTotal}</h3>
      <h3>ส่วนลด: {discountAmount}</h3>
      <h2>ราคาหลังลด: {finalTotal}</h2>
    </div>
  )
}

export default Cart
