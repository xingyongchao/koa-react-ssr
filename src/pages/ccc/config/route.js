//页面的路由配置 ,可配置成按需或者静态加载

import React from 'react';
import BaseBundle from '../../../routes/route-base-bundle';

const LazyPageCom = (props) => (
    <BaseBundle load={() => import(/*webpackChunkName:"chunk-ccc"*/'../index')}>
        {(CompIndex) => <CompIndex {...props} />}
    </BaseBundle>
);

export default [
    {
        path: '/ccc',
        component: LazyPageCom,
        exact: true
    }
]

