import { formatListDate } from './formatListDate'

describe('formatListDate', () => {
  it('Should format the date correctly', () => {
    const dateString = '2020-01-28T16:00:00.000Z'
    const expected = '28 Jan 2020'
    const result = formatListDate(dateString)
    expect(result).toEqual(expected)
  })
  it('Should not show time', () => {
    const dateString = '2020-01-28T16:00:00.000Z'
    const expected = '28 Jan 2020 at 4:00 PM'
    const result = formatListDate(dateString)
    expect(result).not.toEqual(expected)
  })
})
