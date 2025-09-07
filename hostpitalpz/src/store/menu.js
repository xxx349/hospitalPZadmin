const state={
  isCollapse:false
  ,selectMenu:[]
}
const mutations={
  // 设置方法，使得isCollapse取反
  isCollapse(state){
    state.isCollapse=!state.isCollapse
  }
}
export default{
  state,
  mutations
}