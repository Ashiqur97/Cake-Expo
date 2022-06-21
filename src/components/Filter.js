import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} products</div>
        <div className="filter-sort"> 
      
        Order {" "}
        
        <select value={this.props.size} onChange={this.props.sortProducts}>
                    <option>Latest</option>
                    <option value="lowset">Lowset</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
        <div className="filter-size">
          Filter {" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">ALL</option>
            <option value="1pb">1pb</option>
            <option value="2pb">2pb</option>
            <option value="3pb">3pb</option>
            <option value="4pb">4pb</option>
            <option value="1.5pb">1.5</option>
            <option value="3.7pb">3.7</option>
            </select>
            </div>
      </div>
        
     
    )
  }
}
