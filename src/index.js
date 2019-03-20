/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let loveTriangle = 0;

  for(let i = 0; i < preferences.length; i++){
      let spichonees1 = preferences[i];
      let spichonees2 = preferences[spichonees1 - 1];
      let spichonees3 = preferences[spichonees2 - 1];

      switch (spichonees3){
        case i + 1: loveTriangle ++;
      }
    }
  return Math.floor(loveTriangle/3);
  };