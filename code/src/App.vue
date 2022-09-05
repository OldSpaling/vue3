<script setup>
	import { useRouter } from "vue-router";
	const router = useRouter();
	const routes = router.getRoutes().filter(o => o.path != "/"&&o.children?.length>0);
	const rooterMap = routes.map(o => {
		return {
			title: o.name,
			children: o.children?.map(c => {
				return {
					title: c.name,
					path: `${o.path}/${c.path}`,
				};
			}),
		};
	});

	const menuClick = function ({ item, key, keyPath }) {
		console.log(item);
		console.log(key);
		console.log(keyPath);
	};
	const test = function ({ title, path }) {
		console.log(arguments);
		router.push({
			name: title,
			path: path,
		});
	};
</script>
<template>
	<a-layout style="min-height: 100vh">
		<a-layout-header class="header"> header zone </a-layout-header>
		<a-layout-content
			style="flex: 1; display: flex; flex-direction: column"
		>
			<a-layout style="padding: 24px 0; background: #fff; flex: 1">
				<a-layout-sider width="200" style="background: #ccc">
					<a-menu
						mode="inline"
						style="height: 100%"
						@click="menuClick"
					>
						<a-sub-menu
							v-for="router in rooterMap"
							:key="router.title"
						>
							<template #title>
								<span>
									<user-outlined />
									{{ router.title }}
								</span>
							</template>
							<a-menu-item
								v-for="child in router.children"
								:key="child.title"
								:title="child.title"
								@click="test(child)"
								>{{ child.title }}</a-menu-item
							>
						</a-sub-menu>
					</a-menu>
				</a-layout-sider>
				<a-layout-content
					:style="{ padding: '0 24px', minHeight: '100%' }"
				>
					<RouterView />
				</a-layout-content>
			</a-layout>
		</a-layout-content>
		<a-layout-footer style="text-align: center">
			Ant Design ©2018 Created by Ant UED
		</a-layout-footer>
	</a-layout>
</template>

<style scope>
	/* a-layout {
		min-height: 100vh;
		
	}
	a-layout-content {
		flex: 1;
		overflow-y: auto;
	} */
	.header {
		color: #fff !important;
	}
	#components-layout-demo-top-side .logo {
		float: left;
		width: 120px;
		height: 31px;
		margin: 16px 24px 16px 0;
		background: rgba(255, 255, 255, 0.3);
	}

	.ant-row-rtl #components-layout-demo-top-side .logo {
		float: right;
		margin: 16px 0 16px 24px;
	}

	.site-layout-background {
		background: #fff;
	}
</style>
