<template>
  	<div class="user">
    	<img src="../assets/img/biglog.jpg" alt="log">
    	<div class="user-login">
			<p>
				上次登陆方式为： <span>QQ登陆</span>
			</p>
			<div class="user-lsit">
				<h4>选择登陆方式</h4>
				<ul class="">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<div class="user-close">
					关闭
				</div>
			</div>
    	</div>
    </div>
</template>

<script>
  export default{

  }
</script>

<style>
	.user {
		background: #e0332e;
		height: 100%;	
	}
	.user img {
		width: 6.48rem;
		height: 5.25rem;
		margin: 0 auto;
		display: block;
	}
	.user .user-login {
		margin-top: 3rem;
		color: #fff;
		font-size: .24rem;
		text-align: center;
	}
	.user h4 {
		text-align: center;
		font-size: .22rem;
		font-weight: normal;
	}
	.user-lsit h4:before {
		content:'';
		display: inline-block;
		width: 1.45rem;
		height: 1px;
		vertical-align: middle;
		border-top: 1px solid #fff;
		margin-right: .2rem;
	}
	.user-lsit {
		width: 5.63rem;
		height: .96rem;
		margin: 0 auto;
	}
	.user-lsit {
		margin-top: .85rem;
	}
	.user-lsit ul:after {
		content: "";
		display: block;
		clear: both;
	}
	.user-lsit li {
		width: .96rem;
		height: .96rem;
		float: left;
		margin-left: .35rem;
	}
	.user-lsit h4:after {
		content:'';
		display: inline-block;
		width: 1.45rem;
		height: 1px;
		vertical-align: middle;
		border-top: 1px solid #fff;
		margin-left: .2rem;
	}
	.user-lsit ul {
		margin-top: .2rem;
	}
	.user-lsit li:nth-child(1) {
		background: url(../assets/img/user-qq.jpg) no-repeat;
		background-size: 100%;
	}
	.user-lsit li:nth-child(2) {
		background: url(../assets/img/user-weixin.jpg) no-repeat;
		background-size: 100%;
	}
	.user-lsit li:nth-child(3) {
		background: url(../assets/img/user-sina.jpg) no-repeat;
		background-size: 100%;
	}
	.user-lsit li:nth-child(4) {
		background: url(../assets/img/user-other.jpg) no-repeat;
		background-size: 100%;
	}
	.user-close {
		margin-top: 1.65rem;
		font-size: .24rem;
		margin-top: 1.65rem;
	}
	.user-close:after {
		content: "";
		display: inline-block;
		border-top: 1px solid #fff;
		border-right: 1px solid #fff;
		width: .1rem;
		height: .1rem;
		line-height: .1rem;
		transform: rotate(45deg);
		vertical-align: middle;
		margin-top: -.05rem;
	}
</style>