/**
 * 没有使用该文件
 */
const fileSave =require('file-save') 
const {resolve}=require('path')
const root = process.cwd()
module.exports=(name)=>{
const path=resolve(root,`${name}/package.json`)
const content=`
{
    "name": "${name}",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "@babel/core": "^7.16.0",
      "@pmmmwh/react-refresh-webpack-plugin": "^0.5.3",
      "@svgr/webpack": "^5.5.0",
      "@testing-library/jest-dom": "^5.16.5",
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^13.5.0",
      "babel-jest": "^27.4.2",
      "babel-loader": "^8.2.3",
      "babel-plugin-named-asset-import": "^0.3.8",
      "babel-preset-react-app": "^10.0.1",
      "bfj": "^7.0.2",
      "browserslist": "^4.18.1",
      "camelcase": "^6.2.1",
      "case-sensitive-paths-webpack-plugin": "^2.4.0",
      "css-loader": "^6.5.1",
      "css-minimizer-webpack-plugin": "^3.2.0",
      "dotenv": "^10.0.0",
      "dotenv-expand": "^5.1.0",
      "eslint": "^8.3.0",
      "eslint-config-react-app": "^7.0.1",
      "eslint-webpack-plugin": "^3.1.1",
      "file-loader": "^6.2.0",
      "fs-extra": "^10.0.0",
      "html-webpack-plugin": "^5.5.0",
      "identity-obj-proxy": "^3.0.0",
      "mini-css-extract-plugin": "^2.4.5",
      "postcss": "^8.4.4",
      "postcss-flexbugs-fixes": "^5.0.2",
      "postcss-loader": "^6.2.1",
      "postcss-normalize": "^10.0.1",
      "postcss-preset-env": "^7.0.1",
      "prompts": "^2.4.2",
      "react": "^18.2.0",
      "react-app-polyfill": "^3.0.0",
      "react-dev-utils": "^12.0.1",
      "react-dom": "^18.2.0",
      "react-refresh": "^0.11.0",
      "resolve": "^1.20.0",
      "resolve-url-loader": "^4.0.0",
      "sass-loader": "^12.3.0",
      "semver": "^7.3.5",
      "source-map-loader": "^3.0.0",
      "style-loader": "^3.3.1",
      "tailwindcss": "^3.0.2",
      "terser-webpack-plugin": "^5.2.5",
      "web-vitals": "^2.1.4",
      "webpack": "^5.64.4",
      "webpack-dev-server": "^4.6.0",
      "webpack-manifest-plugin": "^4.0.2",
      "workbox-webpack-plugin": "^6.4.1"
    },
    "scripts": {
      "start": "node scripts/start.js",
      "build": "node scripts/build.js",
      "test": "node scripts/test.js"
    },
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    },
    "babel": {
      "presets": [
        "react-app"
      ]
    },
    "devDependencies": {
      "commitlint": "^17.1.2",
      "cz-customizable": "^7.0.0",
      "prettier": "^2.7.1"
    },
    "config": {
      "commitizen": {
        "path": "node_modules/cz-customizable"
      },
      "cz-customizable": {
        "config": "./cz-config.ts"
      }
    }
  }
  
`
fileSave(path).write(content, 'utf8').end('\n')
}