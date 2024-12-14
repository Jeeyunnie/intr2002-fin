
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/demo_app"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/discount"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/search"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/product"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/community"
  },
  {
    "renderMode": 2,
    "route": "/demo_app/my-page"
  }
],
  assets: new Map([
['index.csr.html', {size: 18181, hash: '5e28a65e6774750885d54998be1f4ecb23b56ed4aa832c78be904e8540f28f6f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7979, hash: 'b49d6a87f639daa65cc340656b8eff24596fca43cd1b1a5ef0c8644451d373f7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['discount/index.html', {size: 24700, hash: '0ee74aa9a11227ef9ec423dd22d5b5ca05f2659aad207b9401d1a498ae6318d7', text: () => import('./assets-chunks/discount_index_html.mjs').then(m => m.default)}], 
['search/index.html', {size: 27767, hash: '9a799cf229bf792b8cccc1cf4154d373a226e0350f5509bb058798d2018be757', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)}], 
['product/index.html', {size: 23044, hash: 'a6af4bf8ad7fe8b52b41058015c9611b55e88459fe44db75fb9bab0aa52fbbb1', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)}], 
['community/index.html', {size: 29840, hash: 'b5abb6d03dbfa8f5ae3b937b9ff8dcd190af259d678055313af527208fb37b25', text: () => import('./assets-chunks/community_index_html.mjs').then(m => m.default)}], 
['my-page/index.html', {size: 28563, hash: 'f04f3ac504fa1745ae0d33629cd36595231de76d900161f53269a7f1007f38c7', text: () => import('./assets-chunks/my-page_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 21536, hash: '88a60db6eb7ffc4c05ee8150a8edbf0c21feabbe091221ae9665bc2ee1b0afaf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-UQQ7IBC5.css', {size: 119228, hash: 'LEMThOqp0Zs', text: () => import('./assets-chunks/styles-UQQ7IBC5_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
