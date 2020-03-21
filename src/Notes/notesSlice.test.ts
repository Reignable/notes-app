import notes, { addNote } from './notesSlice'

describe('notes reducer', () => {
  it('should create initial state', () => {
    expect(notes(undefined, { type: undefined })).toEqual([])
  })

  it('should handle adding a note', () => {
    const expected = [{ body: '', title: '', id: 0 }]
    expect(notes([], { type: addNote.type })).toEqual(expected)
  })
})

describe('addNote', () => {
  it('should give each note incrementing ids', () => {
    const state1 = notes([], addNote())
    expect(state1[0].id).toEqual(0)
    const state2 = notes(state1, addNote())
    expect(state2[1].id).toEqual(1)
  })
})
