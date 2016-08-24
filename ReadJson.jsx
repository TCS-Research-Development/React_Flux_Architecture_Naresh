import React from 'react';
import ReactDOM from 'react-dom';
var Data=require('./mydata.json');


var DataBlock = React.createClass({
    getInitialState: function() {
      return {
        data: null
      };
    },

    componentDidMount: function() {
                this.setState({
                    data: this.props.url
                });   
   },             
    render: function() {
        var uistyle={
           color:"rgb(37, 106, 123)",
           marginLeft:"20%",
           marginTop:"15px",
           textDecoration:"underline"
       }
        return <div>
        <h1 style={uistyle}>Country List</h1>
        <div>
            <ul>
               {Data.country.map((dynamicComponent, i) => <Content 
                  key = {i} componentData = {dynamicComponent}/>)}
            </ul>
         </div>
        
        {this.state.data}
        </div>;
    }
});

class Content extends React.Component {
   render() {
      var listyle={
           fontSize:"23px",
           color:"#2b2ba0",
           marginLeft:"20%",
           marginTop:"15px"
       }
      return (
         <li style={listyle}>
          {this.props.componentData.name}     
         </li>
      );
   }
}


ReactDOM.render(<DataBlock url={Data}/>, document.getElementById('app'));