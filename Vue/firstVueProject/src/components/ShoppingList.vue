<template>
     <div>
        <header>
            <h2>Shopping List</h2>
        </header>
        <input v-model="inputValue" type="text" ref="inputValue"  @keyup.enter='addItem'>
       
        <button @click="addItem">Add Item</button>
        <ul>
            <li v-for="(item,i) in shoppingList" :key="i">{{ item }}
                <button @click="deleteItem(i)">Delete</button>
                <button @click="editItem(i)">Edit</button>

            </li>
        </ul>
        <button @click="deleteItem(-1)">Delete All</button>
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
        },
        deleteItem(i){
            //Inline If Statement
            // the statement after the colon means if its false
            this.shoppingList=(i+1) ? this.shoppingList.filter((item, x) => x!==i) : [];
        }, 
        editItem(i){
            this.shoppingList.forEach((item,k) => {
                if(i===k){
                    let newValue = prompt( `Current Value ${item}`);
                    // it takes the k of whatever id, edits it one to the newValue inputted.
                    this.shoppingList.splice(k,1,newValue)
                }  
            })
        }
    }
}
</script>

<style scoped>
h2{
    color: red;
}

button{
    height: 40px;
    width: 80px;
    margin: 5px;
    background-color: lightgreen;
    border-radius: 12px;
    cursor: pointer;
}

li button[0]{
    background-color: red;
}
</style>