import initStoryshots, {
  multiSnapshotWithOptions,
  Stories2SnapsConverter,
} from '@storybook/addon-storyshots'
import path from 'path'

initStoryshots({
  test: multiSnapshotWithOptions(),
  integrityOptions: {
    cwd: path.resolve(__dirname, '../../stories'),
  },
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotsDirName: './__snapshots__',
    snapshotExtension: '.snap.ts',
  }),
})
