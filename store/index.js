export const state = () => ({
  /* 表示全部 */
  roleIndex: 0,
  categoryName: '',
  labelArr: [],
  labelList: []
})

export const mutations = {
  changeRoleIndex(state, index) {
    state.roleIndex = index
  },
  changecategoryName(state, val) {
    state.categoryName = val
  },
  changeLabeArr(state, val) {
    // state.labelArr = val;
  },
  formatTableList(state, val) {
    const laeblArr = [];
    const [newLabelId] = val.map((item) => {
      const {
        labelId
      } = item;
      return labelId
    })
    const [newLabelName] = val.map((item) => {
      const {
        labelName
      } = item;
      return labelName
    })
    if (newLabelId && newLabelName) {
      newLabelId.split(',').forEach((item, index) => {
        newLabelName.split(',').forEach((items, indexs) => {
          if (index === indexs) {
            laeblArr.push({
              name: items,
              id: item
            });
          }
        })
      })
    }
    state.labelArr = laeblArr;
  }
}
