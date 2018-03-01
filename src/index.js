class Sorter {

  constructor() {
    this.comparator = (a, b) => a - b;
    this.arr = [];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let sortedArr = [];
    indices = indices.sort((a,b) => a-b);
    for (let i = 0; i < indices.length; i++ ) {
      sortedArr.push(this.arr[indices[i]]);
    }
    sortedArr.sort(this.comparator);
      for (let i = 0; i < indices.length; i++ ) {
          this.arr[indices[i]] = sortedArr.shift();
      }
  }

  setComparator(compareFunction) {
      this.comparator = compareFunction;
  }
}


module.exports = Sorter;
