const os = require('os');
const time = require('./timeFormat');

function getOsInfo() {
  let type = os.type();
  const release = os.release();
  const cpu = os.cpus()[0].model;
  const uptime = time.format(os.uptime().toFixed(0));
  const userInfo = os.userInfo();
  type === 'Darwin'
    ? (type = 'OSX')
    : type === 'Windows_NT'
    ? (type = 'Windows')
    : true;
  process.stdout.write(
    `System: ${type}\nRelease: ${release}\nCPU model: ${cpu}\nUptime: ${uptime}\nUsername: ${
      userInfo.username
    }\nHome dir: ${userInfo.homedir}\n`
  );

  process.exit();
}

exports.osInfo = getOsInfo;
