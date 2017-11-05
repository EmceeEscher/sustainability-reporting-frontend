import 'whatwg-fetch';

const serviceUrl = 'http://localhost:5000';

class AjaxService {
    getAllActions() {
        return fetch(serviceUrl +'/actions').then((response) => response.json())
    }

    getMetricForAction(actionId) {
        return fetch(serviceUrl + '/actions/' + actionId + '/metrics').then((response) => response.json())
    }
}

export default AjaxService;
