import React, { useEffect, useState } from "react";
import Productlist from "./component/Productlist";
import Cart from "./component/Cart";
import Campaign from "./component/CampaignSelector";
import './App.css'; // **[การเปลี่ยนแปลง #1]: นำเข้า CSS**
import {
  calculateTotal,
  applyCoupon,
  applyOntop,
  applySeasonal,
} from "./calculateCampaign";

function App() {
  const [userPoints, setUserPoints] = useState(300);
  const [cart, setCart] = useState([]);
  const [selectCampaigns, setSelectCampaigns] = useState({
    coupon: null,
    ontop: null,
    seasonal: null,
  });

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleSelect = (campaign) => {
    setSelectCampaigns((prev) => ({
      ...prev,[campaign.category]: {
        ...campaign,userPoints,
      },
    }));
  };

  const baseTotal = calculateTotal(cart);
  const afterCoupon = applyCoupon(baseTotal, selectCampaigns.coupon);
  const afterOntop = applyOntop(afterCoupon, cart, selectCampaigns.ontop);
  const finalTotal = applySeasonal(afterOntop, selectCampaigns.seasonal);

  return (
    // **[การเปลี่ยนแปลง #2]: เปลี่ยน Inline Style เป็น className**
    <div className="app-container">
      <div className="product-section">
        <h1>รายการสินค้า</h1>
        <Productlist addToCart={addToCart} />
      </div>

      <div className="sidebar-section">
        <div> 
            <Cart 
              cart={cart}
              finalTotal={finalTotal}
              baseTotal={baseTotal}
              userPoints={userPoints}
            />
        </div>

        <div> 
            <Campaign
              selectCampaigns={selectCampaigns}
              handleSelectCampaign={handleSelect}
              userPoints={userPoints}
            />
        </div>
      </div>

    </div>
  );
}

export default App;
