function getFile() {
  var file = DriveApp.getFileById("<your-file-ID>");
  file.setTrashed(true);
}
