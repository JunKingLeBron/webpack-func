<template>
    <div class="home">
        {{name}}
    </div>
    <div>
        <el-button type="primary" text='primary'>I am ElButton</el-button>

    </div>
    
</template>

<script>
    import { ElButton } from 'element-plus'
    export default {
        components: { ElButton },
        setup() {
            const name = 'Home'


            return {
                name
            }
        }
    }

    
    //const home = 'Home'
    
</script>

<style scoped>
    .home {
        width: 100px;
        height: 100px;
        background-color: pink;
        position: relative;
        top: 50%;
        left: 50%;
        margin: -50px 0 0 -50px;
    }
</style>