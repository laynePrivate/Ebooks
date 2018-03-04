export default {
    //主页
    sys   : resolve => { require.ensure(['@/views/index'], () => { resolve(require('@/views/index')) }) },
    //首页
    index   : resolve => { require.ensure(['@/views/pages/index'], () => { resolve(require('@/views/pages/index')) }) },
    //账号
    login   : resolve => { require.ensure(['@/views/pages/login'], () => { resolve(require('@/views/pages/login')) }) },
    //邮件
    email   : resolve => { require.ensure(['@/views/pages/email'], () => { resolve(require('@/views/pages/email')) }) },
    //设置
    setting : resolve => { require.ensure(['@/views/pages/setting'], () => { resolve(require('@/views/pages/setting')) }) },
}