const os = require('os');
const time = require('./timeFormat');
const colors = require('colors');

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
    `${'System'.green}: ${type}\n${'Release'.red}: ${release}\n${
      'CPU model'.magenta
    }: ${cpu}\n${'Uptime'.yellow}: ${uptime}\n${'Username'.cyan}: ${
      userInfo.username
    }\n${'Home dir'.bgMagenta}: ${userInfo.homedir}\n`
  );

  process.exit();
}

exports.osInfo = getOsInfo;
