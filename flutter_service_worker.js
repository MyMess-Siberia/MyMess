'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1b08bf198ba6d79af9a4811e8c1d9090",
"assets/AssetManifest.bin.json": "407a2fc2eca464e20d791e2a7e2b6505",
"assets/AssetManifest.json": "243da652e126a077262850cdaa0c07b6",
"assets/assets/app_icon.png": "178957a02b7d289de71ce2344c2e8498",
"assets/assets/authBG.png": "72193f1573610a2e7064e6996bf276a2",
"assets/assets/enjoy.png": "14d200ed70e4dd75337d734671461e4a",
"assets/assets/GenerateBill.png": "5533a7b96baf26764cfdd91d42a7300a",
"assets/assets/icon.png": "6577fa930123207452553ac0510c0457",
"assets/assets/logo.png": "173035b56b6d5735a677cbcb29af129d",
"assets/assets/logoRed.png": "a27e9448eddf0722d2f5a8920765c3cb",
"assets/assets/mainLogo.png": "1c51b894684f5f5083acee5a800f548b",
"assets/assets/MessCut.png": "4b626a25b06540dcb55a46e7ff2e880e",
"assets/assets/MessCutList.png": "2cfa97fe65bccf97e4ff6aed5aeedd3e",
"assets/assets/MessLeave.png": "c5a4235a01ac59cbc905ef58fc2e349f",
"assets/assets/mymess_Default.png": "965431ccf2b2ef5cb146f43b053c5d7f",
"assets/assets/PayBill.png": "b6d8f8ecaf5b54862460939a6894ca45",
"assets/assets/Profile.png": "a307284af1254c3c5f24595e3be946a7",
"assets/assets/QRCode.png": "0bfeab08d6c967acc5a854d2bb6730b3",
"assets/assets/UsersList.png": "faad7a719b458d331d22dd7e3d5f040e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "527f1d04ed8782dcee6e20aed10fbe9a",
"assets/NOTICES": "c90c37f0c1c955cf8fb4b91c3cfe80d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "d74bca97e99d2faf0a2cc68489a466ee",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "f127f7ea5c176a69eaecddd6b4ed7c55",
"icons/Icon-192.png": "20962a3c51d163ec9b1a909bb6193813",
"icons/Icon-512.png": "455eda6bbc1921de326904d5cbbbc13b",
"icons/Icon-maskable-192.png": "20962a3c51d163ec9b1a909bb6193813",
"icons/Icon-maskable-512.png": "455eda6bbc1921de326904d5cbbbc13b",
"index.html": "46fedfb6f3be72ec228682d24dc59eda",
"/": "46fedfb6f3be72ec228682d24dc59eda",
"main.dart.js": "b01f79044ff96f3d33e95cb2b6a29811",
"manifest.json": "fe83e92d36717db659c078461af0575b",
"splash/img/dark-1x.png": "ea08211098b97c70f7bba5eaade8d7b9",
"splash/img/dark-2x.png": "d0c0a9bd51c8b569e3d1ff87663beb33",
"splash/img/dark-3x.png": "201f349d29c5765449ad79b3f2d66c9a",
"splash/img/dark-4x.png": "6df0846414d692732387b5c8e6bfa6ff",
"splash/img/light-1x.png": "ea08211098b97c70f7bba5eaade8d7b9",
"splash/img/light-2x.png": "d0c0a9bd51c8b569e3d1ff87663beb33",
"splash/img/light-3x.png": "201f349d29c5765449ad79b3f2d66c9a",
"splash/img/light-4x.png": "6df0846414d692732387b5c8e6bfa6ff",
"version.json": "b48d543aab095087981824c8ab978170"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
