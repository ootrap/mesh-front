import {UserInfoResouce, WxmpResource, wxmpTokenResource} from './resources'

export default {
  getWxmpList: function () {
    return WxmpResource.get()
  },
  getUserInfo: function (id) {
    return UserInfoResouce.get({id})
  },
  deleteWxmp: function (id) {
    return UserInfoResouce.delete({id})
  },
  getWxToken: function (id) {
    return wxmpTokenResource.get({id})
  }
  // mdUser: function (data) {
  //   return UserResource.update({id:'mdUser'},data)
  // },
  // getTagList:function () {
  //   return TagResource.get({id: 'getFrontTagList'})
  // },
  // getApps:function () {
  //   return MobileResource.get({id: 'getApps'})
  // },
  // //article
  // getIndexImage:function () {
  //   return ArticleResource.get({id:'getIndexImage'})
  // },
  // getFrontArticleList:function (options) {
  //   return ArticleResource.get({id: 'getFrontArticleList', ...options})
  // },
  // getFrontArticleCount:function () {
  //   return ArticleResource.get({id: 'getFrontArticleCount'})
  // },
  // getFrontArticle:function (id) {
  //   return ArticleResource.get({id: id, controller: 'getFrontArticle'})
  // },
  // toggleLike:function (id) {
  //   return ArticleResource.update({id:id,controller:'toggleLike'},{})
  // },
  // getPrenext:function (id,options) {
  //   return ArticleResource.get({id:id,controller: 'getPrenext', ...options})
  // },
  // //comment
  // getFrontCommentList:function (id) {
  //   return CommentResource.get({id:id,controller: 'getFrontCommentList'})
  // },
  // addNewComment:function (data) {
  //   return CommentResource.save({id:'addNewComment'},data)
  // },
  // addNewReply: function (id,data) {
  //   return CommentResource.save({id:id, controller:'addNewReply'},data)
  // },
  // delComment:function (id) {
  //   return CommentResource.remove({id:id})
  // },
  // delReply: function (id,data) {
  //   return CommentResource.update({id:id, controller:'delReply'},data)
  // }
}
