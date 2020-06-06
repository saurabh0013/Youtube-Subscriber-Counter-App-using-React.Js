import React from 'react'

class Description extends React.Component{
  render(){
    return(
      <h1 className=" p-3">This is {this.props.name} page</h1>
    )
    
  }

}
export default Description