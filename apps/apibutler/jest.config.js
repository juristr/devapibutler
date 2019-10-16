module.exports = {
  name: 'apibutler',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/apibutler',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
