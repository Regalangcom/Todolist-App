import React from "react";
import ContactBodyName from "./ReactContactBodyName";

const ContactList = ({ contacts, onDelete }) => {
     return (
          <div className="flex flex-wrap gap-4 justify-center ">
               {contacts.map((data) => (
                    <div
                         key={data.id}
                         className="border rounded w-full border-2 p-4  md:w-[400px] lg:w-[400px] xl:w-[500px]   "
                    >
                         <ContactBodyName
                              id={data.id}
                              title={data.title}
                              body={data.body}
                              archived={data.archived}
                              createdAt={data.createdAt}
                              onDelete={onDelete}
                         />
                    </div>
               ))}
          </div>
     );
};

export default ContactList;
