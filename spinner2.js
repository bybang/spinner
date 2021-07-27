//process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinPattern = ["|", "/", "-", "\\", "-", "/", "|"]

const spinner2 = spinPattern => {
  spinPattern.forEach((pattern, index) => {
    setTimeout(() => {
      process.stdout.write(`\r${pattern}`)
    }, 200 * index)
  })
};

spinner2(spinPattern);


// const listFridgeContent = fridge => {
  //  fridge.forEach((ingredient, index) => {
  //    setTimeout(() => {
  //      const sentence = `There is some ${ingredient}`
  //      console.log(sentence)
  //    }, 1000 * index)
  //  })


//setTimeout(() => {
//  process.stdout.write('\r|   ');
//}, 100);
//
//setTimeout(() => {
//  process.stdout.write('\r/   ');
//}, 300);
//
//setTimeout(() => {
//  process.stdout.write('\r-   ');
//}, 500);
//
//setTimeout(() => {
//  // Need to escape the backslash since it's a special character.
//  process.stdout.write('\r\\   '); 
//}, 700);
//
//setTimeout(() => {
//  process.stdout.write('\r-   ');
//}, 900);
//
//setTimeout(() => {
//  process.stdout.write('\r/   ');
//}, 1100);
//
//setTimeout(() => {
//  process.stdout.write('\r|   ');
//}, 1300);