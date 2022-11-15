export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplicationMobile/Services/service1.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/MyApplicationMobile/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Books'
                },
                'OnSuccess': '/MyApplicationMobile/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplicationMobile/Actions/CloseModalPage_Cancel.action');
    }
}