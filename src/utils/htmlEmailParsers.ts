export const newOrderToHTML = (order: OrderType) => {
  let itemsDiv = [];
  order.items.map((item, index) => {
    const extraItems = [];
    item.selectedExtras.map((extra)=> extraItems.push(`<div>${extra.label}</div>`))
    const newItem = `<div><div style="font-weight:600">${item.title}</div><div>${item.selectedSize.label}</div>${extraItems.join("")}<div style="display: flex"><div>Precio unitario € ${item.subTotal.toFixed(2)}</div></div><div>${item.quantity} ${item.quantity > 1 ? "unidades compradas" : "unidad comprada"}</div><div style="font-weight: 700; font-size: medium">Subtotal € ${item.total.toFixed(2)}</div></div><br/>`;

    itemsDiv.push(newItem)
  });
  const name = order?.name ? order.name : ""
  const html = `<div><div>Hola ${name},</div><br/><div>Hiciste una compra a través de <span style="font-weight: 700">www.chargeupbcn.com</span>. El detalle de tu pedido está a continuación</div><br/>${itemsDiv.join("")}<div><div style="font-size: large">Total abonado: <span style="font-weight: 700">€ ${parseInt(order.totalAmount).toFixed(2)}</span></div><br/><div>El pedido se retira por Poblenou en 48hs habiles</div><br/></div><div>Gracias por su compra.</div></div><br/><div style="font-weight: 700">Charge UP Barcelona.</div><div/></div>`
  return html;
};

export const emailVerificationToHTML = (name: string, pid:string) => {
  const link = process.env.NODE_ENV === "development" ? `http://localhost:3000/emailvalidation/pid=${pid}` : `https://chargeupbcn.vercel.app/emailvalidation/pid=${pid}`;

  return `<div>Hola ${name},</div><br><div>Te registraste a través de <span style="font-weight: 700">www.chargeupbcn.com</span>. Para validar tu cuenta, por favor haz click en el siguiente enlace: </div><br><a href=${link}>${link}</a><br><br><div>Si tu no has iniciado esta solicitud, por favor descarta este email.</div><br><div>Gracias por confiar en nosotros.</div><div style="font-weight: 700">Charge UP Barcelona.</div>`
}

export const passwordRecoveryToHTML = (email:string,token:string) => {
  const link = process.env.NODE_ENV === "development" ? `http://localhost:3000/pwdrecovery/${email}?token=${token}` : `https://chargeupbcn.vercel.app/pwdrecovery/${email}?token=${token}`;

  return `<div>Hola,</div><br><div>Solicitaste modificar tu contraseña de <span style="font-weight: 700">www.chargeupbcn.com</span>. Para cambiarla, hace click en el siguiente enlace: </div><br><a href=${link}>${link}</a><br><div>Este enlace expirará en 24hs. Pasado este tiempo deberas realizar una nueva solicitud de cambio de contraseña.</div><br><div>Si tu no has iniciado esta solicitud, por favor descarta este email.</div><br><div>Gracias por confiar en nosotros.</div><div style="font-weight: 700">Charge UP Barcelona.</div>`
}