<template>
	<div>
		<BaseItem title="v-bind" v-highlight>
			<div v-bind:innerText="msg"></div>
			<!--简写-->
			<div :innerText="msg"></div>
		</BaseItem>
		<BaseItem title="v-on" v-highlight>
			<button v-on:click="vOnClick">全称</button>
			<!--简写-->
			<button @click="vOnClick">简写</button>
		</BaseItem>
        <BaseItem title="v-bind dynamic and v-on dynamic" v-highlight>
			<input type="button" v-bind:[dynamicBind.field]="dynamicBind.msg" v-on:[dynamicBind.event]="dynamicBind.eventMethod"/>
			<!--简写-->
			<input type="button" :[dynamicBind.field]="dynamicBind.msg" @[dynamicBind.event]="dynamicBind.eventMethod('简写')"/>
		</BaseItem>
	</div>
</template>

<script setup>
	import BaseItem from "../components/BaseItem.vue";
	const msg = "v-bind test msg";
	const vOnClick = () => {
		alert("v-on:click test");
	};
    const dynamicBind={
        field:"value",
        msg:"dynamic v-bind",
        event:"click",
        eventMethod:(msg='')=>{
            alert(`dynamic click ${msg}`)
        }
    }
</script>

<style scoped>
	.red {
		color: red;
	}
</style>
