import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "@/views/WelcomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "welcome",
			component: WelcomeView,
		},
		{
			path: "/basic",
			name: "基础知识",
			children: [
				{
					path: "data-bind",
					name: "数据绑定",
					// route level code-splitting
					// this generates a separate chunk (About.[hash].js) for this route
					// which is lazy-loaded when the route is visited.
					component: () => import("../views/DataBindView.vue"),
				},
				{
					path: "directive",
					name: "指令",
					component: () => import("../views/DirectiveView.vue"),
				},
				{
					path: "reactive",
					name: "响应式",
					component: () => import("../views/ReactiveView.vue"),
				},
			],
		},
	],
});

export default router;
// const routeMap=router.getRoutes().map(o=>{
// 	return {
// 		name:o.name,
// 		path:o.name
// 	}
// })
