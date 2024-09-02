import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType

const isApp = !!getClientConfig()?.isApp;
const en: LocaleType = {
  WIP: "Coming Soon...",
  Error: {
    Unauthorized: isApp
      ? "Invalid API Key, please add a valid key in [Preferences](/#/settings)."
      : "Unauthorized access, please enter access code in [auth](/#/auth) page, or enter your OpenAI API Key.",
  },
  Auth: {
    Title: "Need Access Code",
    Tips: "Please enter access code below",
    SubTips: "Or enter your OpenAI or Google API Key",
    Input: "access code",
    Confirm: "Confirm",
    Later: "Later",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} messages`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} messages`,
    EditMessage: {
      Title: "Edit All Messages",
      Topic: {
        Title: "Topic",
        SubTitle: "Change the current topic",
      },
    },
    Actions: {
      ChatList: "Go To Chat List",
      CompressedHistory: "Compressed History Memory Prompt",
      Export: "Export All Messages as Markdown",
      Copy: "Copy",
      Stop: "Stop",
      Retry: "Retry",
      Pin: "Pin",
      PinToastContent: "Pinned to contextual prompts",
      PinToastAction: "View",
      Delete: "Delete",
      Edit: "Edit",
      FullScreen: "FullScreen",
    },
    Commands: {
      new: "Start a new chat",
      newm: "Start a new chat with mask",
      next: "Next Chat",
      prev: "Previous Chat",
      clear: "Clear Context",
      del: "Delete Chat",
    },
    InputActions: {
      Stop: "Stop",
      ToBottom: "To Latest",
      Theme: {
        auto: "Auto",
        light: "Light Theme",
        dark: "Dark Theme",
      },
      Prompt: "Prompts",
      Masks: "Masks",
      Clear: "Clear Context",
      Settings: "Chat Settings",
      UploadImage: "Upload Images",
    },
    Rename: "Rename Chat",
    Typing: "Working…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} to send.`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += " Option-Return to wrap.";
      }
      return inputHints;
    },
    Send: "Send",
    Config: {
      Reset: "Reset to Default",
      SaveAs: "Save as Template",
    },
    IsContext: "Contextual Prompt",
  },
  Export: {
    Title: "Export Messages",
    Copy: "Copy All",
    Download: "Download",
    MessageFromYou: "Message From You",
    MessageFromChatGPT: "Message From ChatGPT",
    Share: "Share to ShareGPT",
    Format: {
      Title: "Export Format",
      SubTitle: "Markdown or PNG Image",
    },
    IncludeContext: {
      Title: "Including Context",
      SubTitle: "Export context prompts in mask or not",
    },
    Steps: {
      Select: "Select",
      Preview: "Preview",
    },
    Image: {
      Toast: "Capturing Image...",
      Modal: "Long press or right click to save image",
    },
    Artifacts: {
      Title: "Share Artifacts",
      Error: "Share Error",
    },
  },
  Select: {
    Search: "Search",
    All: "Select All",
    Latest: "Select Latest",
    Clear: "Clear",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Nothing yet.",
    Send: "Send Memory",
    Copy: "Copy Memory",
    Reset: "Reset Session",
    ResetConfirm:
      "Resetting will clear the current conversation history and historical memory. Are you sure you want to reset?",
  },
  Home: {
    NewChat: "New Chat",
    DeleteChat: "Delete this conversation?",
    DeleteToast: "Conversation Deleted",
    Revert: "Revert",
  },
  Settings: {
    Title: "Preferences",
    SubTitle: "",
    ShowPassword: "ShowPassword",
    Danger: {
      Reset: {
        Title: "Reset Preferences",
        SubTitle: "",
        Action: "Reset",
        Confirm: "Are you sure you want to reset all preferences to their default settings?",
      },
      Clear: {
        Title: "Delete Everything",
        SubTitle: "",
        Action: "Delete",
        Confirm: "Delete your entire chat history and reset all preferences?",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "All Languages",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Font Size",
      SubTitle: "Adjust the font size of chat messages.",
    },
    FontFamily: {
      Title: "Chat Font Family",
      SubTitle:
        "Font Family of the chat content, leave empty to apply global default font",
      Placeholder: "Font Family Name",
    },
    InjectSystemPrompts: {
      Title: "Inject System Prompts",
      SubTitle: "Inject a global system prompt for every request",
    },
    InputTemplate: {
      Title: "Input Template",
      SubTitle: "Newest message will be filled to this template",
    },

    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Latest version",
      CheckUpdate: "Check Update",
      IsChecking: "Checking update...",
      FoundUpdate: (x: string) => `Found new version: ${x}`,
      GoToUpdate: "Update",
    },
    SendKey: "Send Key",
    Theme: "Theme",
    TightBorder: "Tight Border",
    SendPreviewBubble: {
      Title: "Show Preview Bubble",
      SubTitle: "Display a preview of your message as you type.",
    },
    AutoGenerateTitle: {
      Title: "Generate Conversation Titles",
      SubTitle: "Automatically generate a title for your conversations.",
    },
    Sync: {
      CloudState: "Last Update",
      NotSyncYet: "Not sync yet",
      Success: "Sync Success",
      Fail: "Sync Fail",

      Config: {
        Modal: {
          Title: "Config Sync",
          Check: "Check Connection",
        },
        SyncType: {
          Title: "Sync Type",
          SubTitle: "Choose your favorite sync service",
        },
        Proxy: {
          Title: "Enable CORS Proxy",
          SubTitle: "Enable a proxy to avoid cross-origin restrictions",
        },
        ProxyUrl: {
          Title: "Proxy Endpoint",
          SubTitle:
            "Only applicable to the built-in CORS proxy for this project",
        },

        WebDav: {
          Endpoint: "WebDAV Endpoint",
          UserName: "User Name",
          Password: "Password",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "Backup Name",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "Local Data",
      Overview: (overview: any) => {
        return `${overview.chat} chats，${overview.message} messages，${overview.prompt} prompts，${overview.mask} masks`;
      },
      ImportFailed: "Failed to import from file",
    },
    Mask: {
      Splash: {
        Title: "Mask Splash Screen",
        SubTitle: "Show a mask splash screen before starting new chat",
      },
      Builtin: {
        Title: "Hide Builtin Masks",
        SubTitle: "Hide builtin masks in mask list",
      },
    },
    Prompt: {
      Disable: {
        Title: "Disable auto-completion",
        SubTitle: "Input / to trigger auto-completion",
      },
      List: "Prompt List",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "Edit",
      Modal: {
        Title: "Prompt List",
        Add: "Add One",
        Search: "Search Prompts",
      },
      EditModal: {
        Title: "Edit Prompt",
      },
    },
    HistoryCount: {
      Title: "Maximum Historical Messages",
      SubTitle: "Maximum number of previous messages in a conversation to send to the model.",
    },
    CompressThreshold: {
      Title: "History Compression Threshold",
      SubTitle:
        "Will compress if uncompressed messages length exceeds the value",
    },

    Usage: {
      Title: "Account Balance",
      SubTitle(used: any, total: any) {
        return `Used this month $${used}, subscription $${total}`;
      },
      IsChecking: "Checking...",
      Check: "Check",
      NoAccess: "Enter API Key to check balance",
    },
    Access: {
      AccessCode: {
        Title: "Access Code",
        SubTitle: "Access control Enabled",
        Placeholder: "Enter Code",
      },
      CustomEndpoint: {
        Title: "Custom Endpoint",
        SubTitle: "Use custom Azure or OpenAI service",
      },
      Provider: {
        Title: "Model Provider",
        SubTitle: "Select a provider to configure its settings:",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle: "",
          Placeholder: "sk-xxx",
        },

        Endpoint: {
          Title: "OpenAI Endpoint",
          SubTitle: "Must start with https://",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure Api Key",
          SubTitle: "Check your api key from Azure console",
          Placeholder: "Azure Api Key",
        },

        Endpoint: {
          Title: "Azure Endpoint",
          SubTitle: "Example: ",
        },

        ApiVerion: {
          Title: "Azure Api Version",
          SubTitle: "Check your api version from azure console",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle: "",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },

        ApiVerion: {
          Title: "API Version",
          SubTitle: "",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "Use a custom Baidu API Key",
          Placeholder: "Baidu API Key",
        },
        SecretKey: {
          Title: "Baidu Secret Key",
          SubTitle: "Use a custom Baidu Secret Key",
          Placeholder: "Baidu Secret Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "not supported, configure in .env",
        },
      },
      Tencent: {
        ApiKey: {
          Title: "Tencent API Key",
          SubTitle: "Use a custom Tencent API Key",
          Placeholder: "Tencent API Key",
        },
        SecretKey: {
          Title: "Tencent Secret Key",
          SubTitle: "Use a custom Tencent Secret Key",
          Placeholder: "Tencent Secret Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "not supported, configure in .env",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "Use a custom ByteDance API Key",
          Placeholder: "ByteDance API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "Use a custom Alibaba Cloud API Key",
          Placeholder: "Alibaba Cloud API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      Moonshot: {
        ApiKey: {
          Title: "Moonshot API Key",
          SubTitle: "Use a custom Moonshot API Key",
          Placeholder: "Moonshot API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      Stability: {
        ApiKey: {
          Title: "Stability API Key",
          SubTitle: "Use a custom Stability API Key",
          Placeholder: "Stability API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      Iflytek: {
        ApiKey: {
          Title: "Iflytek API Key",
          SubTitle: "Use a Iflytek API Key",
          Placeholder: "Iflytek API Key",
        },
        ApiSecret: {
          Title: "Iflytek API Secret",
          SubTitle: "Use a Iflytek API Secret",
          Placeholder: "Iflytek API Secret",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      CustomModel: {
        Title: "Custom Models",
        SubTitle: "Custom model options, seperated by comma",
      },
      Google: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "",
          Placeholder: "",
        },

        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },

        ApiVersion: {
          Title: "API Version",
          SubTitle: "Only applies to gemini-pro.",
        },
        GoogleSafetySettings: {
          Title: "Google Safety Settings",
          SubTitle: "Select a filtering level.",
        },
      },
    },

    Model: "Model",
    Temperature: {
      Title: "Temperature",
      SubTitle: "Lower temperatures make output more predictable; higher temperatures make it more creative. If you adjust this value, leave Top P at the default.",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Larger values increase make the model more likely to choose unusual words. If you adjust this value, leave Temperature at the default.",
    },
    MaxTokens: {
      Title: "Maximum Tokens",
      SubTitle: "Maximum number of input and output tokens.",
    },
    PresencePenalty: {
      Title: "Presence Penalty",
      SubTitle:
        "Larger values will make the model more likely to discuss new topics.",
    },
    FrequencyPenalty: {
      Title: "Frequency Penalty",
      SubTitle:
        "Larger values will make the model less likely to repeat words or phrases.",
    },
  },
  Store: {
    DefaultTopic: "New Conversation",
    BotHello: "Hello! How can I assist you today?",
    Error: "Something went wrong, please try again later.",
    Prompt: {
      History: (content: string) =>
        "This is a summary of the chat history as a recap: " + content,
      Topic:
        "Please generate a four to five word title summarizing our conversation without any lead-in, punctuation, quotation marks, periods, symbols, bold text, or additional text. Remove enclosing quotation marks.",
      Summarize:
        "Summarize the discussion briefly in 200 words or less to use as a prompt for future context.",
    },
  },
  Copy: {
    Success: "Copied to clipboard",
    Failed: "Copy failed, please grant permission to access clipboard",
  },
  Download: {
    Success: "Content downloaded to your directory.",
    Failed: "Download failed.",
  },
  Context: {
    Toast: (x: any) => `With ${x} contextual prompts`,
    Edit: "Current Chat Settings",
    Add: "Add a Prompt",
    Clear: "Context Cleared",
    Revert: "Revert",
  },
  Plugin: {
    Name: "Plugin",
    Artifacts: "Artifacts",
  },
  Discovery: {
    Name: "Discovery",
  },
  FineTuned: {
    Sysmessage: "You are an assistant that",
  },
  Mask: {
    Name: "Mask",
    Page: {
      Title: "Prompt Template",
      SubTitle: (count: number) => `${count} templates`,
      Search: "Search Templates",
      Create: "New Template",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "View",
      Edit: "Edit",
      Delete: "Delete",
      DeleteConfirm: "Delete this template?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Prompt Template ${readonly ? "(readonly)" : ""}`,
      Download: "Download",
      Clone: "Clone",
    },
    Config: {
      Avatar: "Bot Avatar",
      Name: "Bot Name",
      Sync: {
        Title: "Use Global Config",
        SubTitle: "Use global config in this chat",
        Confirm: "Confirm to override custom config with global config?",
      },
      HideContext: {
        Title: "Hide Context Prompts",
        SubTitle: "Do not show in-context prompts in chat",
      },
      Share: {
        Title: "Share This Mask",
        SubTitle: "Generate a link to this mask",
        Action: "Copy Link",
      },
    },
  },
  NewChat: {
    Return: "Return",
    Skip: "Just Start",
    Title: "Pick a Mask",
    SubTitle: "Chat with the Soul behind the Mask",
    More: "Find More",
    NotShow: "Never Show Again",
    ConfirmNoShow: "Confirm to disable？You can enable it in settings later.",
  },

  UI: {
    Confirm: "Confirm",
    Cancel: "Cancel",
    Close: "Close",
    Create: "Create",
    Edit: "Edit",
    Export: "Export",
    Import: "Import",
    Sync: "Sync",
    Config: "Config",
  },
  Exporter: {
    Description: {
      Title: "Only messages after clearing the context will be displayed",
    },
    Model: "Model",
    Messages: "Messages",
    Topic: "Topic",
    Time: "Time",
  },
  URLCommand: {
    Code: "Detected access code from url, confirm to apply? ",
    Settings: "Detected settings from url, confirm to apply?",
  },
  SdPanel: {
    Prompt: "Prompt",
    NegativePrompt: "Negative Prompt",
    PleaseInput: (name: string) => `Please input ${name}`,
    AspectRatio: "Aspect Ratio",
    ImageStyle: "Image Style",
    OutFormat: "Output Format",
    AIModel: "AI Model",
    ModelVersion: "Model Version",
    Submit: "Submit",
    ParamIsRequired: (name: string) => `${name} is required`,
    Styles: {
      D3Model: "3d-model",
      AnalogFilm: "analog-film",
      Anime: "anime",
      Cinematic: "cinematic",
      ComicBook: "comic-book",
      DigitalArt: "digital-art",
      Enhance: "enhance",
      FantasyArt: "fantasy-art",
      Isometric: "isometric",
      LineArt: "line-art",
      LowPoly: "low-poly",
      ModelingCompound: "modeling-compound",
      NeonPunk: "neon-punk",
      Origami: "origami",
      Photographic: "photographic",
      PixelArt: "pixel-art",
      TileTexture: "tile-texture",
    },
  },
  Sd: {
    SubTitle: (count: number) => `${count} images`,
    Actions: {
      Params: "See Params",
      Copy: "Copy Prompt",
      Delete: "Delete",
      Retry: "Retry",
      ReturnHome: "Return Home",
      History: "History",
    },
    EmptyRecord: "No images yet",
    Status: {
      Name: "Status",
      Success: "Success",
      Error: "Error",
      Wait: "Waiting",
      Running: "Running",
    },
    Danger: {
      Delete: "Confirm to delete?",
    },
    GenerateParams: "Generate Params",
    Detail: "Detail",
  },
};

export default en;
