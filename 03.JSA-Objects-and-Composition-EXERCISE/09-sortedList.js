function createSortedList() {
    return {
        size: 0,
        _sortList: [],
        _sortArr: (a, b) => a - b,
        add: function (el) {
            if (typeof (el) !== "number") {
                return;
            }
            this._sortList.push(el);
            this.size = this._sortList.length;
            this._sortList.sort(this._sortArr);
        },
        remove: function (index) {
            if (index < 0 || index >= this.size) {
                return;
            }
            this._sortList.splice(index, 1);
            this._sortList.sort(this._sortArr);
            this.size = this._sortList.length;
        },
        get: function (index) {
            if (index < 0 || index >= this.size) {
                return;
            }
            return this._sortList[index];

        }
        
    }
}


let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
