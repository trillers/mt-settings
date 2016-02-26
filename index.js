var settings = module.exports = {
    env: {
        name: 'local',
        mode: 'production',
        host: '127.0.0.1',
        port: 3020,
        bindIp: "0.0.0.0",

        NODE_ENV: 'production',
        PORT: 3020,
        BINDIP: "0.0.0.0"
    },

    secretKey: 'quick',

    app: {
        protocol: 'http',
        host: '127.0.0.1',
        port: 3020,
        domain: 'local.www.wenode.org',
        domainPort: 80,
        context: '/'
    },

    api: {
        url: 'http://local.www.wenode.org/api'
    },

    logging: {
        reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
        level: 'DEBUG'
    },

    redis:{
        mode:'single',
        host: '127.0.0.1',
        port: 6379,
        auth:''
    },

    mongo: {
        host: "127.0.0.1",
        port: 27017,
        db: "mt",
        username: '',
        password: ''
    },

    session: {
        secretKey: 'quick',
        expires: 60 // minutes
    },

    wechat: {
        appKey: 'wxe6127a840e1c8c9f',
        appSecret: 'd4624c36b6795d1d99dcf0547af5443d',
        token: 'trillers',
        encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
        siteId: 'gh_74570a11f763',
        siteName: '独自等待测试号'
    },

    resources: {
        app: {
            name: "mt"
        }
    }
};
