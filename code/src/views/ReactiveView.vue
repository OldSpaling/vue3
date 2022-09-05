<template>
	<h2>响应式</h2>
	<div>
		<BaseItem title="reactive" v-highlight>
			<button @click="click">{{ state.count }}</button>
			<div id="test">{{ state.count }}</div>
			<div>多层次也能更新</div>
			<div>单层代理：{{ state.student.name }}</div>
			<div>多层代理：{{ reProxy.student.name }}</div>
			<div>不是响应式再次修改值不会修改：{{ test }}</div>
			<div>新加属性：{{ state.newProp }}</div>
		</BaseItem>
		<BaseItem title="ref" v-highlight>
			<button @click="refClick">{{ refCount }}</button>
			<button @click="refToggleClick">
				{{ refCount2.count || refCount2 }}
			</button>
		</BaseItem>
		<BaseItem title="ref in reactive" v-highlight>
			{{ refReactive.ref3 }}
		</BaseItem>
	</div>
</template>

<script setup>
	import BaseItem from "../components/BaseItem.vue";
	import { nextTick, reactive, ref } from "vue";
	const state = reactive({ count: 0, student: { name: "张三" } });
	state.newProp = "王五";
	const reProxy = reactive(state);
	let test = state.student.name;
	setTimeout(() => {
		test = "李四";
	}, 1000);
	const click = () => {
		state.count++;
		test = "李四";
		state.newProp = `${state.newProp}${state.count}`;
		state.student.name = `${state.student.name}${state.count}`;
		console.log(`更新前：${document.getElementById("test").innerText}`);
		nextTick(() => {
			console.log(`更新后：${document.getElementById("test").innerText}`);
		});
	};
	const refCount = ref(0);
	const refClick = () => {
		refCount.value++;
	};
	const refCount2 = ref(0);
	const refToggleClick = () => {
		refCount2.value = { count: 1 };
	};
	//ref在响应式对象解包：reactive深层响应式才能解包，浅层不能解包
    const ref3=ref(3)
	const refReactive = reactive({ ref3 });
	//数组或者集合类型的ref解包
	const books = reactive([ref("Vue 3 Guide")]);
	// 这里需要 .value
	console.log(books[0].value);
	const map = reactive(new Map([["count", ref(0)]]));
	// 这里需要 .value
	console.log(map.get("count").value);
</script>

<style scoped>
	.red {
		color: red;
	}
</style>
