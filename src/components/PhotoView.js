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
    this.setState({picture: {
      url: "http://i1.kym-cdn.com/entries/icons/original/000/019/211/sealapproval.JPG",
      title: "Hello world!",
      id: 5001
    }});
  }

  componentWillUpdate() {
    let URL = 'https://jsonplaceholder.typicode.com/photos'
      fetch(URL + "/" + this.props.params.id)
      .then(result=>result.json())
      .then(picture=>this.setState({picture}));
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
            <PhotoList />
          </Col>
        </Table>

      </div>
    );
  }
}
