import React from "react";

class ContactInput extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               title: "",
               body: "",
               maxCharacters: 100,
               error: false,
          };

          this.InputValue = this.InputValue.bind(this);
          this.onSubmitHandler = this.onSubmitHandler.bind(this);
     }

     InputValue(e) {
          const { name, value } = e.target;
          const maxCharacters = this.state.maxCharacters;
          let RemainingCharacters = maxCharacters - value.length;

          this.setState({
               [name]: value,
          });

          const ValueCharacter = document.getElementById("valueCaracter");
          ValueCharacter.innerText = `sisa karakter ${RemainingCharacters}`;
          // Mengupdate elemen <p> dengan sisa karakter
          if (name === "body") {
               if (RemainingCharacters < 40) {
                    RemainingCharacters = 0;
                    ValueCharacter.style.color = "red";
               } else {
                    ValueCharacter.style.color = "black";
               }
          }
     }

     onSubmitHandler(e) {
          e.preventDefault();
          const { title, body } = this.state;
          if (title.trim() === "" || body.trim() === "") {
               alert("isi column input");
          } else {
               this.props.addContacts(this.state);
               this.setState({
                    title: "",
                    body: "",
               });
          }
     }

     render() {
          return (
               <div className="">
                    <div className="text-center">
                         <h2>Buat Catatan</h2>
                    </div>
                    <div className="max-w-lg mx-auto bg-white mt-5  rounded-lg shadow-md sm:p-4">
                         <form
                              onSubmit={this.onSubmitHandler}
                              className="shadow-md rounded px-8 pt-6 pb-8 mb-2 p-6 "
                         >
                              <div className="">
                                   <p className="" id="valueCaracter">
                                        Sisa karakter:{" "}
                                        {this.state.maxCharacters}
                                   </p>
                                   {/* <label htmlFor="" className="">
                                        Judul
                                   </label> */}
                                   <br />
                                   <input
                                        type="text"
                                        placeholder="ini adalah judul"
                                        name="title"
                                        className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={this.state.title}
                                        onChange={this.InputValue}
                                   />
                              </div>
                              <br />
                              <div className="">
                                   <p
                                        className="md:text-center"
                                        id="valueCaracter"
                                   ></p>
                                   {/* <label htmlFor="" className="">
                                        Tuliskan Catatan mu
                                   </label> */}
                                   <br />
                                   <textarea
                                        className="shadow appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="body"
                                        id="body"
                                        placeholder="tuliskan catatan mu disini"
                                        maxLength={this.state.maxCarakter}
                                        value={this.state.body}
                                        onChange={this.InputValue}
                                   ></textarea>
                              </div>
                              <br />
                              <div className="flex items-center justify-center ">
                                   <button
                                        type="submit"
                                        className="bg-gray-500 hover:bg-gray-900 text-white font-bold p-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                   >
                                        Tambahkan
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          );
     }
}

export default ContactInput;
