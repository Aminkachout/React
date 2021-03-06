import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import Settings from "./components/Settings";
import EditForm from "./components/EditForm";

import BookingForm from "./components/BookingForm";
import {Router, Route, browserHistory} from "react-router"  ;
import {Link} from "react-router"  ;
import axios from "axios";

//====================================
class Invoices extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=({users:[]});
  }
  componentDidMount()
  {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(response=>{
      this.setState({users:response.data.drinks});
    })
    .catch(function(error){
      console.log(error);
    })
  }
  render()
  {
    console.log(this.state.users);
    let persons=[];
    let latter;
   // this.state.users>5?latter=5:latter=this.state.users;
    for (var i = 0; i <= 1; i++) {
      persons=this.state.users.map((person)=>person.strDrink);
    }
    console.log(persons);
    let bookings=[{id:100,valueName:"Manaa Ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"06/29/2017"}
                  ,{id:101,valueName:"Chbil ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:5,valueAgent:"Mazen",valueIn:"05/21/2017"}
                  ,{id:102,valueName:"Seif",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"06/27/2017"}
                  ,{id:103,valueName:"Manaa Mohamed",valueHotel:"marina hotel",valueNights:2,valuePax:1,valueAgent:"Mazen",valueIn:"06/04/2017"}]
    return(
      <div>
        <Menu/>
        <BookingForm persons={persons} bookings={bookings} options="pdf" name="Invoices"/>
      </div>
    );
  }
}
//====================================


//====================================
class Vouchers extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=({users:[]});
  }
  componentDidMount()
  {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(response=>{
      this.setState({users:response.data.drinks});
    })
    .catch(function(error){
      console.log(error);
    })
  }
  render()
  {
    console.log(this.state.users);
    let persons=[];
    let latter;
   // this.state.users>5?latter=5:latter=this.state.users;
    for (var i = 0; i <= 1; i++) {
      persons=this.state.users.map((person)=>person.strDrink);
    }
    console.log(persons);
    let bookings=[{id:100,valueName:"Manaa Ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"06/29/2017"}
                  ,{id:101,valueName:"Chbil ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:5,valueAgent:"Mazen",valueIn:"05/21/2017"}
                  ,{id:102,valueName:"Seif",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"06/27/2017"}
                  ,{id:103,valueName:"Manaa Mohamed",valueHotel:"marina hotel",valueNights:2,valuePax:1,valueAgent:"Mazen",valueIn:"06/04/2017"}]
    return(
      <div>
        <Menu/>

        <BookingForm persons={persons} bookings={bookings} name="Vouchers"/>
      </div>
    );
  }
}
//====================================

//====================================
class Facture extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=({users:[]});
  }
	componentDidMount()
  {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(response=>{
      this.setState({users:response.data.drinks});
    })
    .catch(function(error){
      console.log(error);
    })
  }
	render()
	{
    console.log(this.state.users);
    let persons=[];
    let latter;
   // this.state.users>5?latter=5:latter=this.state.users;
    for (var i = 0; i <= 1; i++) {
      persons=this.state.users.map((person)=>person.strDrink);
    }
    console.log(persons);
    let bookings=[{id:100,valueName:"Manaa Ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"06/29/2017"}
                  ,{id:101,valueName:"Chbil ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:5,valueAgent:"Mazen",valueIn:"05/21/2017"}
                  ,{id:102,valueName:"Seif Matallah",valueHotel:"Movenpique hotel",valueNights:4,valuePax:3,valueAgent:"Mazen",valueIn:"07/27/2017"}
                  ,{id:103,valueName:"Bouaouina ahmed",valueHotel:"Movenpique hotel",valueNights:2,valuePax:5,valueAgent:"Mazen",valueIn:"07/05/2017"}
                  ,{id:104,valueName:"Shimchikh ahmed",valueHotel:"Movenpique hotel",valueNights:6,valuePax:3,valueAgent:"Omar",valueIn:"07/06/2017"}
                  ,{id:105,valueName:"Manaa Aladin",valueHotel:"marina hotel",valueNights:10,valuePax:5,valueAgent:"Ali",valueIn:"07/07/2017"}
                  ,{id:106,valueName:"Manaa Aymen",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"07/08/2017"}
                  ,{id:107,valueName:"Rostom Nouisser",valueHotel:"marina hotel",valueNights:2,valuePax:1,valueAgent:"Mazen",valueIn:"08/04/2017"}]
  	return(
			<div>
				<Menu/>
				<BookingForm persons={persons} bookings={bookings} options="all" name="Bookings"/>
			</div>
		);
	}
}
//====================================

class Users extends React.Component
{
    constructor(props)
  {
    super(props);
    this.state=({users:[]});
    this.handleNewUser=this.handleNewUser.bind(this);
    this.handleEdit=this.handleEdit.bind(this);
  }
  componentDidMount()
  {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(response=>{
      this.setState({users:response.data.drinks});
    })
    .catch(function(error){
      console.log(error);
    })
  }
  handleNewUser(event)
  {
    browserHistory.push("users/newuser");
  }
  handleEdit(event,id)
  {
    event.defaultPrevented;
    browserHistory.push("users/edituser/"+id);
  }

    render() {

      let users=[{idUser:0,FirstName:"Foulen",LastName:"Ben Foulen",Role:"Admin",Email:"aaaa@gmail.com",Phone:"+22211133300"}
                    ,{idUser:1,FirstName:"Foulen",LastName:"Ben Foulen",Role:"Agent",Email:"aaaa@gmail.com",Phone:"+22211133300"}];

      let listUsers=users.map((user)=><tr>
                          <td>{user.FirstName}</td>
                          <td>{user.LastName}</td>
                          <td>{user.Role}</td>
                          <td>{user.Email}</td>
                          <td>{user.Phone}</td>
                          <td><button key={Math.floor((Math.random()*100)+1)} className="bouton" onClick={(event)=>this.handleEdit(event,user.idUser)}>Edit</button></td></tr>);
        return (
            <div>
                  <Menu/>
                  <div className="bookingForm">
                  <div className="booking">
                      <div className="head">
                      <div className="titre">Users</div>
                      <div className="space"></div>
                      <div className="print" onClick={this.handleNewUser}>New</div>
                    </div>
                    <div className="lign">
                      <div className="tet">
                      <table rules="all">
                        <thead>
                        <tr>
                          <th>FirstName</th>
                          <th>LastName</th>
                          <th>Role</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listUsers}
                        </tbody>
                    </table>
                        </div>
                      </div>
                    </div>
                   </div>
            </div>
        );
    }
}

