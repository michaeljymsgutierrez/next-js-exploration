export default function HumanizeString(props) {
  let textString = props.text.toString().replace(/[_-]/g, ' ') || ''
  let words = textString.split(' ')
  let titleizeWords = []
  let capitalizeWords = []

  if (props.upperCase === true) {
    textString = textString.toUpperCase()
  }

  if (props.lowerCase === true) {
    textString = textString.toLowerCase()
  }

  if (props.capitalize === true) {
    capitalizeWords = words.map((word, index) =>
      index === 0
        ? word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)
        : word
    )
    textString = capitalizeWords.join(' ')
  }

  if (props.titleize === true) {
    titleizeWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)
    )
    textString = titleizeWords.join(' ')
  }

  return <>{textString}</>
}
