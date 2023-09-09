export const createBusFormFields = [
  {
    labelTxt: `כתובת URL של תמונה`,
    inputType: `url`,
    servSign: `imgUrl`,
    required: true,
  },
  {
    labelTxt: `שם עסק`,
    inputType: `text`,
    servSign: `name`,
    required: true,
  },
  {
    labelTxt: `אתר`,
    inputType: `url`,
    servSign: `website`,
    required: true,
  },
  {
    labelTxt: `מס' טלפון`,
    inputType: `tel`,
    servSign: `phone`,
    required: true,
  },
  {
    labelTxt: `מדינה`,
    inputType: `text`,
    servSign: `address.country`,
    required: true,
  },
  {
    labelTxt: `עיר`,
    inputType: `text`,
    servSign: `address.city`,
    required: true,
  },
  {
    labelTxt: `רחוב`,
    inputType: `text`,
    servSign: `address.street`,
    required: true,
  },
];
