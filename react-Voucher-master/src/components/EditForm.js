import React from "react";
import ReactDOM from "react-dom";
import {browserHistory} from "react-router"  ;
import {Link} from "react-router"  ;
import Invoice from "./Invoice";
import Tableau1 from "./Tableau1";
import axios from "axios";
import 'whatwg-fetch';
import Ligne from "./Ligne";




//====================================
class EditForm extends React.Component
{
	constructor(props) {
    super(props);
    this.state = {valueName: ''
				  ,valueAdults: ''
				  ,valueChildren: ''
				  ,valueHotel:''
				  ,valueIn:''
				  ,valueOut:''
				  ,valueRoom:[{ roomId:1
				  				,valueRoomtype:'Single'
				  				,valueUnit:''
				  				,valueRoomUnits:''
				  				,valueBase:'Lpd'
				  				,valueNights:'0'}]
				  ,valueAdds:1
				  ,valueGenerate:false
          ,valueClick:false
          ,msg:''
				  };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangemsg = this.handleChangemsg.bind(this);
    this.handleChangeAdults = this.handleChangeAdults.bind(this);
    this.handleChangeChildren = this.handleChangeChildren.bind(this);
    this.handleChangeHotel = this.handleChangeHotel.bind(this);
    this.handleChangeIn = this.handleChangeIn.bind(this);
    this.handleChangeOut = this.handleChangeOut.bind(this);
    this.handleChangeRoom = this.handleChangeRoom.bind(this);
    this.handleChangeBase = this.handleChangeBase.bind(this);
    this.handleChangeUnit = this.handleChangeUnit.bind(this);
    this.handleChangeRoomUnits = this.handleChangeRoomUnits.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChangeGenerate=this.handleChangeGenerate.bind(this);
    //this.handleChangePrint=this.handleChangePrint.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {

    var d = new Date(1993, 6, 28);
        let values=this.state;
        values.valueName='amin';
        values.valueAdults='2';
        values.valueChildren='3';
        values.valueHotel='marina';
        values.valueIn=  d.toString();
        values.valueOut= d;
        values.msg='azertyuidsjjq';
        this.setState({newUser:values})



       }
  handleChangemsg(event) {
    this.setState({msg: event.target.value});
  }

  handleChangeName(event) {
    this.setState({valueName: event.target.value});
  }
  handleChangeAdults(event) {
    this.setState({valueAdults: event.target.value});
  }
  handleChangeChildren(event) {
    this.setState({valueChildren: event.target.value});
  }

  handleChangeHotel(event) {
    this.setState({valueHotel: event.target.value});
  }
  handleChangeIn(event) {
    this.setState({valueIn: event.target.value});
  }
  handleChangeOut(event) {
    if ((event.target.value<this.state.valueIn)&&(this.state.valueOut.length>=7)) {
      alert('Checkout date must be higher than Checkin date!');
    }
    else{
    this.setState({valueOut: event.target.value});
    }
  }

  handleChangeRoom(event,i) {
  	const values=this.state.valueRoom;
  	values[i].valueRoomtype=event.target.value;
    this.setState({valueRoom: values});
  }
  handleChangeUnit(event,i) {

    const values=this.state.valueRoom;
  	values[i].valueUnit=event.target.value;
    this.setState({valueRoom: values});
  }
  handleChangeRoomUnits(event,i) {
    const values=this.state.valueRoom;
  	values[i].valueRoomUnits=event.target.value;
    this.setState({valueRoom: values});
  }

