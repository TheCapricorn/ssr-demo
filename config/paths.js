const fs = require('fs');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
module.exports= {
 appRoot:path.resolve("../"),
 appSrc: resolveApp('src'),
 appBuild: resolveApp('build'),
 appServerBuild:resolveApp('serverBuild'),
 appPublic: resolveApp('public'),
 appHtml:resolveApp('public/index.html'),
}