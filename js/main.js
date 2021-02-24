const QueryGet = function () {
    this.data = window
        .location
        .search
        .replace('?', '')
        .split('&')
        .reduce(
            function (p, e) {
                var a = e.split('=');
                p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        );
};
const userDataJson = 'https://api.npoint.io/9736691522f21f75e1c5';
