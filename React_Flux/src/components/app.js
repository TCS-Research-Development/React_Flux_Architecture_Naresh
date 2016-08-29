var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores.js');

var Data=require('../mydata.json');

function getAppState() 
{
  return {
            Data: AppStore.getData()
         };
}



var App = React.createClass({

  getInitialState: function() {
    return getAppState();
  },
  
  // Listen for changes
  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  handleClick1:function(){
        AppActions.addItem(Data);   
	},
	getData:function(){
		AppActions.getjsonData(Data);
	},
    renderfunction:function(data){
       return <Content key={data} index={data} details={this.state.Data[data]} />
    },
	render:function(){
		return(
			<div className="wrapper">	
				 <button onClick={this.handleClick1}>Click to Get Country List</button>
                 {Object.keys(this.state.Data).map(this.renderfunction)}
			</div>
			 )
	},
	 _onChange: function() {
        this.setState(getAppState());
    }

})

var Content = React.createClass({
  render: function() {
    
    var listyle={
           fontSize:"23px",
           color:"#2b2ba0",
           marginLeft:"20%",
           marginTop:"15px"
       }
      return (
         <li style={listyle}>
          {this.props.details.name}
         </li>
      );
  }
});

module.exports = {
    comp1: App,
    comp2: Content
}