  handleChangeBase(event,i) {
    const values=this.state.valueRoom;
  	values[i].valueBase=event.target.value;
    this.setState({valueRoom: values});
  }
  /*handleSubmit(event) {
    event.defaultPrevented;
    axios.post('/facture',{
      valueName:'seif'
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }*/
  handleAdd()
  {
  	const values=this.state.valueRoom;
  	let num=this.state.valueAdds+1;
  	values[num-1]={ roomId:num
  								,valueRoomtype:'Single'
				  				,valueUnit:''
				  				,valueRoomUnits:''
				  				,valueBase:'Lpd'
				  				,valueNights:'0'};
  	this.setState({valueAdds:num,valueRoom:values});
  }
  handleDelete()
  {
  	const values=this.state.valueRoom;
  	let num=this.state.valueAdds-1;
  	values[num]=null;
  	this.setState({valueAdds:num,valueRoom:values});
  }



  render() {



  			let start=new Date(this.state.valueIn);
    		let end=new Date(this.state.valueOut);
    		let night=(end-start)/86400000;
    		if(!night)
    		{
    			night=0;

    		}
   		var rooms=[];
			for (let ii = 0; ii < this.state.valueAdds; ii++) {

      			rooms.push(<Ligne key={ii+1} cle={ii} onClick={this.handleAdd} handleDelete={this.handleDelete} valeur={this.state} nights={night}
				handleChangeRoom={(e)=>this.handleChangeRoom(e,ii)} handleChangeBase={(e)=>this.handleChangeBase(e,ii)}
				handleChangeUnit={(e)=>this.handleChangeUnit(e,ii)} handleChangeRoomUnits={(e)=>this.handleChangeRoomUnits(e,ii)}/>);
      		}
      		let voice=[];
      		if (this.state.valueGenerate) {
      			voice.push(<Invoice key="1" name={this.state.valueName} info={this.state} nights={night}/>)
      		}


      let show="booking ajout";
      let hide="tableau1 hide";
      this.state.valueClick?show="booking ajout new":hide="tableau1";
    return (

      <div className="bookingForm">
    	<form onSubmit={this.handleSubmit}>
    	<div className="booking">
    	<div className="hed">
    	<div className="titre">Edit Booking </div>
    	<div className="id">#B0023</div>
    	</div>

    	<div className="form">
    	<div className="ligne">
    	<div className="box">
    	<label htmlFor="client">
    	Client Name
    	</label>
    	<input list="suggestions" id="client" className="client" type="text" value={this.state.valueName} onChange={this.handleChangeName} />
      </div>
    	<div className="box">
    	<label>
    	Adults
    	</label>
    	<input type="number" value={this.state.valueAdults} onChange={this.handleChangeAdults} />
    	</div>
    	<div className="box">
    	<label>
    	Children
    	</label>
    	<input type="number" value={this.state.valueChildren} onChange={this.handleChangeChildren} />
    	</div>
    	</div>
    	<div className="ligne">
    	<div className="box">
    	<label>
    	Hotel
    	</label>
    	<input list="suggestions2" className="hotel" type="text" value={this.state.valueHotel} onChange={this.handleChangeHotel} />
    	</div>
    	<div className="box">
    	<label>
    	Check in date
    	</label>
    	<input type="date" value={this.state.valueIn} onChange={this.handleChangeIn} placeholder="mm/jj/yy" />
    	</div>
    	<div className="box">
    	<label>
    	Check out date
    	</label>
    	<input type="date" value={this.state.valueOut} onChange={this.handleChangeOut} placeholder="mm/jj/yy" />
    	</div>
    	</div>
    	<div className="barre" />
			{rooms}
    	<div className="ligne">
    	<div className="boxx">
    	<label>
    	Note
    	</label>
    	<textarea className="msg" value={this.state.msg} onChange={this.handleChangemsg} />
    	</div>
    	<div className="box">
    	<div className="save" onClick={this.handleSubmit}>Save Voucher</div>
    	</div>
    	<div className="box">
    	<div className="save" onClick={this.handleChangePrint}>Print Voucher</div>
    	</div>
    	<div className="box">
    	<div className="save" onClick={this.handleChangeGenerate}>Generate Invoice</div>
    	</div>
    	</div>

    	</div>
			{voice}
    	</div>
      </form>

    	</div>
	    );
	  }

}
//====================================
export default EditForm;
