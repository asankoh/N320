<template>
    <button class="customBtn"><slot>Custom Button</slot></button>
</template>

<style>
.customBtn{
    background-color: lightgreen;
    color: #fff;
    border-radius: 8px;
    width: 75px;
    padding: 1em

}

.customBtn:hover{
    background-color: blue;
}
</style>