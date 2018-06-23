/**
 * facebook webhook types;
 */

export interface IMessengerWebhook {
  object: "page";
  entry: IMessengerEvent[];
}

export interface IMessengerEvent {
  id: string;
  time: number;
  messaging: IMessengerIncomingMessage[];
}

export interface IMessengerSender {
  id: string;
}

export interface IMessengerRecipient {
  id: string;
}

export interface IMessengerIncomingMessage {
  mid: string;
  text?: string;
  sender: IMessengerSender;
  recipient: IMessengerRecipient;
  attachments?: MessengerAttachments[];
  quick_reply?: {
    payload: string;
  };
}

export interface IMessengerMultimediaPayload {
  url: string;
}

export interface IMessengerLocationPayload {
  coordinates: {
    lat: number;
    long: number;
  };
}

export type MessengerFallbackPayload = null;

export interface IMessengerImageAttachment {
  type: "image";
  url: string;
  payload: IMessengerMultimediaPayload;
}

export interface IMessengerAudioAttachment {
  type: "audio";
  url: string;
  payload: IMessengerMultimediaPayload;
}

export interface IMessengerVideoAttachment {
  type: "video";
  url: string;
  payload: IMessengerMultimediaPayload;
}

export interface IMessengerFileAttachment {
  type: "file";
  url: string;
  payload: IMessengerMultimediaPayload;
}

export interface IMessengerLocationAttachment {
  type: "location";
  title: string;
  url: string;
  payload: IMessengerLocationPayload;
}

export interface IMessengerFallbackAttachment {
  type: "fallback";
  title: string;
  url: string;
  payload: MessengerFallbackPayload;
}

export type MessengerAttachments =
  | IMessengerImageAttachment
  | IMessengerImageAttachment
  | IMessengerVideoAttachment
  | IMessengerFileAttachment
  | IMessengerLocationAttachment
  | IMessengerFallbackAttachment
  | IMessengerAudioAttachment;

/**
 * client send api
 */

export interface IMessengerMessage {
  messaging_type: MessengerMessagingType;
  tag?: MessengerMessagingTag;
  recipient: IMessengerRecipient;
  message: {
    text?: string;
    attachment?: MessengerAttachments;
  };
}

export type MessengerMessagingType = "RESPONSE" | "UPDATE" | "MESSAGE_TAG";
export type MessengerMessagingTag =
  "COMMUNITY_ALERT"
  | "CONFIRMED_EVENT_REMINDER"
  | "NON_PROMOTIONAL_SUBSCRIPTION"
  | "PAIRING_UPDATE"
  | "APPLICATION_UPDATE"
  | "ACCOUNT_UPDATE"
  | "PAYMENT_UPDATE"
  | "PERSONAL_FINANCE_UPDATE"
  | "SHIPPING_UPDATE"
  | "RESERVATION_UPDATE"
  | "ISSUE_RESOLUTION"
  | "APPOINTMENT_UPDATE"
  | "GAME_EVENT"
  | "TRANSPORTATION_UPDATE"
  | "FEATURE_FUNCTIONALITY_UPDATE"
  | "TICKET_UPDATE";

export type MessengerImageAspectRatio = "horizontal" | "square";

// export interface IMessengerButtonTemplate {
//   template_type: "button";
//   text: string;
//   buttons: MessengerButtonTemplateButton[];
// }
//
// //
//
// export type MessengerButtonTemplateButton =
//   | UrlButton
//   | PostbackButton
//   | CallButton
//   | LoginButton
//   | LogoutButton
//   | GamePlayButton;
