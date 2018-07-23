const msToMm = {};

function convertMsToMm(ms) {
  let min = Math.floor(ms / 60000);
  let sec = ((ms % 60000) / 1000).toFixed(0);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

msToMm.install = function(Vue) {
  Vue.filter("ms-to-mm", val => {
    return convertMsToMm(val);
  });
};

export default msToMm;
