import React from "react";
import DeleteButton from "./ReactButtonHandle";
import { showFormattedDates } from "./utils/data";

function ContactBodyName({ title, body,  createdAt, id, onDelete }) {
     return (
          <div className="flex flex-col mt-1 items-center ">
               <div className="mx-w-lg flex-grow p-8 ">
                    <details className="open:bg-white dark:open:bg-gray-400 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
                         <summary className="text-sm leading-6 text-slate-900    font-semibold select-none">
                              {title}
                         </summary>
                         <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 ">
                              <p className="text-gray-900  ">{body}</p>
                         </div>
                         <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 ">
                              <p className="text-gray-900  ">
                                   {showFormattedDates(createdAt)}
                              </p>
                         </div>
                         <DeleteButton
                              id={id}
                              onDelete={onDelete}
                              className="self-start "
                         />
                    </details>
               </div>
          </div>
     );
}

export default ContactBodyName;
