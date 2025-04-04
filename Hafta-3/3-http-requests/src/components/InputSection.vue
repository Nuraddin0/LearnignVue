<template>
    <div>
      <input type="text" placeholder="Ne alacaksin?" @keydown.enter="onSave">
    </div>
</template>

<script>
export default{
    props:['onSave']
}
</script>