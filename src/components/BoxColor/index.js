import React from 'react';


class BoxColor extends React.Component {
    render() {
        return (
          <div style={{width: 600, height: 120, backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,border: '2px solid black',fontSize: 30, 
          margin: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          rgb {this.props.r}, {this.props.g}, {this.props.b}
          <br/>


          </div>
        );
      }
  

}

export default BoxColor;