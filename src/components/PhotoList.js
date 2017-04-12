import React, { Component } from 'react';
import Photo from './Photo'
import LazyLoad from 'react-lazyload';
import { Table, Col, Button} from 'react-bootstrap'

class PhotoList extends Component {

    constructor() {
        super();
        this.state = {
          pictures: [{
            "albumId": 0,
            "id": 0,
            "title": "Seal approves",
            "url": "http://i1.kym-cdn.com/entries/icons/original/000/019/211/sealapproval.JPG",
            "thumbnailUrl": "http://i1.kym-cdn.com/entries/icons/original/000/019/211/sealapproval.JPG"
          }],
          index: 0,
          maxAmount: 4
        };
    }

    componentDidMount() {
        let URL = 'https://jsonplaceholder.typicode.com/photos'
          fetch(URL)
          .then(result=>result.json())
          .then(pictures=>this.setState({pictures: this.state.pictures.concat(pictures)}));

        var count = this.props.indexcount;
        this.setState({index: count})
    }

    nextClicked() {
      if(this.state.index <= 5000 - 11 ) {
        this.setState({
          index: parseInt(this.state.index, 10)+12
        });
      }
    }

    backClicked() {
      if (this.state.index >= 0 + 11) {
        this.setState({
          index: parseInt(this.state.index, 10)-12
        });
      }
    }

    imgChosen(id) {
      // console.log("img should change to " + imgnum)
      this.props.changeView(id)
    }

    render() {
      //console.log(this.state.index)
      const items = this.state.pictures.map(
        (item) => <LazyLoad key={item.id} height={50} once={true}>
                    <Photo key={item.id} item={item}
                    changeImage={this.imgChosen.bind(this)}/>
                  </LazyLoad>
      )

      return (
        <div>
          <div className="upperHalf">
            {/*TODO <div> cannot appear as a child of <table> */}
            <Table className="Thumbnails">
                <Col className="ThumbnailColumn"xs={4} sm={4} md={4} lg={4}>
                  {items.splice(this.state.index,this.state.maxAmount)}
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                  {items.splice(this.state.index,this.state.maxAmount)}
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                  {items.splice(this.state.index,this.state.maxAmount)}
                </Col>
            </Table>
          </div>

          <Button className="myButton" disabled={this.state.index >= 5000-11}
                  onClick={this.nextClicked.bind(this)}>Next</Button>
          <Button className="myButton" disabled={this.state.index <= 0+11}
                  onClick={this.backClicked.bind(this)}>Back</Button>
        </div>
      )
    }
}

export default PhotoList;
