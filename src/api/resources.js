import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'
Vue.use(VueResource)
Vue.http.options.crossOrigin = true

export const WxmpResource = Vue.resource(API_ROOT + 'mplist')
export const UserInfoResouce = Vue.resource(API_ROOT + 'wxmp{/id}')
export const wxmpTokenResource = Vue.resource(API_ROOT + 'wxToken{/id}')
// export const ArticleResource = Vue.resource(API_ROOT + 'article{/id}{/controller}')
// export const TagResource = Vue.resource(API_ROOT + 'tags{/id}')
// export const CommentResource = Vue.resource(API_ROOT + 'comment{/id}{/controller}')
// export const MobileResource = Vue.resource(API_ROOT + 'mobile{/id}')
