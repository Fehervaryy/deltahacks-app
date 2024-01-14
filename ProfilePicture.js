import { Image } from "react-native"
export const ProfilePicture = props => {
  if (props.id % 6 === 0) {
    // return (
    //  // <Image source={require('./assets/profilepics/bubbles.jpg')} />
    // )
  } else if (props.id % 6 === 1) {
    return (
      <Image />
    )
  } else if (props.id % 6 === 2) {
    return (
      <Image />
    )
  } else if (props.id % 6 === 3) {
    return (
      <Image />
    )
  } else if (props.id % 6 === 4) {
    return (
      <Image />
    )
  } else {
    return (
      <Image />
    )
  }

} 
