const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

init()

function init() {
  let index = 0;

  addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      console.log(index)
      console.log(key)
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
