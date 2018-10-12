const fs = require('fs');
const path = require('path');
const jscodeshift = require('jscodeshift');
const stripBom = require('strip-bom');

// function getEntriesFromConfig1() {
//   const routerMap = {
//     callee: {
//       type: 'MemberExpression',
//       object: { name: 'Router' },
//       property: { name: 'map' },
//     },
//   };
  
//   const routeDef = {
//     callee: {
//       type: 'MemberExpression',
//       object: { type: 'ThisExpression' },
//       property: { name: 'route' },
//     },
//   };

//   const isRouteMap = (arg = null) => (arg.type === "FunctionExpression");

//   const getRouteDefList = (fn) => jscodeshift(fn.body).find(jscodeshift.CallExpression, routeDef); 

//   const getRouteNames = (ast) => {
//     let args = ast.getValueProperty('arguments');
//     let name = args[0].value;
//     let routeList = [name];

//     let children = null;

//     if (args[1] && isRouteMap(args[1])) {
//       children = getRouteDefList(args[1]);
//     } else if (args[2] && isRouteMap(args[2])) {
//       children = getRouteDefList(args[2]);
//     }

//     if (children) {
//       let childRouteList = [];

//       children.map(child => {
//         let routeNames = getRouteNames(child);
//         childRouteList.push(...routeNames);
//       });

//       return routeList.concat(childRouteList.map(route => `${name}/${route}`));
//     } else {
//       return routeList;
//     }
//   };

//   const filePath = path.join(__dirname + 'build/src/zb/router.js');
//   const content = stripBom(fs.readFileSync(filePath, { encoding: 'utf8' }));
//   const ast = jscodeshift(content);

//   let routeMaps = ast.find(jscodeshift.CallExpression, routerMap);
//   let routeDefs = [];
//   let routeList = [];

//   routeMaps.forEach(map => {
//     let args = map.getValueProperty('arguments');
//     let routeDefList = getRouteDefList(args[0]);
//     routeDefList.forEach(r => routeDefs.push(r));
//   });

//   routeDefs.forEach(def => {
//     routeList.push(getRouteNames(def));
//   })

//   return routeList;
// }

function getEntriesFromConfig() {
  return ['./src/zb/app.js'];
}

function getExternalsFromConfig() {
  return ['ember-load-initializers', 'ember-accordion', 'zf-common', 'zb-common', 'zf-ember-keymaster', 'ember-auto-complete', 'ember-bundle-i18n', 'ember-cli-clipboard', 'ember-inline-edit', 'ember-draggable', 'settings-common', 'ember-wormhole', 'ember-html-editor', 'zf-item-autocomplete', 'ember-keymaster', 'ember-engines', 'ember-multi-autocomplete', 'multiselect-checkbox', 'ember-notification', 'zf-ember-html-editor', 'ember-popover', 'ember-radiobutton', 'ember-scroll-to', 'ember-textarea-autoexpand', 'ember-type-ahead', 'zf-ember-notification', 'ember-zohoone-launcher', 'require', 'ember-concurrency', 'ember-svg-jar', 'ember-resolver', 'ember-prefetch', 'ember-model-library', 'bundle-integrity-validation', 'zf-autocomplete-util', 'ztax-engine', 'ember-asset-loader', 'ember-wms', 'ember-salesiq', 'ember-themes', 'zf-ember-wms'];
}

module.exports = {
  getEntriesFromConfig,
  getExternalsFromConfig
}