import { dataGet } from "../utils/data";
import ContactList from "../ReactContactlist";
import React from "react";
import ContactInput from "../ReactCreateInputFrom";
import InputSearch from "../InputSearch";

class RootDataContactValue extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               contactUser: [],
               contact: "test",
               searchQuery: "",
          };

          this.onHandlerInput = this.onHandlerInput.bind(this);
          this.onHandlerDeleteButton = this.onHandlerDeleteButton.bind(this);
          this.handleSearch = this.handleSearch.bind(this);
     }

     componentDidMount() {
          const Contact = dataGet();
          this.setState({ contactUser: Contact });
     }

     onHandlerDeleteButton(id) {
          const DeleteUpdateButton = this.state.contactUser.filter(
               (contact) => contact.id !== id
          );
          this.setState({
               contactUser: DeleteUpdateButton,
               contact : DeleteUpdateButton.length === 0 ? "notfound" : "idle",
          });
     }

     handleSearch(query) {
          // untuk memperlih
          const filterData = this.state.contactUser.filter((dataValue) =>
               dataValue.title.toLowerCase().includes(query.toLowerCase())
          );
          this.setState({
               contactUser: filterData,
               contact: filterData.length === 0 ? "notfound" : "idle",
          });
     }
     //  tampilkan kembali data awal dari component dataGet()
     handleResetData() {
          const Contact = dataGet();
          this.setState({
               contactUser: Contact,
               contact: "idle",
          });
     }

     onHandlerInput({ title, body }) {
          const AddContact = {
               id: +new Date(),
               title: title,
               body: body,
               archived: false,
               createdAt: +new Date().getTime(),
          };
          this.setState(
               (prev) => ({
                    contactUser: [...prev.contactUser, AddContact],
               }),
               () => {
                    setTimeout(() => {
                         alert("data sudah di tambahkan ");
                    }, 0);
               }
          );

          console.log(this.state.contactUser);
     }
     render() {
          const { contact } = this.state;
          return (
               <div className="">
                    <div className="">
                         <InputSearch onSearch={this.handleSearch} />
                    </div>
                    <ContactInput addContacts={this.onHandlerInput} />
                    <h3 className="text-center text-xl mt-4">Catatan Aktif</h3>
                    {contact === "notfound" ? (
                         <p className="text-center mt-10">
                              Tidak ada catatan {" "}
                         </p>
                    ) : (
                         <ContactList
                              contacts={this.state.contactUser}
                              onDelete={this.onHandlerDeleteButton}
                         />
                    )}
                    <div className="flex justify-center mt-4">
                         <button onClick={() => this.handleResetData()}>
                              Refresh
                         </button>
                    </div>
               </div>
          );
     }
}

export default RootDataContactValue;
