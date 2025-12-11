
import couponData from '../data/couponData'
function CampaignSelector({ selectCampaigns, handleSelectCampaign }) {

  return (
    <div>
      <h1>รายการส่วนลด</h1>
      <h3>Coupon</h3>
      {couponData.filter(c => c.category === 'coupon')
      .map(c=>(
        <button key={c.id} onClick={()=>handleSelectCampaign(c)}>
          {c.campaign}
        </button>
      ))}

      <h3>On Top</h3>
      {couponData.filter(c => c.category ==='ontop')
      .map(c => (
        <button key={c.id} onClick={()=>handleSelectCampaign(c)}>
          {c.campaign}
        </button>
      ))}

      <h3>Seasonal</h3>
      {couponData.filter(c => c.category === 'seasonal')
      .map(c =>(
        <button key={c.id} onClick={()=>handleSelectCampaign(c)}>
          {c.campaign}
        </button>
      ))}

      <h3>Campaigns ที่เลือก</h3>
      <p>Coupon: {selectCampaigns.coupon?.campaign || '-'}</p>
      <p>Ontop: {selectCampaigns.ontop?.campaign || '-'}</p>
      <p>Seasonal: {selectCampaigns.seasonal?.campaign || '-'}</p>
    </div>
  );
}

export default CampaignSelector;
