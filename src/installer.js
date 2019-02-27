var electronInstaller = require('electron-winstaller')

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: './build/survey',
  outputDirectory: './build/installer',
  exe: 'survey.exe'
});

resultPromise.then(() => console.log("Done!"), (e) => console.log(`Error: ${e.message}`))
