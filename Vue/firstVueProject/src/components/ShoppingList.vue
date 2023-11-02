<template>
     <div>
        <header>
            <h2>Shopping List</h2>
        </header>
        <input v-model="inputValue" type="text" ref="inputValue"  @keyup.enter='addItem'>
       
        <button @click="addItem">Add Item</button>
        <ul>
            <li v-for="(item,i) in shoppingList" :key="i">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            inputValue:'',
            shoppingList: []
        }
    }, 
    methods:{
        addItem(){
            if(this.inputValue != ""){
                this.shoppingList.push(this.inputValue);
                this.inputValue = ""
                console.log(this.shoppingList)
                this.$refs.inputValue.focus()
            }else{            
                alert('No Item Attached')    
            }
        }
    }
}
</script>

<style scoped>
h2{
    color: red;
}
</style>