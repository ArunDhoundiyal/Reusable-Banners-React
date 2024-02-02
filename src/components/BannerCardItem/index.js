import './index.css'

const ReusableBanners = props => {
  const {cardBanner} = props
  const {headerText, description, className} = cardBanner
  return (
    <li className={`${className} style-banner-card`}>
      <div className="card-container">
        <h1 className="top-heading">{headerText}</h1>
        <p className="bottom-paragraph">{description}</p>
        <button className="style-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default ReusableBanners
