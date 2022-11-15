export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplicationMobile/Services/service1.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/MyApplicationMobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Books'
                },
                'OnSuccess': '/MyApplicationMobile/Actions/Books/NavToBooks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplicationMobile/Actions/Books/NavToBooks_Edit.action');
    }
}