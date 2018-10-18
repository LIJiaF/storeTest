<template>
	<ul class="footer">
		<router-link tag="li" to="/index/home">首页</router-link>
		<router-link tag="li" to="/index/list">列表</router-link>
		<router-link tag="li" to="/index/person">个人</router-link>
	</ul>
</template>

<style type="text/css">
	.footer{
		position: fixed;
		bottom:0;
		display: flex;
		width:100%;
	}
	.footer li{
		flex-grow: 1;
		text-align: center;
	}
</style>