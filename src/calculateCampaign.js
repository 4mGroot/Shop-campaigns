
export const calculateTotal = (cart) => {
    return cart.reduce((sum,item)=>{
        return sum + item.price * item.quantity
    },0)
}

export const applyCoupon = (total,coupon) =>{
    if (!coupon) return total

    if (coupon.discountType ==='fixed'){
        return total - coupon.amount
    }
    if(coupon.discountType ==='percent'){
        return total - (total*coupon.percentage/100)
    } 

    return total
}

export const applyOntop = (total, cart, ontop)=>{
    if (!ontop) return total
    //ลดตามหมวด
    if (ontop.categoryName){
        const subtotal = cart
        .filter(item => item.category===ontop.categoryName)
        .reduce((sum,item)=> sum + item.price* item.quantity,0)

        const discount = subtotal*(ontop.percentage /100)
        return total - discount
    }
    //ใช้แต้มลด
    if (ontop.maxPercent) {
    const maxDiscount = total * (ontop.maxPercent / 100)  // ลดได้สูงสุด 20%
    const discount = Math.min(ontop.userPoints, maxDiscount)

    return total - discount
}

}

export const applySeasonal = (total,seasonal) => {
    if (!seasonal) return total

    if(seasonal.everyX && seasonal.discountY) {
        const times = Math.floor(total / seasonal.everyX)
        return total - (times * seasonal.discountY) 
    }
    return total
}