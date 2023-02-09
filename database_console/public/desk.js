// dom ready
document.addEventListener("DOMContentLoaded", (event)=>{
    // Add knowledge base to help button
    extraHelBTN();
  });
  
  
  // KNOWLEDGE BASE
  let extraHelBTN = () => {
    // Add knowledge base to help button
   let helpbtn = $('#toolbar-help')[0]
   let shringDB = document.createElement('a');
   shringDB.id="shringdb";
   shringDB.className = "dropdown-item";
   shringDB.href="javascript:void(0)";
   shringDB.innerText = "Shrink Database";
   helpbtn.appendChild(shringDB);
   shringDB.onclick = ()=>{
    frappe.confirm('Are you sure you want to proceed?',
    () => {
        // action to perform if Yes is selected
        frappe.call({
            method: "database_console.utils.clear_emails_and_errors",
            type: "GET",
            callback: function(r) {
                frappe.msgprint(r.message)
            },
            freeze: true,
            freeze_message: "Shrinking Database",
            async: true
        });        
    }, () => {
        // action to perform if No is selected
    })
   }
  }
  