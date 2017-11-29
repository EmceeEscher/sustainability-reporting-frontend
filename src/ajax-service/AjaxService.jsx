import 'whatwg-fetch';

//TODO: need to update this to a real URL
const serviceUrl = 'http://localhost:5000';

class AjaxService {
    getAllActions() {
        return fetch(serviceUrl +'/actions').then((response) => response.json());
    }

    getImportantActionsForUser (userID) {
        return fetch(serviceUrl + '/users/' + userID + '/importantActions').then(response => response.json());
    }

    updateImportantActionForUser (userID, actionID, updateMethod) {
        return fetch(
            (serviceUrl + '/users/' + userID + '/importantActions/' + actionID),
            {method: updateMethod});
    }

    getMetricForAction(actionId) {
        return fetch(serviceUrl + '/actions/' + actionId + '/metrics').then((response) => response.json());
    }
}

export default AjaxService;
