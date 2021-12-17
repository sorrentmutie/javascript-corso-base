var righello = {
    mm: 150
};

Object.defineProperty(righello, 'inch', {
    get: function(){
        return this.mm / 25.4;
    },
    set: function(value) {
        this.mm = value * 25.4;
    }
});

righello.inch = 12;
console.log(righello.mm);