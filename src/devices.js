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
	[10, "Prestigio Smartbook 116A03", "$153", 4.3 ],
];

const tabletsList = [
	{ id: "Identifier", name: "Product Name", price: "Price", rating: "Rating" },
	[ 11, "Asus ZenPad 3 16GB LTE Black", "$270", 4.0 ],
	[ 12, "Apple iPad A1822 Wi-Fi 32GB Space Gray", "$385", 5.0 ],
	[ 13, "Sigma mobile X-style Tab A102 Black", "$130", 4.1 ],
	[ 14, "Impression ImPAD 9415 Black", "$100", 4.6 ],
	[ 15, "Lenovo Tab 3 Essential 710F 16GB WiFi Black", "$92", 4.4 ],
	[ 100, "Huawei MediaPad T1 7.0 8GB 3G Silver", "$115", 4.2 ],
	[ 17, "Toshiba Satellite Click 10 LX0W-C64 64GB Silver", "$269", 4.1 ],
	[ 18, "Prestigio MultiPad Visconte 64GB Wi-Fi", "$145", 4.9 ],
	[ 19, "Acer Switch 10E SW3-013-17G7 64GB", "$252", 2.0 ],
	[ 20, "Apple iPad Pro 9.7 Wi-Fi 128GB", "$885", 5.0 ],
];

const mobilePhonesList = [
	{ id: "Identifier", name: "Product Name", price: "Price", rating: "Rating" },
	[ 21, "iPhone 5", "$400", 5.0 ],
	[ 22, "Samsung Galaxy S5", "$300", 3.8 ],
	[ 23, "Nokia Lumia 1320", "$130", 2.1 ],
	[ 24, "Motorola MOTO G4", "$146", 4.4 ],
	[ 25, "Samsung Galaxy S8", "$960", 4.6 ],
	[ 26, "Apple iPhone 6", "$442", 4.8 ],
	[ 0, "Sony Xperia X Dual", "$307", 3.5 ],
	[ 28, "Apple iPhone 7", "$730", 5.0 ],
	[ 29, "HTC One X10", "$385", 4.0 ],
	[ 30, "Huawei GR5 2017 Gold", "$308", 4.3 ],
];

const headerTable = notebooksList[0];

let myList = {"notebooksList":notebooksList, "tabletsList":tabletsList, "mobilePhonesList":mobilePhonesList};

class ProductsTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortingID: false, // true = ASC; false=DESC
			sortingName: true,
			sortingPrice: true,
			sortingRating: true,
			// sortedDir
			arr: []};
		this.sortedCol = this.sortedCol.bind(this);
	}

	myConsole(text, val) {
		console.log(text, val);
	}

	sortedCol(event) {
		let arrForSorting = this.props.devices.slice(1);
		let state = this.state;
		let column = event.target.className.toString();

		if (column === "idHeader") {
			if (state.sortingID) {
				arrForSorting.sort(function (a, b) {
					if (a[0] === b[0]) {
						return 0;
					} else {
						return (a[0] < b[0]) ? -1 : 1;
					}
				});

			} else {
				arrForSorting.sort(function (a, b) {
					if (a[0] === b[0]) {
						return 0;
					} else {
						return ((a[0] > b[0]) ? -1 : 1);
					}
				});
			}

            this.setState({sortingID: !this.state.sortingID});
            arrForSorting.unshift(headerTable);
            this.setState({arr: arrForSorting});

			return arrForSorting;
		}

        if (column === "nameHeader") {
            if (state.sortingName) {
                arrForSorting.sort(function (a, b) {
                    if (a[1].toLowerCase() === b[1].toLowerCase()) {
                        return 0;
                    } else {
                        return (a[1].toLowerCase() < b[1].toLowerCase()) ? -1 : 1;
                    }
                });

            } else {
                arrForSorting.sort(function (a, b) {
                    if (a[1].toLowerCase() === b[1].toLowerCase()) {
                        return 0;
                    } else {
                        return ((a[1].toLowerCase() > b[1].toLowerCase()) ? -1 : 1);
                    }
                });
            }

            this.setState({sortingName: !this.state.sortingName});
            arrForSorting.unshift(headerTable);
            this.setState({arr: arrForSorting});

            return arrForSorting;
		}

		if (column === "ratingHeader") {
			if (state.sortingRating) {
				arrForSorting.sort(function (a, b) {
					if (a[3] === b[3]) {
						return 0;
					} else {
						return (a[3] < b[3]) ? -1 : 1;
					}
				});

			} else {
				arrForSorting.sort(function (a, b) {
					if (a[3] === b[3]) {
						return 0;
					} else {
						return ((a[3] > b[3]) ? -1 : 1);
					}
				});
			}
            this.setState({sortingRating: !this.state.sortingRating});
            arrForSorting.unshift(headerTable);
            this.setState({arr: arrForSorting});

            return arrForSorting;
        }

        if (column === "priceHeader") {
            if (state.sortingPrice) {
                arrForSorting.sort(function (a, b) {
                    if (a[2] === b[2]) {
                        return 0;
                    } else {
                        return (Number(a[2].slice(1)) < Number(b[2].slice(1))) ? -1 : 1;
                    }
                });

            } else {
                arrForSorting.sort(function (a, b) {
                    if (a[2] === b[2]) {
                        return 0;
                    } else {
                        return ((Number(a[2].slice(1)) > Number(b[2].slice(1))) ? -1 : 1);
                    }
                });
            }
            this.setState({sortingPrice: !this.state.sortingPrice});
            arrForSorting.unshift(headerTable);
            this.setState({arr: arrForSorting});

            return arrForSorting;
        }

	}

	render(){
		let arr;
		let state = this.state;
		if (state.arr.length === this.props.devices.length){
			arr = this.state.arr;
		} else{
			arr = this.props.devices;
		}

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
						{arr.slice(1).map((val)=>{
							return (
								<tr key={val}>
									<td className="id">{val[0]}</td>
									<td className="name">{val[1]}</td>
									<td className="rating">{val[3]}</td>
									<td className="price">{val[2]}</td>
								</tr>
							);
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
		    notebooksList: true,
			tabletsList: false,
			mobilePhonesList: false,
		};
		this.changeCheckbox = this.changeCheckbox.bind(this);
	}

	myConsole(text, val) {
		console.log(text, val);
	}

	changeCheckbox(event){
		this.setState({[event.target.id]: !this.state[event.target.id]});
	}

	render() {
	    let devices = [];
		let checkState = this.state;
		Object.keys(checkState).map(function(el){if(checkState[el]){myList[el].map(function(dev,index){
			   if(index!==0){devices.push(myList[el][index]);}});
		} return devices;});

		devices.unshift(headerTable);

		// this.myConsole("devices=", devices);
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
					<ProductsTable devices={devices}/>
				</div>
			</div>
		);
	}
}

export default Devices;
