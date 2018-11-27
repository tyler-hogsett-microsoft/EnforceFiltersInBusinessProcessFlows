function enforceCustomerFilterInBusinessProcessFlow() {
    var customerControl = Xrm.Page.getControl("header_process_customer");
    var contactControl = Xrm.Page.getControl("header_process_contact");
    if (customerControl !== null && contactControl !== null) {
        contactControl.addPreSearch(function () {
            var customerValue = customerControl.getAttribute().getValue();
            contactControl.addCustomFilter(
                "<filter>" +
                    (customerValue === null ?"" :
                        "<condition attribute=\"parentcustomerid\" operator=\"eq\" value=\"" + customerValue[0].id + "\" />") +
                "</filter>"
            );
        });
    }
}