function timeFormat(input) {
  let timeFormatted = `${input}sec`;
  input >= 60
    ? (timeFormatted = `${Math.floor(input / 60)}min, ${input % 60}sec`)
    : true;
  input >= 3600
    ? (timeFormatted = `${Math.floor(input / 60 / 60)}h, ${Math.floor(
        (input / 60) % 60
      )}min, ${input % 60}sec`)
    : true;
  return timeFormatted;
}

exports.format = timeFormat;
