// Hot reloading
if (module.hot) {
  module.hot.accept();
}

const array = ["ggdd", "hdhdhd", "jdjdjd"];

const arrayClone = ["clone", ...array];

function fx() {
  arrayClone.forEach((item) => {
    console.log(item);
  });
}

fx();
