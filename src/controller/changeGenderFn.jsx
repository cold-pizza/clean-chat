import { genderSwitch, setGenderSwitch } from '../model/genderSwitch';


  const changeGenderFn = function() {
    setGenderSwitch(!genderSwitch);
  }

export default changeGenderFn