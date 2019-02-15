/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'Documentacion FE',
  url: 'http://localhost/docusaurus/',
  baseUrl: '/docusaurus/',

  
  projectName: 'DocumentacionFE',
  organizationName: 'SincoSoft',

  headerLinks: [
    {doc: 'doc11', label: 'Documentación Cliente'},
    {doc: 'doc21', label: 'Documentación Desarrollo'},
  ],

  headerIcon: 'img/archive.png',
  footerIcon: 'img/archive.png',
  favicon: 'img/archive.png',

  colors: {
    primaryColor: '#140E39',
    secondaryColor: '#FF0000',
  },

  copyright: `Copyright © ${new Date().getFullYear()} SincoSoft`,

  highlight: {
    theme: 'default',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',
  
  cleanUrl: true,

  ogImage: 'img/logo.png',
  twitterImage: 'img/logo.png',
  docsSideNavCollapsible: true,


  scrollToTop: true,
  scrollToTopOptions: {
    backgroundColor: '#140E39',
  },

};

module.exports = siteConfig;
