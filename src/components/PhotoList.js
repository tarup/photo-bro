import React, { Component } from 'react';
import Photo from './Photo'
import LazyLoad from 'react-lazyload';
import { Table, Col, Button} from 'react-bootstrap'

class PhotoList extends Component {

    constructor() {
        super();
        this.state = {
          pictures: [],
          index: 0,
          maxAmount: 4
        };
    }

    componentDidMount() {
        let URL = 'https://jsonplaceholder.typicode.com/photos'
          fetch(URL)
          .then(result=>result.json())
          .then(pictures=>this.setState({pictures}));
    }

    //TODO  run when user is back to first/home page
    resetIndex() {
      this.setState({
        index: 0
      });
    }

    nextClicked() {
      if(this.state.index <= 5000 - 11 ) {
        this.setState({
          index: this.state.index+12
        });
      }
    }

    backClicked() {
      if (this.state.index !== 0) {
        this.setState({
          index: this.state.index-12
        });
      }
    }

    render() {
      const items = this.state.pictures.map(
        (item) => <LazyLoad key={item.id} height={50} once={true}>
                    <Photo key={item.id} item={item}/>
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

          <Button className="myButton"
                  onClick={this.nextClicked.bind(this)}>Next</Button>
          <Button className="myButton"
                  onClick={this.backClicked.bind(this)}>Back</Button>
        </div>
      )
    }
}

export default PhotoList;
