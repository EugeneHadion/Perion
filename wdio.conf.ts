import * as fs from "fs";
import * as path from "path";

let logs: string[] = [];
let fileName: string;

export const config: WebdriverIO.Config = {
  runner: "local",
  tsConfigPath: "./tsconfig.json",

  specs: [
    // './test/specs/**/*.ts'
    // "./test/specs/2_OdrerAheadBtn.e2e.ts",
    // "./test/specs/3_AdvertArea.e2e.ts",
    // "./test/specs/4_AdvertCloseBtn.e2e.ts",
    "./test/specs/5_AdvertAutoDisappearence.e2e.ts",

  ],
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 10,
  
  capabilities: [
    {
      browserName: "chrome",

      //     'goog:chromeOptions': {
      //     args: [
      //       '--headless',  // Запуск в headless режимі
      //       '--disable-gpu',  // Отключення графічного процесора (для Windows)
      //     //   '--window-size=1,920x1080', // Встановлення розміру вікна
      //     ],
      //   },
    },
  ],

  logLevel: "info",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  beforeSuite: async function (suite) {
    function logEvents(event: { text: string | null }) {
      if (event.text) {
        logs.push(event.text);
        console.log("Captured log entry: ", event.text);
      }
      fileName = path.basename(suite.file.replace(/\.[^.]+\.[^.]+$/, ""));
    }

    await browser.sessionSubscribe({ events: ["log.entryAdded"] });
    browser.on("log.entryAdded", logEvents);
    console.log(`Log event listener has been set up.`);
  },

  afterSuite: async function () {
    if (logs.length > 0) {
      fs.writeFileSync(`browserLogs_${fileName}.txt`, logs.join("\n"), "utf-8");
      console.log("Logs written to browserLogs.txt");
    } else {
      console.log("No logs were captured.");
    }
  },
};
