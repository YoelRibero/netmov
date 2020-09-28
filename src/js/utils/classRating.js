export const classRating = rating => {
  if (rating <= 3) {
    return 'bad'
  } else if (rating > 3 && rating < 8) {
    return 'warning'
  } else {
    return 'success'
  }
}
