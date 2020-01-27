import moment from 'moment'

export const formatListDate = (dateString: string): string => {
  return moment(dateString).format('DD MMM YYYY')
}
