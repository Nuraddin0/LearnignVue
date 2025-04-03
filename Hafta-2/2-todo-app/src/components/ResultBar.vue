<template>
    <div>
        <small class="d-flex justify-content-end mt-2">There is {{ length }} tasks to do</small>

    </div>
</template>

<script>
export default{
    props: ["length"]
}
</script>