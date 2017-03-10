class HttpService {
    static request(url, options = {}) {
        let method = options.method || 'GET';
        let xhr = new XMLHttpRequest();

        xhr.open(method, url, true);

        xhr.onload = () => {
            let data = JSON.parse(xhr.responseText);

            options.success(data);
        };

        xhr.onerror = () => {
            options.error(
                new Error(xhr.status + ' ' + xhr.statusText)
            );
        };

        xhr.send();
    }
}