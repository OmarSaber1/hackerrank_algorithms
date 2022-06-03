class hashTable {
  constructor(initialCapacity, loadFactor = 0.75) {
    this.table = new Array(initialCapacity);
    this.size = 0;
    this.loadFactor = loadFactor;
  }

  _hash(key) {
    let hashNumber = "";

    for (var i = 0; i < key.length; i++) {
      hashNumber += key.charCodeAt(i);
    }

    return hashNumber % this.table.length;
  }

  set(key, value) {
    console.log(this.table.length, this.size);
    if (this.size / this.table.length >= this.loadFactor && this.size) {
      this.table.length = this.table.length * 2;
      const newTable = [...this.table];

      for (let key of newTable) {
        if (key !== undefined) {
          console.log(key);
          let hashNumber = this._hash(key[0]);
          return hashNumber % this.table.length;
        }
      }

      this.table = newTable;
    }
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  delete(key) {
    const index = this._hash(key);

    if (this.table[index]) {
      const removedElement = this.table[index];
      this.table[index] = [];
      this.size--;
      return removedElement;
    }
    return "NO SUCH INDEX!!";
  }
}

const newHash = new hashTable(6, 0.5);
console.log(newHash);
newHash.set("name", "omar");
newHash.set("a", "omar");
newHash.set("b", "omar");
newHash.set("c", "omar");
console.log(newHash);
newHash.set("d", "omar");
console.log(newHash);
newHash.set("e", "omar");
newHash.set("f", "omar");
console.log(newHash);
newHash.set("g", "omar");
newHash.set("h", "omar");
newHash.set("1", "omar");
newHash.set("s", "omar");
console.log(newHash.size);
newHash.delete("s");
console.log(newHash.size);
