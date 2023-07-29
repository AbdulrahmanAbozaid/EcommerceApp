import winston from "winston";

const dateFormat = () => new Date(Date.now()).toUTCString();

class LoggerService {
  constructor(folder, fileName) {
    this.folder = folder;
    this.fileName = fileName;
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.printf((info) => {
        let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${
          info.message
        } | ${info.data ? "data: " + JSON.stringify(info.data) : ""}`;
        return message;
      }),
      defaultMeta: { service: "user-service" },
      transports: [
        new winston.transports.File({
          filename: `logs/${this.folder}/${this.fileName}.log`,
        }),
      ],
    });
  }

  async info(msg) {
    this.logger.info(msg);
  }
  async info(msg, data) {
    this.logger.info(msg, { data });
  }

  async error(msg) {
    this.logger.error(msg);
  }
  async error(msg, data) {
    this.logger.error(msg, { data });
  }

  async debug(msg) {
    this.logger.log("debug", msg);
  }
  async debug(msg, data) {
    this.logger.log("debug", msg, { data });
  }
}

export default LoggerService;
