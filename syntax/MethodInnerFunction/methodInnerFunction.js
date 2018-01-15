var inner = {

    name : "inner",
    family : ["innerDad", "innerMom"],

    innerName : function(){
        return inner.name;
    },

    innerFamily : function () {
        return this.family;
    }

}