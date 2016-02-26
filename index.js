var settings = module.exports = {
    env: {
        name: 'local',
        mode: 'production',
        host: '127.0.0.1',
        port: 3030,
        bindIp: "0.0.0.0",

        NODE_ENV: 'production',
        PORT: 3030,
        BINDIP: "0.0.0.0"
    },

    secretKey: 'quick',

    app: {
        protocol: 'http',
        host: '127.0.0.1',
        port: 3030,
        domain: 'mt.www.wenode.org',
        domainPort: 80,
        context: '/'
    },

    api: {
        url: 'http://mt.www.wenode.org/api'
    },

    logging: {
        reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
        level: 'DEBUG'
    },

    redis:{
        mode:'single',
        host: '127.0.0.1',
        port: 6379,
        auth:'trillers'
    },

    mongo: {
        host: "114.215.91.211",
        port: 27017,
        db: "mt-ci",
        username: 'mt-ci',
        password: 'mt-ci'
    },

    session: {
        secretKey: 'quick',
        expires: 60 // minutes
    },

    wechat: {
        appKey: 'wx9d66ca536fd64868',
        appSecret: 'e228994a6908116bcbfaccdf5a0c518d',
        token: 'aLEgod2TLeLjG3qJ8bcS',
        encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
        siteId: 'gh_414a400e8dbc',
        siteName: '慧学习'
    },

    resources: {
        app: {
            name: "mt"
        }
    }
};
