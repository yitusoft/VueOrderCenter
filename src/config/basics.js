let config = {
    server: 'http://192.168.7.76:8001', //'http://192.168.7.76:8001',http://localhost:1882
    InvalidTime:3,
    wherePage: {
        page: '',
        searchWhere: null
    },
    uploadImage: '.jpeg,.gif,.png,.bmp',
    uploadFile: '',
    uploadAll: ''
}

if (process.env.NODE_ENV === 'production') {
    config.server = 'http://192.168.7.76:8001'
}
export default config;