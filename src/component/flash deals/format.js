export default function format(seconds) {
  // seconds to array [hrs, min, sec]
  
  let sec = String(seconds % 60);
  let min = String(Math.floor(seconds / 60) % 60);
  let hr = String(Math.floor(seconds / 3600));

  sec.length === 1 ? sec = "0" + String(sec) : null
  min.length === 1 ? min = "0" + String(min) : null

  return [sec, min, hr];
}
