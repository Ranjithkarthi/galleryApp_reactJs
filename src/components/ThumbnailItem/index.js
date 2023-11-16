// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, clickThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachItem
  const activeClass = isActive ? 'active-on' : ''
  const onClickingThumbnail = () => {
    clickThumbnail(id)
  }
  return (
    <li className="list-style">
      <button type="button" onClick={onClickingThumbnail} className="btn">
        <img
          src={thumbnailUrl}
          className={`thumbnail-size ${activeClass}`}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
