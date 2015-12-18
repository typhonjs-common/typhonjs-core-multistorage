/**
 * 000Init -- Bootstraps the testing process removing any previous coverage data as necessary.
 */

var fs = require('fs-extra');

if (fs.existsSync('./coverage'))
{
   fs.removeSync('./coverage');
}