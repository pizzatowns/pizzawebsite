
import React from "react";

export default function Privacy() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <div className="flex flex-row w-full justify-center mt-5 border-2 border-t-slate-400 border-b-slate-400 p-5 space-x-6">
        <span>Privacy</span>
        <span>Cookies and ad policy</span>
        <span>Terms of use</span>
        <span>Do not Sell or Share my personal information</span>
      </div>
      <div className="p-5 text-sm text-slate-500 text-center">
        THE DELIVERY CHARGE IS NOT A DRIVER TIP. Offers Available For A Limited
        Time. You Must Ask/Click For Certain Offers. Additional Charge For Extra
        Cheese, Stuffed Crust, And Extra Toppings May Apply. You Must Request
        Contactless And/Or Curbside Pickup. Team Members Do Their Best To
        Accommodate Contactless, Curbside And Other Instructions, But
        Availability May Vary And Is Not Guaranteed. Product Availability,
        Combinability Of Discounts And Specials, Prices, Participation, Delivery
        Areas And Charges, And Minimum Purchase Required For Delivery May Vary.
        Discounts Are Not Applicable To Tax, Delivery Charge, Or Driver Tip. If
        You Are Using A Screen Reader And Are Having Problems Using This
        Website, Please Call XXX-XXX-XXXX For Assistance.
      </div>
      <footer>
        <p>&copy; {currentYear} Pizza Towns. All rights reserved.</p>
      </footer>
    </div>
  );
}
