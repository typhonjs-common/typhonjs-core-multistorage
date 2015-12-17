console.log("CPP!!");

System.config(
{
   //meta:
   //{
   //   'src/MultiStorage.js':
   //   {
   //      deps: ['src/platforms/browser/MultiStorage.js'],
   //      'format': 'cjs'
   //   }
   //},
   map:
   {
      'pathPlatformDist': 'dist/platforms/browser',
      'pathPlatformSrc': 'src/platforms/browser'
   }
});