//====================================

class NewUser extends React.Component
{

    render() {

        return (
            <div>
                  <Menu/>
            </div>
        );
    }
}

//====================================

class EditUser extends React.Component
{

    render() {

        return (
            <div>
                  <Menu/>
                  <h1>{this.props.params.id}</h1>
            </div>
        );
    }
}

class EditClient extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=({users:[]});
  }
  componentDidMount()
  {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(response=>{
      this.setState({users:response.data.drinks});
    })
    .catch(function(error){
      console.log(error);
    })
  }
  render()
  {
    console.log(this.state.users);
    let persons=[];
    let latter;
   // this.state.users>5?latter=5:latter=this.state.users;
    for (var i = 0; i <= 1; i++) {
      persons=this.state.users.map((person)=>person.strDrink);
    }
    console.log(persons);
    let bookings=[{id:100,valueName:"Manaa Ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"06/29/2017"}
                  ,{id:101,valueName:"Chbil ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:5,valueAgent:"Mazen",valueIn:"05/21/2017"}
                  ,{id:102,valueName:"Seif",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"06/27/2017"}
                  ,{id:103,valueName:"Manaa Mohamed",valueHotel:"marina hotel",valueNights:2,valuePax:1,valueAgent:"Mazen",valueIn:"06/04/2017"}]
    return(
      <div>
        <Menu/>

        <BookingForm persons={persons} bookings={bookings} name="Vouchers"/>
      </div>
    );
  }
}

//====================================
class App extends React.Component
{

	render()
	{
		return(
			<Router history={browserHistory}>
				<Route path={"/bookings"} component={Facture}/>
        <Route path={"/vouchers"} component={Vouchers}/>
        <Route path={"/invoices"} component={Invoices}/>
        <Route path={"/dashboard"} component={Facture}/>
        <Route path={"/users"} component={Users}/>
        <Route path={"/users/newuser"} component={NewUser}/>
        <Route path={"/users/edituser/:id"} component={EditUser}/>
        <Route path={"/settings"} component={Settings}/>
        <Route path={"/bookings/editclient"} component={EditClient} />
			</Router>
		);
	}
}

// ========================================

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
//=========================================
