export function orderStatusInProgressEmailTemplate(order: any) {
  const template = `
        <div>
    <div style="font-size: 14px;font-family: sans-serif;letter-spacing: 0.3px;font-weight: 300;">
    <p style="font-size: 16px; font-weight: 500;padding: 5px 15px; border-bottom: 1px solid #EDEBEB;">Your Order Is
      Being Processed - <span style="font-weight: 600;">Order #12345 </span> </p>
    <table style="width: 100%; background-color: white; padding: 2px 15px; border-collapse: collapse;">
      <tr>
        <td style="width: 50%; padding: 10px;">
          <img
            src="https://www.dentistry99.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdentistry-logo.8c48c67f.png&w=3840&q=75"
            alt="" width="130px">
        </td>
        <td style="width: 50%; padding: 10px; text-align: right; vertical-align: middle;">
          <p style="font-size: 13px; margin: 0;color:black;">Your order is in progress!</p>
        </td>
      </tr>
    </table>

    <div style="padding: 2px 15px;">
      <p style="margin-bottom: 0px; font-weight: 300;color:black;">Dear ${order.user?.firstName} ${order.user.lastName}, We're excited to let you know that your order (${order.id})
        is being processed. Our team is working hard to ensure everything is ready for shipment as soon as possible.</p>
      <p style="margin-top: 10px;margin-bottom: 0px;color:black;">Once your order is ready to ship, we'll send you another email
        with tracking information.</p>
    </div>

    <div style="border-top: 1px solid #f6f4f4;background-color: rgb(246, 251, 255);padding: 2px 15px;">
      <div style="width: 100%;">
        <p style="color:gray;font-weight: 600;color:black;">Order ID: <span style="font-weight: 300;">(${order.id})</span></p>
        ${order.products?.map(
    (product) => `
          <table style="width: 100%; margin-bottom: 15px; border-collapse: collapse;">
            <tr>
              <td style="width: 70%; padding: 10px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="width: 70px; padding-right: 10px;">
                      <img src="${product.variant.product.images[0]}" alt="" height="70px" width="70px" style="border-radius: 5px;">
                    </td>
                    <td>
                      <p style="margin: 0; width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;color:black;">
                        Product Name</p>
                      <p style="color:gray; margin-top: 1px; width: 160px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        ${product.variant.product.title}</p>
                      <p style="color:gray; margin-top: 2px; margin-bottom: 0px;">Brand: ${product?.variant?.product?.brand}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>`
  )}
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0;">
            <p style="color: gray;margin: 9px 0px;">Payment Method:</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="width: 50%;">
                  <table style="border-collapse: collapse;">
                    <tr>
                      <td style="padding-right: 10px;">
                        <img src="https://static.vecteezy.com/system/resources/previews/020/975/576/non_2x/visa-logo-visa-icon-transparent-free-png.png"
                          width="60px" height="40px" alt="" style="background-color: white; border:1px solid #f6f4f4; border-radius: 5px;">
                      </td>
                      <td>
                        <p style="margin: 0;color:black;">visa...2499</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td style="width: 50%; text-align: right;">
                  <p style="margin: 0;color:black;">$ ${order.price}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="border-top: 1px solid #f6f4f4; padding: 10px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="color: gray;">item(s) total:</td>
                <td style="text-align: right; color: gray;">$ <span>${order.price}</span></td>
              </tr>
              <tr>
                <td style="color: gray;">item(s) discount:</td>
                <td style="text-align: right; color: orange;">$ <span>${order.discount ? order.discount : "0"}</span></td>
              </tr>
               <tr>
                <td style="color: gray;">item(s) tax:</td>
                <td style="text-align: right; color: orange;">$ <span>${order.tax ? order.tax : "0"}</span></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="border-top: 1px solid #f6f4f4; padding: 10px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="color: gray;">shippingTax:</td>
                <td style="text-align: right; color: rgb(63, 185, 49);">${order.shippingTax ? order.shippingTax : "Free"}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="border-top: 1px solid #f6f4f4; padding: 10px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="color: rgb(42, 42, 42); font-weight: 600;">Order Total:</td>
                <td style="text-align: right; color: rgb(42, 42, 42); font-weight: 600;">$ <span>${order.price + order.tax + order.shippingTax}</span></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0;">
            <table style="width: 100%; border-collapse: collapse;">
            ${
              order.discount > 0 ? `<tr>
              <td style="color: orange; font-weight: 500;">Your saved:</td>
              <td style="text-align: right; color: orange; font-weight: 500;">$ <span>${order.discount ? order.discount : "0"}</span></td>
            </tr>` : ""
            }
            </table>
          </td>
        </tr>
      </table>
    </div>
   
        <div style="padding: 2px 15px;">
      <p style="text-align: center;color:black;">Have Questions or need help?</p>
      <table style="margin: 0 auto;">
        <tr>
          <td>
            <button
              style="padding: 7px 15px; background-color: transparent; outline: none;border:1px solid #c3c5c9;border-radius: 8px;display: inline-flex;margin-right: 10px;">
              <img src='https://i.postimg.cc/5jhhvxhB/return-icon.png'
              width="15px" alt="">
              <span style="font-size: 12px;font-weight: 400;margin-left:5px;">Return</span>
            </button>
          </td>
          <td>
            <button
              style="padding: 7px 15px; background-color: transparent; outline: none;border:1px solid #c3c5c9;border-radius: 8px;display: inline-flex;">
              <img
                src='https://i.postimg.cc/XZKqMH9h/support.png'
                width="15px" alt="">
              <span style="font-size: 12px;font-weight: 400;margin-left: 5px;">Support</span>
            </button>
          </td>
        </tr>
      </table>
    </div>

     <div style=" padding: 2px 15px;">
      <div style="display: flex; justify-content: start; align-items: start;">
        <div style="margin-top:13px ;">
          <img
            src='https://i.postimg.cc/vcBCp3Jm/safe.png'
            width="20px" height="20px" alt="" style="margin-right: 5px;">
        </div>
        <div>
          <p style="margin-bottom: 0px; font-weight: 600;color: black;">Safe Payments</p>
          <p style="margin-bottom: 0px;margin-top: 3px;font-size: 12px;color: black;">your payment information is safe with us.
          </p>
          <div
            style="display: flex; justify-content: start; align-items: center; color: gray; margin-top: 0px; ">
            <span style="font-size: 12px; margin-right: 2px;line-height: 25px;">learn more</span>
            <img
              src='https://i.postimg.cc/PPz8nqhK/right-arrow.png'
              width="25px" alt="" >

          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: start; align-items: start;">
        <div style="margin-top:13px ;">
          <img
            src='https://i.postimg.cc/pyg16RJs/date-encrypt.png' 
            width="20px" height="20px" alt="" style="margin-right: 5px;">
        </div>
        <div>
          <p style="margin-bottom: 0px; font-weight: 600;color: black;">Data Encryption</p>
          <p style="margin-bottom: 0px;margin-top: 3px;font-size: 12px;color: black;">Dentistry protects your address
            information,ensuring its privacy and security. All address data is encrypted.
          </p>
        </div>
      </div>

      <div style="display: flex; justify-content: start; align-items: start;">
        <div style="margin-top:13px ;">
          <img
            src='https://i.postimg.cc/Sj7DDCjx/lock-icon.png' 
            width="20px" height="20px" alt="" style="margin-right: 5px;">
        </div>
        <div>
          <p style="margin-bottom: 0px; font-weight: 600;color: black;">Secure Privacy</p>
          <p style="margin-bottom: 0px;margin-top: 3px;font-size: 12px;color: black;">Protecting your privacy is important to us!
            Please be assured and uncompromised. we do not sell your personal information for money and will only use
            your information in accordance with our privacy and cookie policy to provide and improve our services to
            you.
          </p>
          <div
            style="display: flex; justify-content: start; align-items: center; color: gray; margin-top: 0px; ">
            <span style="font-size: 12px;margin-right: 2px;line-height: 25px;">learn more</span>
            <img
              src='https://i.postimg.cc/PPz8nqhK/right-arrow.png'
              width="25px" alt="">

          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: start; align-items: start;">
        <div style="margin-top:13px ;">
          <img
            src='https://i.postimg.cc/7511XyKJ/cart-icon.png' 
            width="20px" height="20px" alt="" style="margin-right: 5px;">
        </div>
        <div>
          <p style="margin-bottom: 0px; font-weight: 600;color: black;">Purchase Protection</p>
          <p style="margin-bottom: 0px;margin-top: 3px;font-size: 12px;color: black;">Shop confidently on Dentistry99 knowing if
            something goes wrong with an order, we've got your back.
          </p>
          <div
            style="display: flex; justify-content: start; align-items: center;color: gray; margin-top: 0px; ">
            <span style="font-size: 12px;margin-right: 2px;line-height: 25px;">learn more</span>
            <img
              src='https://i.postimg.cc/PPz8nqhK/right-arrow.png'
              width="25px" alt="">

          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: start; align-items: start;">
        <div style="margin-top:13px ;">
          <img
            src='https://i.postimg.cc/3WwLRWnS/free-return.png'
            width="20px" height="20px" alt="" style="margin-right: 5px;">
        </div>
        <div>
          <p style="margin-bottom: 0px; font-weight: 600;color: black;">Free Returns*</p>
          <p style="margin-bottom: 0px;margin-top: 3px;font-size: 12px;color: black;">we hope you love the items. you have purchased,
            but if yiu are not 100% satisfied, it is easy to return any eligible item in its original condition.
          </p>
          <div
            style="display: flex; justify-content: start; align-items: center; color: gray; margin-top: 0px; margin-bottom: 10px;">
            <span style="font-size: 12px;margin-right: 2px;line-height: 25px;">learn more</span>
            <img
              src='https://i.postimg.cc/PPz8nqhK/right-arrow.png'
              width="25px" alt="">

          </div>
        </div>
      </div>
    </div>
     <div style=" padding: 2px 15px;background-color: rgb(246, 251, 255);font-size: 13px;">
      <div style="padding-top: 5px;">
        <p
          style="color:black; font-size: 14px; text-align: center; margin-top: 0px;margin-bottom: 0px; font-weight: 600;">
          Find us on</p>
        <div style="display: flex; justify-content: center; align-items: center;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="" width="25px" height="25px"
            style="border-radius: 100%;">
          <img
            src="https://e7.pngegg.com/pngimages/672/312/png-clipart-instagram-logo-icon-others-text-photography-thumbnail.png"
            width="25px" height="25px" alt="" style="margin-left: 8px;border-radius: 100%;">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-twitter-x-icon-download-in-svg-png-gif-file-formats--logo-social-media-logos-pack-icons-7740647.png?f=webp&w=256"
            width="25px" height="25px"alt="" style="border-radius: 100%;margin-left: 8px;">
        </div>
        <p style="margin-bottom: 0px; margin-top: 3px;color:black;">NOTE: This is an automiatically generated email,
          <span style="color: #0a96d4;">Please do not,</span>
        </p>
        <p style="margin-top: 5px;margin-bottom: 0px;color:black;">if you want to return items, please request a return and use
          Dentistry99 label. </p>
      </div>
      <p style="margin-top: 3px; margin-bottom: 3px;text-align: center;color:black;">Please contact <a href="https://www.dentistry99.com/contactUs"
          style=" text-decoration: none; color:#0a96d4;">Contact Us</a> if you have any questions.</p>
      <div style="width: 100%;text-align: center;">
      <div style="font-size: 11px;display: inline-flex;">
        <a href="https://www.dentistry99.com/privacy-Policy" style="text-decoration: none; color:black;">
          <p style="border-right: 1px solid black; padding-right: 10px;text-align: center;font-weight: 600;color:black;">Privacy & Cookie Policy </p>
        </a>
        <a href="https://www.dentistry99.com/terms-Conditions" style="text-decoration: none; color:black;">
          <p style="border-right: 1px solid black;padding: 0px 10px;text-align: center;font-weight: 600;color:black;">Terms & Conditions </p>
        </a>
      </div>
      </div>
    </div>
  </div>
          </div>
              `;
  return template;
}