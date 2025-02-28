
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 1773, hash: '0c203d05c60aafb0fdbcabb9be720c81eccc82a697648388e7268205799dca63', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1988, hash: '74c0070490aba9d720b1414fe33472bfa08c0bd1918d1c85a686bd7273d77200', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ND2IF63B.css': {size: 173, hash: 'GAFZYYiIZys', text: () => import('./assets-chunks/styles-ND2IF63B_css.mjs').then(m => m.default)}
  },
};
