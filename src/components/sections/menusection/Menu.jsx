// import React, { Component } from "react";
// import { API_URL } from "../../../api/data";
// import axios from "axios";

// export default class MenuSection extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       menus: [],
//     };
//   }

//   componentDidMount() {
//     axios
//       .get(API_URL + "products")
//       .then((res) => {
//         console.log("Response : ", res);
//         const menus = res.data;
//         this.setState({ menus });
//       })
//       .catch((error) => {
//         console.log("Error yaa ", error);
//       });
//   }

//   render() {
//     console.log(this.state.menus);
//     return (
//       <section className="container mx-auto py-36 px-8">
//         <div className="grid lg:grid-cols-3">
//           {menus && menus.map((menu) => <h2>{menu.nama}</h2>)}
//         </div>
//       </section>
//     );
//   }
// }
