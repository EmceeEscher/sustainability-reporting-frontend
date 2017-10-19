import 'whatwg-fetch';

const serviceUrl = 'http://localhost:5000';

class AjaxService {
    getAllActions() {
        fetch(serviceUrl + '/actions').then(function(response) {
            console.log(response);
        }, function(error) {
            console.log(error);
        });
    }
}

export default AjaxService;