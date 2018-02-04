export default {
    //主页
    index   : resolve => { require.ensure(['@/views/index'], () => { resolve(require('@/views/index')) }) },
    //账号
    user   : resolve => { require.ensure(['@/views/user'], () => { resolve(require('@/views/user')) }) },
    //邮件
    email   : resolve => { require.ensure(['@/views/email'], () => { resolve(require('@/views/email')) }) },
    //设置
    setting : resolve => { require.ensure(['@/views/setting'], () => { resolve(require('@/views/setting')) }) },
}