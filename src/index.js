import Vue from 'vue';

let vueInstance = new Vue({
    el: '#app',
    data: {
        firstMessage: "Hello fellow human!",
        secondMessage: "Welcome to my shopping list!",
        items: [],
        itemToAdd: '',
        maxItemId: 0
    },
    created: function() {
        console.log('Vue instance created');
    },
    mounted: function() {
        console.log('Vue instance mounted');
    },
    methods: {
        addItem: function() {
            console.log("You clicked on the 'Add' button.");

            this.maxItemId++;

            console.log(this.maxItemId);
            
            //this.items.push({id : this.maxItemId, label : this.itemToAdd});
            this.items.push({id : this.itemToAdd, label : this.itemToAdd});

            this.itemToAdd = '';

            this.$refs.input_item.focus();
        },
        deleteItem: function(id) {
            console.log("You clicked on the 'Delete' button.");

            this.maxItemId -= 1;

            console.log(this.maxItemId);

            console.log(`id à supprimer: ${id}`);
            
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id == id) {
                    this.items.splice(i,1);
                }
            }
        }
    }
});