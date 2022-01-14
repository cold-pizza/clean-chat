
  // 성별 결졍 함수.
  const selectGenderFn = function(selectGender, joinAccount, setJoinAccount) {
    if (selectGender) {
      setJoinAccount({ ...joinAccount, gender: 'male' })
    } else {
      setJoinAccount({ ...joinAccount, gender: 'female' })
    }
  }

export default selectGenderFn