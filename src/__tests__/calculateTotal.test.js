// นำเข้าฟังก์ชันที่จะทดสอบ
import { calculateTotal, applyCoupon, applyOntop, applySeasonal } from "../calculateCampaign.js";

describe("calculateTotal()", () => {
  test("รวมราคาสินค้าอย่างถูกต้อง", () => {
    const cart = [
      { price: 100, quantity: 2 },
      { price: 50, quantity: 1 },
    ];
    expect(calculateTotal(cart)).toBe(250); // 100*2 + 50*1 = 250
  });

  test("รวมราคาว่าง = 0", () => {
    expect(calculateTotal([])).toBe(0); // ไม่มีสินค้า
  });
});

describe("applyCoupon()", () => {
  test("Fixed coupon ใช้งานได้", () => {
    const total = 500;
    const coupon = { discountType: "fixed", amount: 100 };
    expect(applyCoupon(total, coupon)).toBe(400); // 500 - 100
  });

  test("Percentage coupon ใช้งานได้", () => {
    const total = 200;
    const coupon = { discountType: "percent", percentage: 10 };
    expect(applyCoupon(total, coupon)).toBe(180); // 200 - 10% = 180
  });

  test("ไม่มี coupon → คืนค่า total เดิม", () => {
    const total = 300;
    expect(applyCoupon(total, null)).toBe(300);
  });
});

describe("applyOntop()", () => {
  const cart = [
    { price: 100, quantity: 2, category: "Clothing" },
    { price: 50, quantity: 1, category: "Accessories" },
  ];

  test("ลดตามหมวดหมู่ category", () => {
    const total = 250;
    const ontop = { categoryName: "Clothing", percentage: 10 };
    // subtotal ของ Clothing = 100*2 = 200 → 10% = 20 → total 250-20 = 230
    expect(applyOntop(total, cart, ontop)).toBe(230);
  });

  test("ลดด้วยแต้ม (maxPercent)", () => {
    const total = 500;
    const ontop = { maxPercent: 20, userPoints: 80 };
    // max discount = 500*20% = 100 → userPoints 80 < 100 → discount = 80 → total 500-80 = 420
    expect(applyOntop(total, cart, ontop)).toBe(420);
  });

  test("ไม่มี ontop → คืนค่า total เดิม", () => {
    expect(applyOntop(200, cart, null)).toBe(200);
  });
});

describe("applySeasonal()", () => {
  test("ลดตาม special campaign everyX", () => {
    const total = 1200;
    const seasonal = { everyX: 500, discountY: 100 };
    // 1200/500 = 2 → discount = 2*100 = 200 → final = 1000
    expect(applySeasonal(total, seasonal)).toBe(1000);
  });

  test("ไม่มี seasonal → คืนค่า total เดิม", () => {
    expect(applySeasonal(300, null)).toBe(300);
  });
});
