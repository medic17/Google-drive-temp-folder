function getFile() {
  var file = DriveApp.getFileById("1DjBmhDkNFTFMi2oIko2Aa3YG789DH6yH");
  file.setTrashed(true);
}
