import React, { Component } from "react";
import "./devices.css";

const notebooksList = [
	{ id: "Identifier", name: "Product Name", price: "Price", rating: "Rating" },
	[ 1, "Lenovo IdeaPad Z507", "$145", 5.0 ],
	[ 2, "Lenovo G50-4", "$29", 3.4 ],
	[ 3, "Apple MacBook Pro 13 Early 2012", "$59", 4.5 ],
	[ 4, "Apple MacBook Pro 15 Early 2012", "$129", 4.0 ],
	[ 5, "Lenovo G71", "$185", 4.4 ],
	[ 6, "ASUS X20L", "$215", 4.0 ],
	[ 7, "MSI GT72VR-7RE Dominator Pro Dragon", "$2730", 5.0 ],
	[ 8, "Dell Alienware 17 R3", "$2850", 5.0 ],
	[ 9, "Apple MacBook Air 13", "$1000", 5.0 ],
	[ 10, "Prestigio Smartbook 116A03", "$153", 4.3 ],
];

const tabletsList = [
	{ id: "Identifier", name: "Product Name", price: "Price", rating: "Rating" },
	[ 1, "Asus ZenPad 3 16GB LTE Black", "$270", 4.0 ],
	[ 2, "Apple iPad A1822 Wi-Fi 32GB Space Gray", "$385", 5.0 ],
	[ 3, "Sigma mobile X-style Tab A102 Black", "$130", 4.1 ],
	[ 4, "Impression ImPAD 9415 Black", "$100", 4.6 ],
	[ 5, "Lenovo Tab 3 Essential 710F 16GB WiFi Black", "$92", 4.4 ],
	[ 6, "Huawei MediaPad T1 7.0 8GB 3G Silver", "$115", 4.2 ],
	[ 7, "Toshiba Satellite Click 10 LX0W-C64 64GB Silver", "$269", 4.1 ],
	[ 8, "Prestigio MultiPad Visconte 64GB Wi-Fi", "$145", 4.9 ],
	[ 9, "Acer Switch 10E SW3-013-17G7 64GB", "$252", 2.0 ],
	[ 10, "Apple iPad Pro 9.7 Wi-Fi 128GB", "$885", 5.0 ],
];

const mobilePhonesList = [
	{ id: "Identifier", name: "Product Name", price: "Price", rating: "Rating" },
	[ 1, "iPhone 5", "$400", 5.0 ],
	[ 2, "Samsung Galaxy S5", "$300", 3.8 ],
	[ 3, "Nokia Lumia 1320", "$130", 2.1 ],
	[ 4, "Motorola MOTO G4", "$146", 4.4 ],
	[ 5, "Samsung Galaxy S8", "$960", 4.6 ],
	[ 6, "Apple iPhone 6", "$442", 4.8 ],
	[ 7, "Sony Xperia X Dual", "$307", 3.5 ],
	[ 8, "Apple iPhone 7", "$730", 5.0 ],
	[ 9, "HTC One X10", "$385", 4.0 ],
	[ 10, "Huawei GR5 2017 Gold", "$308", 4.3 ],
];

let myList = {"notebooksList":notebooksList, "tabletsList":tabletsList, "mobilePhonesList":mobilePhonesList};

class ProductTable extends Component {
    constructor(props){
        super(props);
        this.state = { /*параметри сортування*/};
        this.sortedCol=this.sortedCol.bind(this);
    }

    sortedCol(event){
        // let arrIn = this.props.devices;
        // let column = event.target.className;
        // let arrOut = arrIn.slice(1).sort(function(a,b){/* функція для сортування*/
        //     });
	}

    render(){
            let arr = this.props.devices;
            let table = null;
            let tableHead =
                <thead>
                    <tr>
                        <td className="idHeader" onClick={this.sortedCol}>{arr[0]["id"]}</td>
                        <td className="nameHeader" onClick={this.sortedCol}>{arr[0]["name"]}</td>
                        <td className="ratingHeader" onClick={this.sortedCol}>{arr[0]["rating"]}</td>
                        <td className="priceHeader" onClick={this.sortedCol}>{arr[0]["price"]}</td>
                    </tr>
                </thead>;

                let tableBody =
					<tbody>
					{arr.slice(1).map((el, index) => {
                        return (
                            arr.slice(1)[index].map(function (val) {
                                return (
									<tr key={val}>
										<td className="id">{val[0]}</td>
										<td className="name">{val[1]}</td>
										<td className="rating">{val[3]}</td>
										<td className="price">{val[2]}</td>
									</tr>
                                );
                            }));
                    })}
                    </tbody>;

            if (this.props.devices) {
                table =
                    <table className="productTable">
                        {tableHead}

                            {tableBody}

                    </table>;
            }
            return (
                table
            );
        }
}

class Devices extends Component {
	constructor(props) {
		super(props);
		this.state = {
		    notebooksList:true,
            tabletsList:false,
            mobilePhonesList:false
		};
        this.changeCheckbox = this.changeCheckbox.bind(this);
	}

	changeCheckbox(event){
        this.setState({[event.target.id]: !this.state[event.target.id]});
	}

	render() {
	    let headerTable = notebooksList[0];
        let devices = [];
        devices.push(headerTable);
        let checkState = this.state;
        Object.keys(checkState).map(function(el){ if(checkState[el]){
            devices.push(myList[el].slice(1));
        } return devices;
        });
		return (
			<div className="container">
				<div className="productsName">
					{this.props.devicesName.map((name)=>{
						return (
							<div className="productName" key={name[1]}>
								<input type ="checkbox"
									   id={name[1]} name={name[1]}
									   className="css-checkbox lrg"
									   defaultChecked={checkState[name[1]]}
									   onClick={this.changeCheckbox}/>
								<label htmlFor={name[0]} className="css-label lrg labelDevice">{name[0]}</label>
							</div>);
					})}
				</div>
				<div className="productTable">
					<ProductTable devices={devices}/>
				</div>
			</div>
		);
	}
}

export default Devices;
