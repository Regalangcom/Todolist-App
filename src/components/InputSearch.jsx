import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { dataGet } from "./utils/data";

class InputSearch extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               contactUser: [],
               searchQuery: "",
               contact: "",
               isModalOpen: false, // Tambahkan state untuk mengontrol tampilan modal
          };

          this.handleSearch = this.handleSearch.bind(this);
          this.toggleModal = this.toggleModal.bind(this);
          this.handleButton = this.handleButton.bind(this);
     }

     handleSearch(e) {
          this.setState({
               searchQuery: e.target.value,
          });
     }

     toggleModal() {
          this.setState((prevState) => ({
               isModalOpen: !prevState.isModalOpen, // Membalikkan nilai modal
          }));
     }


     handleButton() {
          // reset value input  button
          this.props.onSearch(this.state.searchQuery);
          this.setState({ searchQuery: "", isModalOpen: false });
     }

     render() {
          return (
               <div className="flex justify-start mb-8 fixed top-8 bg-gray-100 rounded-full  blur-7 w-1/7">
                    <div className="m-2 rounded-full flex ">
                         <AiOutlineSearch
                              onClick={this.toggleModal}
                              className="w-[30px]m-6"
                         />{" "}
                    </div>
                    {/* Tampilkan modal jika isModalOpen true */}
                    {this.state.isModalOpen && (
                         <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center">
                              <div className="bg-white p-4 rounded-lg">
                                   {/* Isi modal pencarian di sini */}
                                   <input
                                        type="text"
                                        placeholder="Cari catatan..."
                                        className="border rounded-full p-5"
                                        value={this.state.searchQuery}
                                        onChange={this.handleSearch}
                                   />
                                   <div className="flex py-5 p-2 lg:w-[400px] xl:w-[500px]">
                                        <button
                                             onClick={() => this.handleButton()}
                                             className="bg-gray-300 w-full p-3 m-5 rounded-full"
                                        >
                                             Cari Todo Anda
                                        </button>
                                   </div>
                              </div>
                         </div>
                    )}
               </div>
          );
     }
}

export default InputSearch;
