import React from "react";
import { Link } from 'react-router'

export default class Photo extends React.Component {
  constructor(props) {
        super();
        this.state = {
          url : props.item.url,
          thumbnail : props.item.thumbnailUrl,
          id : props.item.id,
          title : props.item.title,
          albumId : props.item.albumId
        }
    }

  imgClicked() {
    // console.log(this.state.id)
    this.props.changeImage(this.state.id)
  }

  render() {
    return (
      <div>
        {/*Link knows if the path is active or not*/}
        <Link to={"/photo/" + this.state.id } activeClassName="activePhoto">
            <img className="ThumbPicture" onClick={this.imgClicked.bind(this)}
            src={this.state.thumbnail} alt={this.state.id}/>
        </Link>
      </div>
    );
  }
}
