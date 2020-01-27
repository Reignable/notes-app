import moment from 'moment'

export const formatViewDate = (dateString: string): string => {
  const date = moment(dateString)
  return `${date.format('DD MMM YYYY')} at ${date.format('LT')}`
}
