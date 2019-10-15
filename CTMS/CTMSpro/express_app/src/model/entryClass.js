class Entry {
    constructor(obj) {
        this.entryId = "";
        this.memberId = "";
        this.type = obj.type;
        this.category = obj.financeCategory;
        this.date = obj.date;
        this.amount = obj.amount;
        this.mode = obj.mode;
    }
}

module.exports = Entry;