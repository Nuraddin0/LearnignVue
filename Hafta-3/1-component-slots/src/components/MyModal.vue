<template>
    <div class="container">
        <div class="header">
            <slot name="title"/>
        </div>
        <hr>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <hr>
        <div class="footer text-right">
            <button class="red">Kapat</button>
            <button class="green" @click="onSave">Kaydet</button>
        </div>

        <slot></slot>
    </div>
</template>

<script>
export default{
    props: ['onSave']
}</script>