importScripts('js/sw-utils.js')

const Static_cache='static-v1'
const dynamic_cache = 'dynamic-v1'
const inmutable_cache= 'inmutable-v1'

const app_shell = [
    '/',
    'index.html',
    'css/style.css',
    'img/favicon.icon',
    'img/avatars/Hulk.jpg',
    'img/avatars/ironman.jpg',
    'img/avatars/spiderman.jpg',
    'img/avatars/thor.jpg',
    'img/avatars/wolvering.jpg',
    'js/app.js'
]

const app_shell_Inmutable = [
'https://fonts.googleapis.com/css?family=Quicksand:300,400',
'https://fonts.googleapis.com/css?family=Lato:400,300',
'css/animate.css',
'js/libs/jquery.js'

]

self.addEventListener('install', e=> {
    const cacheStatic = caches.open( static_cache). then(cache =>
        cache.addAll ( APP_SHELL)
    )

    const cacheInmutable = caches.open( inmutable_cache). then(cache =>
        cache.addAll ( APP_SHELL_INMUTABLE)
    )

    e.waitUntil( Promise.all([cacheStatic,cacheInmutable]))
})

