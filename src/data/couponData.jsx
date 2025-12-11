const couponlist = [
     {id:1,campaign:'Fixed amount 100B',category:'coupon',discountType: 'fixed',amount: 100},
     {id:2,campaign:'Percentage discount 10%',category:'coupon',discountType: 'percent',percentage: 10},
     {id:3,campaign:'Percentage discount by item category Clothing 5%',category:'ontop',categoryName: 'Clothing',percentage: 5},
     {id:4,campaign:'Percentage discount by item category Accessories 8%',category:'ontop',categoryName: 'Accessories',percentage: 8},
     {id:5,campaign:'Percentage discount by item category Electronics 10%',category:'ontop',categoryName: 'Electronics',percentage: 10},
     {id:6,campaign:'Discount by points',category:'ontop',maxPercent: 20  },
     {id:7,campaign:'Special campaigns',category:'seasonal',everyX: 500,discountY: 20}
]

export default couponlist;