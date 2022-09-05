<template>
	<div>
		<BaseItem title="插值变量" v-highlight>
			<div>{{ 文本插值 }}</div>
			<code>{{ 文本插值 }}</code>
		</BaseItem>
		<BaseItem title="v-html" v-highlight>
			<div v-html="vHtml"></div>
			<code class="language-html">{{ vHtml }}</code>
		</BaseItem>
		<BaseItem title="属性绑定全称" v-highlight>
			<div v-bind:id="attributeBind"></div>
			<pre>
				<code>{{'<div v-bind:id="attributeBind"></div>'}}</code>
			</pre>
		</BaseItem>
		<BaseItem title="属性绑定简写" v-highlight>
			<div :id="attributeBind"></div>
			<pre><code>{{'<div :id="attributeBind"></div>'}}</code></pre>
		</BaseItem>
		<BaseItem title="属性绑定简写-多属性绑定" v-highlight>
			<div v-bind="multiAttrBind">test</div>
			<pre><code>{{'<div v-bind="multiAttrBind">test</div>'}}</code></pre>
		</BaseItem>
		<BaseItem title="表达式支持" v-highlight>
			<div>{{ expressionVar1 + expressionVar2 + 1 }}</div>
			<pre><code v-pre>{{expressionVar1+expressionVar2+1}}</code></pre>
			<div class="red">v-pre:不编译节点内的模板</div>
		</BaseItem>
			<BaseItem title="属性绑定简写-函数" v-highlight>
			<div :id="getId(10)"></div>
			<pre><code>{{'<div :id="attributeBind"></div>'}}</code></pre>
		</BaseItem>
	</div>
</template>

<script setup>
	import BaseItem from "../components/BaseItem.vue";
	const 文本插值 = "{{文本插值}}";
	const vHtml = '<div v-html="test">test v-html</div>';
	const attributeBind = "15";
	const multiAttrBind = {
		id: "16",
		class: "red",
	};
	const expressionVar1 = 15;
	const expressionVar2 = 14;
	const getId=(id)=>{
		return id*2;
	}
</script>

<style scoped>
	.red {
		color: red;
	}
</style>
