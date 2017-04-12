import React, { Component } from 'react';
import PhotoList from './PhotoList'
import { Table, Col} from 'react-bootstrap'

export default class PhotoView extends Component {
  constructor(props) {
      super(props);
      this.state = {
        picture: " "
      }
  }

  componentDidMount() {
    if (this.props.params.id >= 0 && this.props.params.id <= 5000) {
      //console.log("Proper id")
      this.changeBigPhoto(this.props.params.id)
    } else {
      //console.log("Uncorrect id")
      this.props.router.push('/photo/0')
      this.changeBigPhoto(0)
    }
  }

  changeBigPhoto(id) {
    //console.log("Photo id: " + id)
    id = parseInt(id, 10);

    if (id === 0) {
      this.setState({picture: {
        "albumId": 0,
        "id": 0,
        "title": "Seal approves",
        "url": "http://i1.kym-cdn.com/entries/icons/original/000/019/211/sealapproval.JPG",
        "thumbnailUrl": "http://i1.kym-cdn.com/entries/icons/original/000/019/211/sealapproval.JPG"}
      })
    } else {
        let URL = 'https://jsonplaceholder.typicode.com/'
        fetch(URL + "photos/" + id)
        .then(result=>result.json())
        .then(picture=>this.setState({picture}))
    }
  }

  render(props) {

    return (
      <div>
        {/*TODO <div> cannot appear as a child of <table> */}
        <Table className="container">
          <Col style={{maxWidth: '100%'}}
               xs={12} sm={12} md={6} lg={5}>
            <img className="BigPhoto" alt="img" src={this.state.picture.url} />
          </Col>

          <Col xs={12} sm={12} md={6} lg={3}>
            <h1 className="PictureInfo">
              {this.state.picture.id + ": " + this.state.picture.title}
            </h1>
          </Col>

          <Col xs={12} sm={12} md={12} lg={4}>
            <PhotoList changeView={this.changeBigPhoto.bind(this)}
                       indexcount={this.props.params.id}/>
          </Col>
        </Table>

      </div>
    );
  }
}
