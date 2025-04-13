export class AppError {
  FsMessage: string;

  constructor(psMessage: string) {
    this.FsMessage = psMessage;
  }
}