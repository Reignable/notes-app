import { formatViewDate } from './formatViewDate'

describe('formatViewDate', () => {
  it('Should return the correctly formatted string', () => {
    const dateString = '2020-01-28T08:00:00.000Z'
    const result = formatViewDate(dateString)
    const expected = '28 Jan 2020 at 8:00 AM'
    expect(result).toEqual(expected)
  })
  it('should not format to 24hr time', () => {
    const dateString = '2020-01-28T16:00:00.000Z'
    const result = formatViewDate(dateString)
    const expected = '28 Jan 2020 at 4:00 PM'
    expect(result).toEqual(expected)
  })
})
