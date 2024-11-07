import React, { useContext } from 'react'
import { Offer } from '../../App'

export default function PromoOffer() {
  const offerData = useContext(Offer)
  return (
    <tr>
        <td>Promo Offer</td>
        <th>Flat {offerData.offerPercentage}% {offerData.offerMessage}</th>
    </tr>
  )
}
