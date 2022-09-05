import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./assets/main.css";
import hljs from "highlight.js"; //导入代码高亮文件
import "highlight.js/styles/monokai-sublime.css"; //导入代码高亮样式
// import javascript from 'highlight.js/lib/languages/javascript';
// import html from 'highlight.js/lib/languages/xml';
const app = createApp(App);
console.log(hljs.listLanguages())
// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('html', html);
// 自定义一个代码高亮指令
app.directive("highlight", function (el) {
	const blocks = el.querySelectorAll("code");
	blocks.forEach(block => {
		hljs.highlightBlock(block);
		// block.innerText = hljs.highlightAuto(block.innerHTML).value;
	});
});
app.use(router).use(Antd);
app.mount("#app");
