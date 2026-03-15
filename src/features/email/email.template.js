export const orderConfirmationTemplate = (data) => {

  const itemsHtml = data.items
    .map(
      (item) => `
        <tr>
          <td style="padding:10px;border-bottom:1px solid #eee;">
            ${item.name}
          </td>
          <td style="padding:10px;border-bottom:1px solid #eee;text-align:center;">
            ${item.quantity}
          </td>
          <td style="padding:10px;border-bottom:1px solid #eee;text-align:right;">
            $${Number(item.price).toFixed(2)}
          </td>
        </tr>
      `
    )
    .join("");

  return {
    subject: `Order Confirmation - ${data.orderId}`,

    html: `
<html>
<body style="margin:0;background:#f2f5f9;font-family:Arial,Helvetica,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
    <tr>
      <td align="center">

        <table width="650" cellpadding="0" cellspacing="0"
          style="background:#ffffff;border-radius:12px;padding:30px;
          box-shadow:0 10px 30px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <tr>
            <td style="font-size:22px;font-weight:600;color:#222;">
              Busy-busy
            </td>

            <td align="right" style="font-size:14px;color:#666;">

              <a href="https://busy-busy-new.vercel.app/"
                style="color:#666;text-decoration:none;margin-left:12px;">
                Home
              </a>

              <a href="https://busy-busy-new.vercel.app/products"
                style="color:#666;text-decoration:none;margin-left:12px;">
                Products
              </a>

              <a href="https://busy-busy-new.vercel.app/orders"
                style="color:#666;text-decoration:none;margin-left:12px;">
                Orders
              </a>

            </td>
          </tr>

          <!-- SPACING -->
          <tr><td height="40"></td></tr>

          <!-- SUCCESS ICON -->
          <tr>
            <td colspan="2" align="center">
              <div style="
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background: #22c55e;
                    display: block;
                    text-align:center;
                    color: white;
                    font-size: 56px;
                    font-weight: bold;">
                ✓
              </div>
            </td>
          </tr>

          <!-- SPACING -->
          <tr><td height="25"></td></tr>

          <!-- TITLE -->
          <tr>
            <td colspan="2" align="center"
              style="font-size:26px;font-weight:600;color:#222;">
              Thank you for your purchase
            </td>
          </tr>

          <tr>
            <td colspan="2" align="center"
              style="color:#666;font-size:15px;padding-top:10px;">
              Hello ${data.customerName}, your order has been placed successfully.
            </td>
          </tr>

          <tr>
            <td colspan="2" align="center"
              style="color:#888;font-size:13px;padding-top:6px;">
              Order ID: ${data.orderId}
            </td>
          </tr>

          <!-- SPACING -->
          <tr><td height="40"></td></tr>

          <!-- ORDER CARD -->
          <tr>
            <td colspan="2" align="center">

              <table width="80%" cellpadding="0" cellspacing="0"
                style="background:#fafafa;border-radius:8px;padding:20px;
                border:1px solid #eee;">

                <tr>
                  <td colspan="3"
                    style="font-weight:600;font-size:16px;padding-bottom:10px;">
                    Order Summary
                  </td>
                </tr>

                <tr style="color:#777;font-size:13px;">
                  <td style="padding:10px;border-bottom:1px solid #eee;">
                    Product
                  </td>
                  <td style="padding:10px;border-bottom:1px solid #eee;text-align:center;">
                    Qty
                  </td>
                  <td style="padding:10px;border-bottom:1px solid #eee;text-align:right;">
                    Price
                  </td>
                </tr>

                ${itemsHtml}

                <!-- TOTAL -->
                <tr>
                  <td colspan="2"
                    style="padding-top:15px;font-weight:600;">
                    Total
                  </td>

                  <td align="right"
                    style="padding-top:15px;font-weight:600;">
                    $${Number(data.amount).toFixed(2)}
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- SPACING -->
          <tr><td height="30"></td></tr>

          <!-- SHIPPING -->
          <tr>
            <td colspan="2" align="center"
              style="font-size:14px;color:#666;">
              Shipping Address
            </td>
          </tr>

          <tr>
            <td colspan="2" align="center"
              style="font-size:14px;color:#333;padding-top:6px;">
              ${data.shippingAddress}
            </td>
          </tr>

          <!-- SPACING -->
          <tr><td height="40"></td></tr>

          <!-- FOOTER -->
          <tr>
            <td colspan="2" align="center"
              style="font-size:12px;color:#999;">
              Thank you for shopping with Busy-busy
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`
  };
};