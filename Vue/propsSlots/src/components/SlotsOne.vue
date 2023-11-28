<template>
    <section>
        <h1>Slot One Lesson</h1>
        <p>Slot One Component Text.</p>
        <slot>Slot text from Slot One</slot>
        <custom-button>Click Me!</custom-button>
        <custom-button>Enter Drawing</custom-button>
        <slot name="greeting">No greeting provided.</slot>
        <slot name="person">No person provided.</slot>
        <custom-button></custom-button>
    </section>
</template>